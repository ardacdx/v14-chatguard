const emote = require("../emotes.json");
const config = require("../config.js");

const reply = require("../reply");

const Discord = require("discord.js");

module.exports = {
  run: async (client, message, args, db) => {

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
    
   if (!getActive)
      return message.reply({
        embeds: [
          reply(
            `${emote.danger} **|** Komutu eksik belirttin, \`${config.prefix}davet-log <ayarla/sıfırla>\` `,
            message
          ),
        ],
      });
    
   if (getActive === "ayarla") {
     if(db.fetch(`davetLog_${message.guild.id}`))
       return message.reply({
            embeds: [
              reply(
                `${emote.warning} **|** Davet log sistemi zaten \`aktif\` edilmiş.`,
                message
              ),
            ],
          });
     
     const mentionChannel = message.mentions.channels.first()
     if (!mentionChannel)
      return message.reply({
        embeds: [
          reply(
            `${emote.danger} **|** Komutu eksik belirttin, \`${config.prefix}davet-log ayarla #kanal\` `,
            message
          ),
        ],
      });
     
     db.set(`davetLog_${message.guild.id}`, { kanal: mentionChannel.id })
     return message.reply({ embeds: [reply(`${emote.success} **|** Davet log kanalı başarıyla ${mentionChannel} olarak ayarlandı.`)] })
     
   } else if(getActive === "sıfırla") {
     if(!db.fetch(`davetLog_${message.guild.id}`))
       return message.reply({
            embeds: [
              reply(
                `${emote.warning} **|** Davet log sistemi zaten \`de-aktif\` edilmiş.`,
                message
              ),
            ],
          });
     
     
   } else {
     
   }
  

},
  config: {
    name: "davet-log",
    aliases: ["dl", "invite-log", "invitelog", "davetlog"],
    desc: "Davet sistemini sunucunuza kurabilirsiniz.",
    enabled: false
  }
}; 