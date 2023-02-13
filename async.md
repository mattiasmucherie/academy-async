## Task 1

Create a function `multiplyAsync(a, b, callback)` that multiplies
the number `a` and `b`, then waits 2 seconds before calling
back with the result using the callback function.

Example:

```javascript
multiplyAsync(2, 3, function (err, result) {
  console.log(result);
});
// (waits 2 seconds)
// -> 6
```

## Task 2

Add the following restrictions to multiplyAsync:
Either operand cannot exceed 1000.
It should in that case callback with an error
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

Create a `addAsync` and use it with `multiplyAsync`
functions to perform the two-step operation of `(2 + 2) * 6`
and print out the result. It should also have a delay of 2 seconds.

### Example:

```javascript
addAsync(2, 2, (addError, addResult) => {
  multiplyAsync(addResult, 6, (multiErr, multiResult) => {
    console.log(multiResult);
  });
});
```

## Task 4

Create a function `divideAsync(a, b, callback)` in the same
format as the others. (Also with 2 seconds delay)
Use the `addAsync`, `multiplyAsync` and `divideAsync` functions to
perform a three-step operation of `(5 + 5) * 6 / 10` and print
out the result.

### Example:

```javascript
addAsync(5, 5, (addError, addResult) => {
  multiplyAsync(addResult, 6, (multiErr, multiResult) => {
    divideAsync(multiResult, 10, (divideErr, divideResult) => {
      console.log(divideResult);
    });
  });
});
```
