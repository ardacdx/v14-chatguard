const db = require("croxydb");

const emote = require("../emotes.json");
const Discord = require("discord.js");

function embed(desc, message, color) {
  return new Discord.EmbedBuilder().setDescription(desc).setColor(color ? color : "#36393F")
}

module.exports = (Discord, client, config) => {
  const invite = require('invite-module');
  
    client.on("memberJoin", async(member, invite, inviter, guild) => {
      if (!db.fetch(`davetLog_${member.guild.id}`)) return;
      if (member.user.bot || !member.guild) return;
      
      const channel = guild.channels.cache.get(db.fetch(`davetLog_${member.guild.id}`).kanal);
     return channel.send({ embeds: [embed("<@"+member.id+"> Sunucuya katıldı, ("+inviter.tag+") Tarafından davet edildi.")] })
  });
};