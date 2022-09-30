const emote = require("../emotes.json");
const config = require("../config.js");

const reply = require("../reply");

const Discord = require("discord.js");

module.exports = {
  run: async (client, message, args) => {

  if (
      !message.member.permissions.has([
        Discord.PermissionsBitField.Flags.ManageMessages, Discord.PermissionsBitField.Flags.ManageChannels
      ])
    )
      return message.reply({
        embeds: [
          reply(
            `${emote.danger} **|**  Bu komutu kullanmak için gerekli yetkilere sahip değilsin.`,
            message
          ),
        ],
      });
    
   const getActive = args[0];
    
  

},
  config: {
    name: "davet-log",
    aliases: ["dl", "invite-log", "invitelog", "davetlog"],
    desc: "Davet sistemini sunucunuza kurabilirsiniz.",
    enabled: false
  }
}; 