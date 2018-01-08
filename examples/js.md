*Coercion* is converting a value from one type to another (ex: console.log(1 + 'ankara')).  
*Expression*: A unit of code that results a value.  

### FUNCTIONS ###
Functions are objects.  
*Invocation* is running a function by ().  
A function that is the property of an object is called its *method*.  
To create a function we can use:  
- *Function Declaration*: Can only exist as a *statement* and should start with the keyword. When it is executed it doesn't do anything. They are *hoisted*.  
function func() { /\* ... \*/ }  
- *Function Expression*: When it is executed it returns an object, as other expressions. They are *not hoisted*.  
var func = function() { /\* ... \*/ };  
The function has full access to the outer variable. It can modify it as well.  
If a same-named variable is declared inside the function then it *shadows* the outer one.  
Values passed to a function as parameters are copied to its local variables (pass-by-value). If the parameter is an object, you can update its properties.  

### SCOPE ###
The scope of a variable: The scope of a variable are the locations where it is accessible.
Variables in JavaScript are lexically scoped, so the static structure of a program determines the scope of a variable (it is not influenced by, say, where a function is called from).  
**var** variables are either *function-wide* (only functions introduce new scopes) or global, they are visible through blocks.  
**var** declarations are processed when the function starts (or script starts for globals).

```javascript
if (true) {
  var test = true; // use "var" instead of "let"
}
alert(test);   // true
```
```javascript
for (var i = 0; i < 10; i++) {
  // ...
}
alert(i);   // 10
```

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

### HOISTING ###
JS engine sets up memory space for variables and functions. It moves the declerations to the beginning of their direct scopes.  
In JS, declerations (variable and function) are hoisted but assignment are not.  

### CLOSURE ###

A *closure* is a function that remembers its outer variables and can access them.  
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

```javascript
var result = [];
for (var i=0; i < 5; i++) {
    result.push( function () { return i } );  // (1)
}
console.log(result[1]());  // 5 (not 1)
console.log(result[3]());  // 5 (not 3)

for (var i=0; i < 5; i++) {
    (function () {
        var i2 = i;
        result.push( function () { return i2 } );
    }());
}
```

### EXECUTION STACK ###

The information about a function run is stored in its Execution Context.
One function call has exactly one EC associated with it. EC of a function is *this* of the function.  

```javascript
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) );
```

Execution Stack will be like:

| Exe. Context pow(2,1) [x=2, n=1] |  
|----------------------------------|  
| Exe. Context pow(2,2) [x=2, n=2] |   
| Exe. Context pow(2,3) [x=2, n=3] | 
 

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
