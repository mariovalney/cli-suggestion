'use strict';

var expect = require('expect');
var suggestion = require('../');

const suggested = '--test';

describe('Suggestions', function() {

  it('should be a empty array if file is invalid: so we have no suggestions to test', function(done) {
    var doSuggestion = suggestion({
      file: 'test/fixtures/suggestions-invalid.json'
    });

    expect(doSuggestion('test')).toEqual(false);
    done(0);
  });

  it('should be a empty array if file is empty: so we have no suggestions to test', function(done) {
    var doSuggestion = suggestion({
      file: 'test/fixtures/suggestions-empty.json'
    });

    expect(doSuggestion('test')).toEqual(false);
    done(0);
  });

  it('should be a full array if file is ok: so we have a newtest suggestion', function(done) {
    var doSuggestion = suggestion({
      file: 'test/fixtures/suggestions-ok.json'
    });

    expect(doSuggestion('newtest')).toEqual('Did want to say that?' + "\n" + '    --newtest');
    expect(doSuggestion('newtes')).toEqual('Did want to say that?' + "\n" + '    --newtest');

    done(0);
  });

  it('should consider just valid suggestions configs even if file is valid: so we have suggestions for suggestionok', function(done) {
    var doSuggestion = suggestion({
      file: 'test/fixtures/suggestions-with-error.json'
    });

    expect(doSuggestion('suggestionwitherror')).toEqual(false);
    expect(doSuggestion('suggestionok')).toEqual('Did want to say that?' + "\n" + '    --suggestionok');

    done(0);
  });

});
