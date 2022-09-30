const emote = require("../emotes.json");
const config = require("../config.js");

const reply = require("../reply");

const Discord = require("discord.js");

module.exports = {
  run: async (client, message, args, db) => {

    if (
      message.member.permissions.has(
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

    const getActive = args[0];

    if (!getActive)
      return message.reply({
        embeds: [
          reply(
            `${emote.danger} **|** Komutu eksik belirttin, \`${config.prefix}capslock-engel <aç/kapat>\` `,
            message
          ),
        ],
      });

    if (getActive) {
      if (getActive === "aç") {
        if (db.fetch(`capsEngel_${message.guild.id}`))
          return message.reply({
            embeds: [
              reply(
                `${emote.warning} **|** Caps-lock engel sistemi zaten \`aktif\` edilmiş.`,
                message
              ),
            ],
          });

        db.set(`capsEngel_${message.guild.id}`, true);
        return message.reply({
          embeds: [
            reply(
              `${emote.success} **|** Caps-lock engel sistemi başarıyla \`aktif\` edildi.`,
              message
            ),
          ],
        });
      } else if (getActive === "kapat") {
        if (!db.fetch(`capsEngel_${message.guild.id}`))
          return message.reply({
            embeds: [
              reply(
                `${emote.warning} **|** Caps-lock engel sistemi zaten \`de-aktif\` edilmiş.`,
                message
              ),
            ],
          });

        db.delete(`capsEngel_${message.guild.id}`);
        return message.reply({
          embeds: [
            reply(
              `${emote.success} **|** Caps-lock engel sistemi başarıyla \`de-aktif\` edildi.`,
              message
            ),
          ],
        });
      } else {
        return message.reply({
          embeds: [
            reply(
              `${emote.danger} **|** Komutu yanlış belirttin, \`${config.prefix}capslock-engel <aç/kapat>\` `,
              message
            ),
          ],
        });
      }
    }
    
    
    
},
  config: {
    name: "capslock-engel",
    aliases: ["cle", "capslockengel", "capslockblock", "capslock-block"],
    desc: "Caps-lock engel sistemini sunucunuza kurablirsiniz.",
    enabled: false,
  }
}; 