const emote = require("../emotes.json");
const config = require("../config.js");

const Discord = require('discord.js');

module.exports = {
  run: async (client, message, args) => {
   
  let commands = client.commands.filter(x => !x.config.enabled).map(x => `> • **__${config.prefix+x.config.name}__** 🠮 ${x.config.desc}`).join("\n")
    
  const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.")
  .addFields({ name: `🆕 **|** Yenilikler/Güncellemeler`, value: `> • Son güncelleme notları için [tıkla](https://discord.gg/E66J2HzraQ).` })
  .addFields({ name: `📰 **|** Tüm komutlar`, value: `${commands} ` })
  .setColor("#36393F")
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
  
  message.reply({ embeds: [embed] })

},
  config: {
    name: "yardım",
    aliases: [""],
    desc: "RomanBot'un komutlarını gösterir.",
    enabled: false
  }
}; 