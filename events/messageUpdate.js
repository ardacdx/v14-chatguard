const reply = require("../reply");
const db = require("croxydb");

const emote = require("../emotes.json");
const Discord = require("discord.js");

const kfr = require("../jsons/kfr.json");
const lnks = require("../jsons/lnks.json");

module.exports = async (Discord, client, config) => {
  
  let newSet = new Set();
  
  client.on("messageUpdate", async(oldMessage, newMessage) => {
    if (newMessage.author.bot || !newMessage.guild) return;
    if (!db.fetch(`kfrEngel_${newMessage.guild.id}`)) return;
    
    if (newMessage.member.permissions.has(Discord.PermissionsBitField.Flags.ManageMessages)) return;
    
    let foundInText = false;
    for(var i in kfr) {
      if (newMessage.content.toLowerCase().includes(kfr[i].toLowerCase())) foundInText = true;
    }
    
    if(foundInText) {
       newMessage.delete();
       newMessage.channel.send({ embeds: [reply(`${emote.warning} **|** Hey ${newMessage.author.username}, bu sunucuda küfür etmek yasaklanmış.`, newMessage)] }).then(msg => { setTimeout(() => { msg.delete() }, 5000) });
    }
    
  });
  
  client.on("messageUpdate", async(oldMessage, newMessage) => {
    if (newMessage.author.bot || !newMessage.guild) return;
    if (!db.fetch(`lnkEngel_${newMessage.guild.id}`)) return;
    
    if (newMessage.member.permissions.has(Discord.PermissionsBitField.Flags.ManageMessages)) return;
    
    let foundInText = false;
    for(var i in lnks) {
      if (newMessage.content.toLowerCase().includes(lnks[i].toLowerCase())) foundInText = true;
    }
    
    if(foundInText) {
       newMessage.delete();
       newMessage.channel.send({ embeds: [reply(`${emote.warning} **|** Hey ${newMessage.author.username}, bu sunucuda link paylaşımı yapmak yasaklanmış.`, newMessage)] }).then(msg => { setTimeout(() => { msg.delete() }, 5000) }); 
    }
    
  });
  
   client.on("messageUpdate", async(oldMessage, newMessage) => {
    if (newMessage.author.bot || !newMessage.guild) return;
    if (!db.fetch(`pingEngel_${newMessage.guild.id}`)) return;
    
    if (newMessage.member.permissions.has(Discord.PermissionsBitField.Flags.ManageMessages)) return;
    
    if(newMessage.mentions.everyone) {
      newMessage.delete();
       newMessage.channel.send({ embeds: [reply(`${emote.warning} **|** Hey ${newMessage.author.username}, bu sunucuda **@everyone** ve **@here** etiketleri yasaklanmış.`, newMessage)] }).then(msg => { setTimeout(() => { msg.delete() }, 5000) }); 
    }
    
  });
  
  client.on("messageUpdate", async(oldMessage, newMessage) => {
    if (newMessage.author.bot || !newMessage.guild) return;
    if (!db.fetch(`capsEngel_${newMessage.guild.id}`)) return;
    
    if (newMessage.member.permissions.has(Discord.PermissionsBitField.Flags.ManageMessages)) return;
    
    if(newMessage.content.length >= 4 && newMessage.content.toUpperCase()) {
       newMessage.delete();
      newMessage.channel.send({ embeds: [reply(`${emote.warning} **|** Hey ${newMessage.author.username}, bu sunucuda büyük harfler ile konuşmak yasaklanmış.`, newMessage)] }).then(msg => { setTimeout(() => { msg.delete() }, 5000) }); 
    }
    
  });
  
};