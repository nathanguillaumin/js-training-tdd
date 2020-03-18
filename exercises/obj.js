'use strict';

/*
 * Create an object `obj` that has a property for each primitive values
 * much like in primitive.js
 *
 * @notions Functions, Operators
 */

// Your code:
let obj = {         // creation of an object
    str: "1337",    // by key "str" store value "1337"
    num: 42,        // by key "num" store value 42
    bool: false,    // by key "bool" store value false
    undefined: undefined,   // by key "undefined" store value undefined
  };

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof obj, 'object');

assert.strictEqual(typeof obj.str, 'string');
assert.strictEqual(obj.str, '1337');

assert.strictEqual(typeof obj.num, 'number');
assert.strictEqual(obj.num, 42);

assert.strictEqual(typeof obj.bool, 'boolean');
assert.strictEqual(obj.bool, false);

assert.strictEqual(typeof obj.undef, 'undefined');
assert.strictEqual(obj.undef, undefined);
// End of tests */
