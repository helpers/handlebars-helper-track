Install the helper with: `npm install {%= name %}`

## Gruntfile config
If you use [Assemble](http://assemble.io) and Grunt, in your project's Gruntfile add `{%= name %}` to the `helpers` option in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      helpers: ['{%= name %}', 'other/helpers/*.js']
    },
    files: {}
  }
});
```
_Note that the '{%= name %}' module **must also be listed in devDependencies** for Assemble to automatically resolve the helper._

Alternatively you can register the helper with Assemble by adding `{%= name %}` to both the `devDependencies` and the `keywords` array in your project's package.json.

## Usage with Assemble

With that completed, you may now use the `{{{%= shortname %}}}` helper in your templates:

```handlebars
{{{%= shortname %} 'foo'}}
```

Please [report any bugs or feature requests](https://github.com/helpers/{%= name %}/issues/new), thanks!
