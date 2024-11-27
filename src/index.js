const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on("message", (message) => {
  console.log(message.content);
  if (message.content === "/woe") {
    message.channel.send("New woe pole launched!");
  }
});

client.login(process.env.TOKEN);
