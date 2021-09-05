const express = require("express");
const app = express();
const port = 3030;

const chatLog = [
  {
    userName: "m0nsta4K1lla4",
    msg: "Jag är bäst på javascript!",
    pDate: new Date(),
  },
];
app.use(express.json());
app.get("/", (req, res) => {
  res.json([...chatLog].reverse());
});

app.post("/", (req, res) => {
  if (req.body && req.body.msg && req.body.userName) {
    const log = { ...req.body, pDate: new Date() };
    chatLog.push(log);
    res.json([...chatLog].reverse());
  } else {
    req.json({ status: "nok", msg: "Malformed json for chat message" });
  }
});
app.listen(port, () => {
  console.log(`Chatapp is listening at ${port}`);
});
