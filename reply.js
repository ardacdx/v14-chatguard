const Discord = require('discord.js');

function reply(desc, color) {
  return new Discord.EmbedBuilder().setDescription(desc).setColor(color ? color : "#36393F")
}

module.exports = reply;