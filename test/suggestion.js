'use strict';

var expect = require('expect');
var suggestion = require('../');

const suggested = '--test';

describe('CLI Suggestion', function() {

  it('should return default suggestion text and default command', function(done) {
    var doSuggestion = suggestion();

    expect(doSuggestion('test')).toEqual('Did want to say that?' + "\n" + '    ' + suggested);
    done(0);
  });

  it('should return default suggestion text and command if given as string', function(done) {
    var doSuggestion = suggestion('command');

    expect(doSuggestion('test')).toEqual('Did want to say that?' + "\n" + '    command ' + suggested);
    done(0);
  });

  it('should return default suggestion text and command if given as object', function(done) {
    var doSuggestion = suggestion({
      command: 'command'
    });

    expect(doSuggestion('test')).toEqual('Did want to say that?' + "\n" + '    command ' + suggested);
    done(0);
  });

  it('should return suggestion text and default command', function(done) {
    var doSuggestion = suggestion({
      text: 'Você quis dizer?'
    });

    expect(doSuggestion('test')).toEqual('Você quis dizer?' + "\n" + '    ' + suggested);
    done(0);
  });

  it('should return suggestion text and command if booth given', function(done) {
    var doSuggestion = suggestion({
      text: 'Você quis dizer?',
      command: 'command'
    });

    expect(doSuggestion('test')).toEqual('Você quis dizer?' + "\n" + '    command ' + suggested);
    done(0);
  });

});
