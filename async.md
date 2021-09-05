## Task 1

Create a function multiplyAsync(a, b, callback) that multiplies
the number a and b, then waits 2 seconds before calling
back with the result using the callback function.

Example:

```javascript
multiplyAsync(2, 3, function (err, result) {
 console.log(result);
});
(waits 2 seconds)
-> 6
```

## Task 2

Add de following restrictions to multiplyAsync
Either operand cannot exceed 1000
It should in that case call back with an error
that tells you that an operand is to large.

Example:

```javascript
multiplyAsync(2, 3, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Result is: ${result}`);
  }
});
```

## Task 3

Use the addAsync from earlier excercise and multiplyAsync
functions to perform the two-step operation of (2+2) / 6
and print out the result.

### Example:

```javascript
// 2 + 2
addAsync(2, 2, function (err, result) {
  console.log(result);
});
// 4 * 6
multiplyAsync(4, 6, function (err, result) {
  console.log(result);
});
```

## Task 4

Create a function divideAsync(a, b, callback) in the same
format as the others.
Use the addAsync, multiplyAsync and divideAsync functions to
perform a three-step operation of (5 + 5) \* 6 / 10 and print
out the result.

### Example:

```javascript
// 5 + 5
addAsync(5, 5, function (err, result) {
  console.log(result);
});

// 4 * 6
multiplyAsync(4, 6, function (err, result) {
  console.log(result);
});

// 60 / 10

divideAsync(60, 10, function (err, result) {
  console.log(result);
});

// (5 + 5) * 6 / 10
```
