# {{track}} [![NPM version](https://badge.fury.io/js/helper-handlebars-helper-track.png)](http://badge.fury.io/js/helper-handlebars-helper-track)

> {{track}} handlebars helper to simplify adding Google analytics tracking codes.

Visit [Google's documentation][docs] and Google's [event tracking guide][guide] to learn more.

## Quickstart
Install the helper with: `npm install handlebars-helper-track`

### Gruntfile config
If you use [Assemble](http://assemble.io) and Grunt, in your project's Gruntfile add `handlebars-helper-track` to the `helpers` option in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      helpers: ['handlebars-helper-track', 'other/helpers/*.js']
    },
    files: {}
  }
});
```
_Note that the 'handlebars-helper-track' module **must also be listed in devDependencies** for Assemble to automatically resolve the helper._

Alternatively you can register the helper with Assemble by adding `handlebars-helper-track` to both the `devDependencies` and the `keywords` array in your project's package.json.

### Usage with Assemble

With that completed, you may now use the `{{track}}` helper in your templates:

```handlebars
{{track 'foo'}}
```

Please [report any bugs or feature requests](https://github.com/helpers/handlebars-helper-track/issues/new), thanks!



## Options
### foo
Type: `String`
Default: `undefined`

_TODO_


***

## Contributing
Find a bug? Have a feature request? Please [create an Issue](https://github.com/helpers/handlebars-helper-track/issues).

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][], and build the documentation with [grunt-readme](https://github.com/assemble/grunt-readme).

Pull requests are also encouraged, and if you find this project useful please consider "starring" it to show your support! Thanks!


## Related projects
Here are some other Handlebars helpers you might be interested in from the [Assemble](http://assemble.io) core team.

+ [handlebars-helper-aggregate](https://github.com/helpers/handlebars-helper-aggregate): {{aggregate}} handlebars helper. inlines content from multiple files optionally using wildcard (globbing/minimatch) patterns. uses YAML front matter as context for each file. optionally pass in a sorting function. 
+ [handlebars-helper-compose](https://github.com/helpers/handlebars-helper-compose): {{compose}} handlebars helper. Similar to {{aggregate}}, but this is a block expression helper that inlines content from multiple files differently, extracting YAML front matter to pass to context for each file. Optionally use wildcard (globbing/minimatch) patterns. Accepts compare function as 3rd parameter for sorting inlined files. 
+ [handlebars-helper-condense](https://github.com/helpers/handlebars-helper-condense): Remove extra newlines from HTML content. 
+ [handlebars-helper-eachitems](https://github.com/helpers/handlebars-helper-eachitems): {{eachItems}} handlebars helper. 
+ [handlebars-helper-jade](https://github.com/helpers/handlebars-helper-jade): {{jade}} handlebars helper, for converting basic Jade templates to HTML.  
+ [handlebars-helper-less](https://github.com/helpers/handlebars-helper-less): {{less}} handlebars helper. This helper allows you to use LESS inside style tags in your HTML. By default, the resulting CSS will be rendered inside the `<style>...</style>` tags of the rendered HTML, but you may alternatively define a destination path using the `dest` hash option of the helper. 
+ [handlebars-helper-lorem](https://github.com/helpers/handlebars-helper-lorem): {{lorem}} handlebars helper, for generating lorem lorem placeholder text. 
+ [handlebars-helper-minify](https://github.com/helpers/handlebars-helper-minify): {{minify}} handlebars helper, for minification of HTML with html-minifier. 
+ [handlebars-helper-moment](https://github.com/helpers/handlebars-helper-moment): {{moment}} handlebars helper. Combines the powers of Assemble, Handlebars.js and Moment.js into a great helper to master time. 
+ [handlebars-helper-not](https://github.com/helpers/handlebars-helper-not): {{not}} handlebars helper. Conditionally render a block if the condition is false. This block helper is really just a semantic alternative to {{isnt}} 
+ [handlebars-helper-paginate](https://github.com/helpers/handlebars-helper-paginate): {{paginate}} handlebars helper. Made for Assemble, the static site generator for Node.js, Grunt.js and Yeoman. 
+ [handlebars-helper-pkg](https://github.com/helpers/handlebars-helper-pkg): {{pkg}} handlebars helper, for retrieving a value from your project's package.json 
+ [handlebars-helper-post](https://github.com/helpers/handlebars-helper-post): {{post}} handlebars helper, for including a post, or a list of posts. 
+ [handlebars-helper-prettify](https://github.com/helpers/handlebars-helper-prettify): {{prettify}} handlebars helper, for formatting ("beautifying") HTML, CSS and JavaScript.      
+ [handlebars-helper-process](https://github.com/helpers/handlebars-helper-process): {{process}} handlebars helper, for processing raw templates in included content, with the correct context 
+ [handlebars-helper-repeat](https://github.com/helpers/handlebars-helper-repeat): {{repeat}} handlebars helper, for duplicating a block of content n times. 
+ [handlebars-helper-slugify](https://github.com/helpers/handlebars-helper-slugify): Convert strings into URL slugs. 

Visit [assemble.io/helpers](http:/assemble.io/helpers/) for more information about using helpers with [Assemble](http:/assemble.io/).

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## License
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated by [grunt-readme](https://github.com/assemble/grunt-readme) on Tuesday, December 3, 2013._

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html


[docs]: https://support.google.com/analytics/answer/1008080?hl=en
[guide]: https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide