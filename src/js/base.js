"use strict";

// Module: Base Library

define(
  ["base/view",
   "base/class",
   "base/reqres",
   "base/vent"],
  function(View, Class, Reqres, Vent) {
    return {
      View: View,
      Class: Class,
      Reqres: Reqres,
      Vent: Vent
    };
  });
