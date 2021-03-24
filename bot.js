const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function getVideo() {
  let videoId = between(1, 588);
  let video = await axios.get(`${"https://ttnaked.com/page/" + videoId}`);
  return [...video.data.matchAll(/source src="(.*)" type=/gim)][0][1];
}
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  if (msg.content === "!tiktok" && msg.channel.id === "822908574522277898") {
    msg.channel.send(await getVideo());
  }
});

client.login("ODIyODg3MjA2MzUxMDExODUw.YFYzbg.5CMFBGayou4vnBtHLQ6ghelcNFA");
