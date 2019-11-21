<p align="center">
    <img src="https://github.com/octobercms/october/blob/master/themes/demo/assets/images/october.png?raw=true" alt="October" width="auto" height="80px" />
</p>

#### What is this?

This fork exists solely to deploying example projects easier, it is not intended to be used in production apps.

#### Differences with upstream repository

1. This repository includes a `composer.lock` file. Having this present lowers the memory needed to install composer dependencies, making it easier to spin up example projects using a tool like Forve and Envoyer.
2. Environment variables from a `.env` files can be used to configure the theme and database.
