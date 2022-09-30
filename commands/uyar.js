const emote = require("../emotes.json");
const config = require("../config.js");

const reply = require("../reply");

const Discord = require("discord.js");

module.exports = {
  run: async (client, message, args) => {

    if (
      !message.member.permissions.has(
        Discord.PermissionsBitField.Flags.ManageMessages
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
   
    const mentionUser = message.mentions.users.first();
    
      if (!mentionUser)
        return message.reply({
          embeds: [
            reply(
              `${emote.danger} **|** Komutu eksik belirttin, \`${config.prefix}uyar @kullanıcı\` `,
              message
            ),
          ],
        });
    
    try {
      
      message.reply({ embeds: [reply(`${emote.success} **|** \`${mentionUser.tag}\` başarıyla uyarıldı.`, message)] })
      
    } catch {
      console.log("A")
    }

},
  config: {
    name: "uyar",
    aliases: ["warn", "uyarı"],
    desc: "RomanBot'un ping değerlerini gösterir.",
    enabled: false
  }
}; 