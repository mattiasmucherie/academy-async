### Group assignment

This task will be a group assignment. You will MOB-code a web chat
application.
There will be three groups.
Each group has one "driver" who types, the three other will tell the "driver" what to write. Every 15th minute you shift "driver".

### Endpoints

Install and run the chat api server with `npm install` and `npm run start`. It's located in the chatapi directory in this repo.
The API accepts two request:

- GET which returns a JSON-string with the chat log in the following format:

```json
[
  {
    "msg": "string",
    "userName": "string",
    "pDate": "dateString"
  }
]
```

- POST which takes a JSON-formatted string with the following properties.

```json
{
  "msg": "string",
  "userName": "string"
}
```

The URL to GET and POST is: `http://localhost:3030/`

The group should make a nice UI with a form and a list of earlier messages. Think something like messenger for facebook.
