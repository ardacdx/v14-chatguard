const emote = require("../emotes.json");
const config = require("../config.js");

const reply = require("../reply");

const Discord = require("discord.js");

module.exports = {
  run: async (client, message, args) => {

  if (
      !message.member.permissions.has(
        Discord.PermissionsBitField.Flags.Administrator
      )
    )
      return message.reply({
        embeds: [
          reply(
            `${emote.danger} **|**  Bu komutu kullanmak için gerekli yetkilere sahip değilsin.`,
            message
          ),
        ],
      });  
    
  const channel = message.mentions.channels.first() || message.channel;
  
  channel.delete()
  channel.clone().then(a => { 
     a.send({ embeds: [reply(`${emote.success} **|** Kanal başarıyla sıfırlandı.`, mess)] })
  })  
    
},
  config: {
    name: "nuke",
    aliases: [""],
    desc: "Bulunduğunuz kanal sıfırlanır.",
    enabled: false
  }
}; 