'use strict';

function createSuggestion(suggestion, tries) {
  return {
    suggestion: suggestion,
    tries: tries
  };
}

function run(command) {
  const suggestions = [
    createSuggestion('--version', [ 'version', 'v' ])
  ];

  for (var i = 0; i < suggestions.length; i++) {
    for(var j = 0; j < suggestions[i].tries.length; j++) {
      if (suggestions[i].tries[j] != command) continue;

      return 'Did want to say that?' + "\n" + "    " + suggestions[i].suggestion;
    }
  }

  return false;
}

module.exports = run;
