## Task 1

Make a function that takes in a single parameter (true/false) and
returns a new Promise. If the paramter is true resolve the promise with the return string 'success', if the parameter is false reject the promise with the return string 'error'.

> ! Hint: check the pptx for clues on how to create a promise.

Example:

```javascript
function myProm() {
  //...
}

const promise = new myProm(true);
promise.then((data) => {
  console.log(data); //-> outputs 'success'
});

const promise2 = new myProm(false);
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

If the age is bigger than 40 resolve the promise with the text: 'Wohaa, you´re old. If the age is less then 40 but bigger than 0 resolve the promise with the text: 'Wow, you're so young and pretty'
If the age is less then 0, reject the promise with the text: 'Invalid age'

## Task 3

Make a function that takes in a single parameter and returns
a new promise.

Using setTimeout, after 500 milliseconds the promise will either
resolve or reject. If the input parameter is a string, the promise
resolves with the same string uppercased. If the input is anything
but a string it rejects with the same input.
