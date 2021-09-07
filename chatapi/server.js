const express = require("express");
const cors = require("cors");
const app = express();
const port = 3030;

let chatLog = [
  {
    userName: "m0nsta4K1lla4",
    msg: "Jag är bäst på javascript!",
    pDate: new Date(),
  },
];
app.use(cors());
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

app.delete("/", (req, res) => {
  chatLog.length = 0;
  res.json({ status: "ok" });
});
app.get("/places.json", (req, res) => {
  const p = [
    { name: "Bysjön", lat: "60.534488156", lng: "15.398712158" },
    { name: "Torsång motormuseum", lat: "60.4629223", lng: "15.5554419" },
    {
      name: "Sahlins Struts",
      lat: "60.453578003119",
      lng: "15.492610931397",
    },
    {
      name: "Lindön",
      lat: "60.500652202873",
      lng: "15.58170318577",
    },
    {
      name: "Tvärstupet",
      lat: "60.369665197",
      lng: "15.430641174",
    },
    {
      name: "Kungsladan",
      lat: "60.475643285",
      lng: "15.721135139",
    },
  ];
  const rnd = Math.floor(Math.random() * 100) + 1;
  if (rnd > 80) {
    res.status(500).json({ status: "nok", msg: "The server went boo boo" });
  } else if (rnd > 60) {
    res.status(403).end();
  } else {
    res.json(p);
  }
});

app.listen(port, () => {
  console.log(`Chatapp is listening at ${port}`);
});
