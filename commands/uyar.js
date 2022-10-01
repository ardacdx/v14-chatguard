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
    const getReason = args.slice(0).join(" ") || "Bulunmuyor."
    
      if (!mentionUser)
        return message.reply({
          embeds: [
            reply(
              `${emote.danger} **|** Komutu eksik belirttin, \`${config.prefix}uyar @kullanıcı <sebep>\` `,
              message
            ),
          ],
        });
    
    try {
      
      const buttons = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
          .setCustomId('uyaru')
          .set(`Uyaran: ${message.author.tag}`)
          .setEmoji("1025107658874830870")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Secondary),
			);
      
       const embed = new Discord.EmbedBuilder()
      .setAuthor({ name: "Bir uyarı aldın.", iconURL: message.guild.iconURL({ dynamic: true })})
      .setDescription(`> ${getReason} `)
      .setColor("#36393F")
      .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
      
      message.reply({ embeds: [reply(`${emote.success} **|** \`${mentionUser.tag}\` başarıyla uyarıldı.`, message)] })
      mentionUser.send({ embeds: [embed] })
      
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