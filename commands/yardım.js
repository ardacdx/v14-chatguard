const emote = require("../emotes.json");
const config = require("../config.js");

const Discord = require('discord.js');

module.exports = {
  run: async (client, message, args) => {
   
  let commands = client.commands.filter(x => !x.config.enabled).map(x => `• **__${config.prefix+x.config.name}__** 🠮 ${x.config.desc}`).join("\n")
    
  const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription(commands)
  .setThumbn

},
  config: {
    name: "yardım",
    aliases: [""],
    desc: "RomanBot'un komutlarını gösterir.",
    enabled: false
  }
}; 