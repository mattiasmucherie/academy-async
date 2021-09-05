## Task 1

Create a function delayedPrint(str, delay)
that prints the string str after delay seconds

Example:

```javascript
delayedPrint("hello", 3);

//(3 seconds of silence))
//hello
```

## Task 2

Create a function printSequence(n, m, delay)
that prints each number from n to m with a
delay second delay

Example:

```javascript
printSequence(1, 3, 1);
// (1 second of silence)
-> 1
// (1 second of silence)
-> 2
// (1 second of silence)
-> 3
```

## Task 3

Create a function printTime(interval) that prints
the current time (HH:mm:ss) at every interval seconds.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

Example:

```javascript
printTime(3)
15:55:20
15:55:23
15:55:26
```

## Task 4 (bonus)

Create a function printSequence(n, m) that prints
every number in the sequence n to m with a increasing
delay between the numbers.

The first number is instant
The second number waits 1 second
The third number waits 2 seconds
The forth number waits 3 seconds

Example:

```javascript
printSequence(10, 14)
-> 10
// Waits 1 second
-> 11
// Waits 2 seconds
-> 12
// Waits 3 seconds
-> 13
// Waits 4 seconds
-> 14
```
