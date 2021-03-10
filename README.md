# akeneo-requirejs-with-react-ts
An example bundle for using mostly Typescript and React instead of RequireJS in Akeneo

## Installation

``` bash
composer require flagbird/akeneo-requirejs-with-react-ts:dev-main
```

### Enable the bundle

``` php
<?php
// config/bundles.php

return [
    // ...
    Flagbird\AppBundle::class => ['all' => true],
];
```

Create a route yaml file in `config/routes`:

```yaml
app:
  resource: "@AppBundle/Resources/config/routes/app.yml"
```

Clear cache and rebuild your frontend.
