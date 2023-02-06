'use strict';

// new RegExp('pattern', 'flags');

// /pattern/flags

const ans = 'ANNNNNN';

const reg = /n/ig;

console.log(reg.test(ans));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

// i
// g
// m

//console.log(ans.search(reg));
//console.log(ans.match(reg));

const pass = 'just1ce'

console.log(pass.replace(/./g,'*'));

console.log('12-34-56'.replace(/-/g,":"));


