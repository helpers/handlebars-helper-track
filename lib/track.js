/**
 * Handlebars Helpers: {{track}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

'use strict';

// Node.js
var path = require('path');
var fs = require('fs');


// Export helpers
module.exports.register = function (Handlebars, options, params) {

  /**
   * {{track}}
   */
  exports.track = function(description, location) {
    var template = "onclick=\"_gaq.push(['_trackEvent', '" + location + " actions', '" + location + " links', '" + description + "']);\"";
    return new Handlebars.SafeString(template);
  };


  for (var helper in exports) {
    if (exports.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, exports[helper]);
    }
  }
};
