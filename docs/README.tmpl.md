# {{{%= shortname %}}} [![NPM version](https://badge.fury.io/js/helper-{%= name %}.png)](http://badge.fury.io/js/helper-{%= name %})

> {%= description %}

Visit [Google's documentation][docs] and Google's [event tracking guide][guide] to learn more about tracking with Google Analytics.

## Quickstart
{%= _.doc("quickstart.md") %}

## Options
{%= _.doc("options.md") %}

***

## Contributing
{%= _.contrib("contributing.md") %}

## Related projects
Here are some other Handlebars helpers you might be interested in from the [Assemble](http://assemble.io) core team.
{% _.each(repos, function(repo) { %}
+ [{%= repo.name %}]({%= repo.url %}): {%= repo.description %} {% }); %}

Visit [assemble.io/helpers](http:/assemble.io/helpers/) for more information about using helpers with [Assemble](http:/assemble.io/).

## Author
{%= _.contrib("authors.md") %}

## License
{%= copyright %}
{%= license %}

***

{%= _.include("footer.md") %}

[docs]: https://support.google.com/analytics/answer/1008080?hl=en
[guide]: https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide