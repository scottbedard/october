<?php if ($value): ?>
    <?php if ($column->clickable !== false): ?>
        <ul class="list-link-list">
            <?php
                $url = Backend::url('tailor/entries/'.$value->blueprint->handleSlug.'/'.$value->id);
            ?>
            <li><a href="<?= $url ?>"><?= e($value->title) ?></a></li>
        </ul>
    <?php else: ?>
        <?= e($value->title) ?>
    <?php endif ?>
<?php endif ?>
