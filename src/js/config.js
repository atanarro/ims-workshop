require.config({
  paths: {
    backbone: "../../bower_components/backbone/backbone",
    jquery: "../../bower_components/jquery/jquery",
    underscore: "../../bower_components/underscore/underscore",
    handlebars: "../../bower_components/handlebars/handlebars",
    "handlebars.runtime": "../../bower_components/handlebars/handlebars.runtime"
  },
  shim: {
    jquery: {
      exports: "jQuery"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: [
        "jquery",
        "underscore"
      ],
      exports: "Backbone"
    },
    handlebars: {
      exports: "Handlebars"
    }
  }
});

/* Require the initial module */
require(["app"], function() {
  "use strict";
});
