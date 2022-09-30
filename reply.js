const Discord = require('discord.js');

function reply(desc, message, color) {
  return new Discord.EmbedBuilder().setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true })}).setDescription(desc).setColor(color ? color : "#36393F")
}

module.exports = reply;