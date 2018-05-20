'use strict';

var jsonfile = require('jsonfile');

function run(opts) {
  var options = {
    command: '',
    file: 'suggestions.json',
    text: 'Did want to say that?'
  };

  if (typeof opts == 'string') {
    opts = {
      command: opts
    };
  }

  if (typeof opts !== 'object') {
    opts = {};
  }

  options.command = opts.command || options.command;
  options.file = opts.file || options.file;
  options.text = opts.text || options.text;

  // Loading Suggestions
  var suggestionsArr = jsonfile.readFileSync('./' + options.file, { throws: false });
  if (suggestionsArr === null || typeof suggestionsArr != 'object' || ! Array.isArray(suggestionsArr)) {
    suggestionsArr = [];
  }

  const suggestions = suggestionsArr;

  // Creating Final Text
  function createSuggestion(suggestion) {
    var command = options.command;
    if (options.command) command += ' ';

    return options.text + "\n" + '    ' + command + suggestion;
  }

  // The Method
  function doSuggestion(command) {
    for (var i = 0; i < suggestions.length; i++) {
      var errors = suggestions[i].errors || [];

      for(var j = 0; j < errors.length; j++) {
        if (errors[j] != command) continue;

        return createSuggestion(suggestions[i].command);
      }
    }

    return false;
  }

  return doSuggestion;
}


module.exports = run;
