## Task 1

Make a function that takes in a single parameter (true/false) and
returns a new Promise. If the paramter is true resolve the promise with the return string 'success', if the parameter is false reject the promise with the return string 'error'.

> ! Hint: check the pptx for clues on how to create a promise.

Example:

```javascript
function myProm(param) {
  //...
}

const promise = myProm(true);
promise.then((data) => {
  console.log(data); //-> outputs 'success'
});

const promise2 = myProm(false);
promise2.then(/*...*/).catch((error) => {
  console.log(error); //-> outputs 'error'
});
```

## Task 2

Extend your function from task 1 and make it recieve a object like

```javascript
{
  name: "yourname",
  age: 32
}
```

If the age is bigger than 40 resolve the promise with the object with the added property text: 'Wohaa, you´re old. If the age is less then 40 but bigger than 0 resolve the promise with the text: 'Wow, you're so young and pretty'
If the age is less then 0, reject the promise with the text: 'Invalid age'
Example result from resolve:

```javascript
  {
    name: "yourname",
    age: 32,
    text: 'Wow, your so young and pretty'
  }
```

## Task 3

Make a function that takes in a single parameter and returns
a new promise.

Using setTimeout, after 500 milliseconds the promise will either
resolve or reject. If the input parameter is a string, the promise
resolves with the same string uppercased. If the input is anything
but a string it rejects with the same input.

The output in the end should always print out 'I`m done'

> ! Hint: check if there some way to always execute code after a promise.

## Task 4 (bonus)

Research if there is some way to make sure multiple promises are resolved/rejected and set up some code that does both Task 2 and Task 3 and only prints out success (and the data) if both are successfull.
