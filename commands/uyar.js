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
    const getReason = args.slice(1).join(" ") || "Bulunmuyor."
    
      if (!mentionUser)
        return message.reply({
          embeds: [
            reply(
              `${emote.danger} **|** Komutu eksik belirttin, \`${config.prefix}uyar @kullanıcı <sebep>\` `,
              message
            ),
          ],
        });
      
      const buttons = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
          .setCustomId('uyaru')
          .setLabel(`Uyaran: ${message.author.tag}`)
          .setEmoji("1025107658874830870")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Secondary),
			);
      
       const embed = new Discord.EmbedBuilder()
      .setAuthor({ name: "Bir uyarı aldın.", iconURL: message.guild.iconURL({ dynamic: true })})
      .setDescription(`> ${getReason} `)
      .setColor("#36393F")
      .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
      
      mentionUser.send({ embeds: [embed], components: [buttons] }).then(success => {
      return message.reply({ embeds: [reply(`${emote.success} **|** \`${mentionUser.tag}\` başarıyla uyarıldı.`, message)] })  
      }).catch(error => {
      return message.reply({ embeds: [reply(`${emote.danger} **|** \`${mentionUser.tag}\` kullanıcısının direkt mesajları kapalı.`, message)] })
      }) 


},
  config: {
    name: "uyar",
    aliases: ["warn", "uyarı"],
    desc: "RomanBot'un ping değerlerini gösterir.",
    enabled: false
  }
}; 

/* 

*/