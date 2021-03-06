# Module Youwe UserList Widget

    ``youwe/module-userslist``

 - [Main Functionalities](#markdown-header-main-functionalities)
 - [Installation](#markdown-header-installation)
 - [Configuration](#markdown-header-configuration)
 - [Specifications](#markdown-header-specifications)
 - [Attributes](#markdown-header-attributes)


## Main Functionalities
Youwe UserList Widget

## Installation
\* = in production please use the `--keep-generated` option

### Type 1: Zip file

 - Unzip the zip file somewhere on local machine.
 - Copy folder "Youwe" in `app/code/`.
 - Enable the module by running `php bin/magento module:enable Youwe_UsersList`
 - Apply database updates by running `php bin/magento setup:upgrade`\*
 - Flush the cache by running `php bin/magento cache:flush`

### Type 2: Composer (not available at the moment)

 - Make the module available in a composer repository for example:
    - private repository `repo.magento.com`
    - public repository `packagist.org`
    - public github repository as vcs
 - Add the composer repository to the configuration by running `composer config repositories.repo.magento.com composer https://repo.magento.com/`
 - Install the module composer by running `composer require youwe/module-userslist`
 - enable the module by running `php bin/magento module:enable Youwe_UsersList`
 - apply database updates by running `php bin/magento setup:upgrade`\*
 - Flush the cache by running `php bin/magento cache:flush`


## Configuration
- Add widget using Content > Widgets > Add Widget or
- Add Widget in any page/CMS block using WYSIWYG editor (make sure to disable Page Builder first for this to work).
- Under widget options add:
   * Widget Title (optional)
   * Provide API for users data (required). Use API https://reqres.in/api/users as test API.



## Specifications


## Attributes



