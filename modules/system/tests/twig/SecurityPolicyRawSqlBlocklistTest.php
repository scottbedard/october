<?php

use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder as QueryBuilder;
use System\Twig\SecurityPolicy;
use Twig\Sandbox\SecurityNotAllowedMethodError;

/**
 * SecurityPolicyRawSqlBlocklistTest verifies raw-SQL and subquery
 * methods are blocked on Query\Builder, Eloquent\Builder, and
 * Eloquent\Model. All three can __call-forward to each other and
 * ultimately to Query\Builder, so the blocklist must be consistent
 * across the chain to prevent a Twig template from reaching raw
 * SQL via any of them.
 */
class SecurityPolicyRawSqlBlocklistTest extends TestCase
{
    protected SecurityPolicy $policy;

    public function setUp(): void
    {
        parent::setUp();
        $this->policy = new SecurityPolicy();
    }

    /** @return array<int, string> */
    public function rawSqlMethods(): array
    {
        return [
            'selectRaw', 'whereRaw', 'orWhereRaw',
            'havingRaw', 'orHavingRaw',
            'orderByRaw', 'groupByRaw',
            'fromRaw', 'fromSub',
            'joinSub', 'leftJoinSub', 'rightJoinSub', 'crossJoinSub',
            'raw', 'rawValue',
        ];
    }

    public function testRawSqlMethodsBlockedOnQueryBuilder()
    {
        $builder = $this->makeQueryBuilder();

        foreach ($this->rawSqlMethods() as $method) {
            try {
                $this->policy->checkMethodAllowed($builder, $method);
                $this->fail("Expected {$method}() to be blocked on Query\\Builder");
            }
            catch (SecurityNotAllowedMethodError $e) {
                $this->assertStringContainsString($method, $e->getMessage());
            }
        }
    }

    public function testRawSqlMethodsBlockedOnEloquentBuilder()
    {
        $builder = $this->makeEloquentBuilder();

        foreach ($this->rawSqlMethods() as $method) {
            try {
                $this->policy->checkMethodAllowed($builder, $method);
                $this->fail("Expected {$method}() to be blocked on Eloquent\\Builder");
            }
            catch (SecurityNotAllowedMethodError $e) {
                $this->assertStringContainsString($method, $e->getMessage());
            }
        }
    }

    public function testRawSqlMethodsBlockedOnEloquentModel()
    {
        // Eloquent\Model::__call forwards to newQuery(), so any raw-SQL
        // method called on a Twig-exposed model reaches Query\Builder.
        // The policy must block these at the Model class level too.
        $model = new SecurityPolicyRawSqlBlocklistTestModel();

        foreach ($this->rawSqlMethods() as $method) {
            try {
                $this->policy->checkMethodAllowed($model, $method);
                $this->fail("Expected {$method}() to be blocked on Eloquent\\Model");
            }
            catch (SecurityNotAllowedMethodError $e) {
                $this->assertStringContainsString($method, $e->getMessage());
            }
        }
    }

    public function testSafeBuilderMethodsStillAllowed()
    {
        $builder = $this->makeQueryBuilder();

        // Sanity check: tightening the blocklist must not break the
        // safe read DSL that themes legitimately use.
        foreach (['where', 'orderBy', 'limit', 'take', 'skip', 'get', 'first', 'pluck', 'count'] as $method) {
            $this->policy->checkMethodAllowed($builder, $method);
        }

        $this->assertTrue(true);
    }

    /**
     * makeQueryBuilder returns an object that satisfies is_a(QueryBuilder)
     * without invoking the real Builder constructor (which would require a
     * booted database connection and grammar). The policy only inspects
     * the object's type, never invokes its methods.
     */
    protected function makeQueryBuilder(): QueryBuilder
    {
        return (new ReflectionClass(QueryBuilder::class))->newInstanceWithoutConstructor();
    }

    /**
     * makeEloquentBuilder returns an object that satisfies is_a(EloquentBuilder)
     * without invoking the real Builder constructor.
     */
    protected function makeEloquentBuilder(): EloquentBuilder
    {
        return (new ReflectionClass(EloquentBuilder::class))->newInstanceWithoutConstructor();
    }
}

/**
 * Fixture: a minimal Eloquent\Model whose only purpose is to satisfy
 * is_a(Model::class) for the policy check. We never call methods on it.
 */
class SecurityPolicyRawSqlBlocklistTestModel extends Model
{
    protected $table = 'security_policy_raw_sql_blocklist_test';
    protected $guarded = [];
}
