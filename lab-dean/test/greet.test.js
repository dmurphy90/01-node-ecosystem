'use strict';
const greet = require('../lib/greet.js');
require('jest');

describe('Greet Module', function(){
  describe('#Greet', function(){
    it('should greet the user with hello and their name, hello world if no name is input', function(){
      expect(greet('world')).toEqual('Hello world'),
      expect(greet(5)).toEqual(null);
    });
  });
});