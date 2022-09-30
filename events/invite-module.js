const reply = require("../reply");
const db = require("croxydb");

const emote = require("../emotes.json");
const Discord = require("discord.js");

module.exports = (Discord, client, config) => {
  const invite = require('invite-module');
  invite.inviteCounter(client);
  
    client.on("memberJoin", async(member, invite, inviter, guild) => {
      if (!db.fetch(`davetLog_${member.guild.id}`)) return;
      if (member.user.bot || !member.guild) return;
  })

  client.on("memberLeave", async(member, invite, inviter, guild) => {
      if (!db.fetch(`davetLog_${member.guild.id}`)) return;
      if (member.user.bot || !member.guild) return;
      
      
  });
};