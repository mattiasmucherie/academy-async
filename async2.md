## Task 1

Refactor (rewrite) the task from async.md into using async/await instead of callbacks.

This might require you to wrap some of the functions you have been using into something that produces a Promise.

Example: sumAsync

```js
//Old version
function sumAsync(a, b, callback) {
  return a + b;
}
sumAsync(2, 2, myCallbackFunction);

//New version
async function sumAsync(a, b) {
  return a + b;
}
sumAsync(2, 2).then(/*...*/);
```
