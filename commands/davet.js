const emote = require("../emotes.json");

module.exports = {
  run: async (client, message, args) => {

    message.channel.send(':ping_pong: Pong...').then(msg => {
        msg.edit(`${emote.success} **|** Pong...\n> ${client.ws.ping}ms`)
    })

},
  config: {
    name: "davet",
    aliases: [""],
    desc: "RomanBot'un davet değerlerini gösterir.",
    enabled: false
  }
}; 