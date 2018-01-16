'use strict';

module.exports = function sayHello(name){
  if(typeof name !== 'string'){
    return null;
  } else {
    return `Hello ${name}`;
  }
}