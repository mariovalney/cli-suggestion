'use strict';

var expect = require('expect');
var suggestion = require('../');

describe('CLI Suggestion', function() {

  it('should return suggestions', function(done) {
    expect(suggestion('v')).toEqual('Did want to say that?' + "\n" + '    --version');
    expect(suggestion('version')).toEqual('Did want to say that?' + "\n" + '    --version');

    done(0);
  });

});
