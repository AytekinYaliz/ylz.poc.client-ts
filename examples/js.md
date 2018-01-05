### SCOPE ###
The scope of a variable: The scope of a variable are the locations where it is accessible.
Variables in JavaScript are lexically scoped, so the static structure of a program determines the scope of a variable (it is not influenced by, say, where a function is called from).
Variables are function-scoped: only functions introduce new scopes; blocks are ignored when it comes to scoping.

IIFE:
An IIFE enables you to attach private data to a function
```javascript
function f() {
    if (condition) {
        var tmp = "...";
    }
    // tmp still exists here
}
```

```javascript
var result = [];
for (var i=0; i < 5; i++) {
    result.push(function () { return i });  // (1)
}
console.log(result[1]()); // 5 (not 1)
console.log(result[3]()); // 5 (not 3)

for (var i=0; i < 5; i++) {
    (function () {
        var i2 = i; // copy current i
        result.push(function () { return i2 });
    }());
}
```

### HOISTING ###
JavaScript hoists all variable declarations, it moves them to the beginning of their direct scopes.
The complete function is hoisted, not just the creation of the variable in which it is stored.

### CLOSURE ###

If a function leaves the scope in which it was created, it stays connected to the variables of that scope (and of the surrounding scopes). For example:
```javascript
function createInc(startValue) {
    return function (step) {
        startValue += step;
        return startValue;
    };
}
```
The function returned by createInc() does not lose its connection to startValue—the variable provides the function with state that persists across function calls:
```
> var inc = createInc(5);
> inc(1)
  6
> inc(2)
  8
```
A closure is a function plus the connection to the scope in which the function was **created**. The name stems from the fact that a closure “closes over” the free variables of a function. A variable is free if it is not declared within the function—that is, if it comes “from outside.”
  
  
- - - -
  
  
```javascript
// CommonJS -------------------------------------------------------------------
// testA.js                         |   // testB.js
exports.funcA = () => {             |   module.exports = () => {
   console.log('--------');         |       console.log('--------');
};                                  |   };
// app.js                           |   // app.js
const testA = require('./testA');   |   const testB = require('./testB');
testA.funcA();                      |   testB();
```
console.clear();

const arr = [23, 55, 644, 234],
	obj = { a: 123, b: 'anka', c: ['z43', 'ant'], d: {d1: 12, d2: 'ist'} };

let [o1, , o3] = arr;
let { c: [, y1], d: {d2: y2} } = obj;

console.log(o1, o3);
console.log(y1, y2);
