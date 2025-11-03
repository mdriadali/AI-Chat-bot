const express = require("express");
const app = express();
require("dotenv").config();
const startServer = require("./utils/StartServer");
const chats = require("./utils/chats");






app.use(express.json());


app.get()

app.post("/chat", async (req, res) => {
  chats(req, res);
});




startServer(app);