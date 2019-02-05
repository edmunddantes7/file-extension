/*! file-extension v4.0.5 | (c) silverwind | BSD license */
"use strict";

const getExtension = 

(function(m) {
  if (typeof exports === "object") {
    module.exports = m();
  } else if (typeof define === "function" && define.amd) {
    define([], m);
  } else {
    this.fileExtension = m();
  }
})(function() {
  return function fileExtension(filename, opts) {
    if (!opts) opts = {};
    if (!filename) return "";
		var ext = (/[^./\\]*$/.exec(filename) || [""])[0];
		
		const extensionsMap = require("./fileExtentsionToLanguageNameMap");
		ext = (opts.languageName && ext in extensionsMap) ? extensionsMap[ext] : ext;
		ext = opts.preserveCase ? ext : ext.toLowerCase();		
		return ext;
  };
});
