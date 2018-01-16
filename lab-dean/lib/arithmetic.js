'use strict';

const arith = module.exports = {};


arith.addition = function(a,b) {
  if(typeof a !== 'number' || typeof b !== 'number'){
    return null;
  } else {
    return a + b;
  }
};

arith.subtract = function(a,b) {
  if(typeof a !== 'number' || typeof b !== 'number'){
    return null;
  } else {
    return a - b;
  }
};