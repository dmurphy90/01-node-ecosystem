'use strict';
const arith = require('../lib/arithmetic.js');
require('jest');

describe('Arithmetic Module', function(){
  describe('#Add', function (){
    it('should add together two integers and return the value as an object property', function(){
      expect(arith.addition(3,5)).toBeGreaterThanOrEqual(1);
    });
    it('should check to make sure the input is an integer and not a string', function(){
      expect(arith.addition('blerp')).not.toEqual(NaN);
    });
  });
});

describe('Arithmetic Module', function(){
  describe('#Sub', function(){
    it('should subtract integer 2 from integer 1 and return the value as an object property', function() {
      expect(arith.subtract(4,2)).toBeLessThanOrEqual(1000000);
    });
    it('should check to make sure the input is an integer and not a string', function(){
      expect(arith.addition('blerp')).not.toEqual(NaN);
    });
  });
});