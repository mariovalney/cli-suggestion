'use strict';

function run(opts) {
  var options = {
    text: 'Did want to say that?',
    command: ''
  };

  if (typeof opts == 'string') {
    opts = {
      command: opts
    };
  }

  if (typeof opts !== 'object') {
    opts = {};
  }

  options.text = opts.text || options.text;
  options.command = opts.command || options.command;

  function createSuggestion(suggestion) {
    var command = options.command;
    if (options.command) command += ' ';

    return options.text + "\n" + '    ' + command + suggestion;
  }

  function createSuggestionArray(suggestion, tries) {
    return {
      suggestion: suggestion,
      tries: tries
    };
  }

  function doSuggestion(command) {
    const suggestions = [
      createSuggestionArray('--test', [ 'test' ])
    ];

    for (var i = 0; i < suggestions.length; i++) {
      for(var j = 0; j < suggestions[i].tries.length; j++) {
        if (suggestions[i].tries[j] != command) continue;

        return createSuggestion(suggestions[i].suggestion);
      }
    }

    return false;
  }

  return doSuggestion;
}


module.exports = run;
