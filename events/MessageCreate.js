const reply = require("../reply");
const db = require("croxydb");

const emote = require("../emotes.json");
const Discord = require("discord.js");

const kfr = require("../jsons/kfr.json");
const lnks = require("../jsons/lnks.json");

module.exports = async (Discord, client, config) => {
  
  let newSet = new Set();
  
   client.on("messageCreate", async message => {
      if (message.author.bot || !message.guild) return;
      if (!message.content.startsWith(config.prefix)) return;
     
      const command = message.content.split(" ")[0].slice(config.prefix.length);
      const args = message.content.split(" ").slice(1);
     
      let cmd;
       
      if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    };
     
     if(cmd.config.enabled) {
     return message.reply({ embeds: [reply("ok")] })
   } 
     
    if(cmd) {
       return cmd.run(client, message, args, db);
      }; 
     
   });
  
  client.on("messageCreate", async(message) => {
    if (!db.fetch(`kfrEngel_${message.guild.id}`)) return;
    if (message.author.bot || !message.guild) return;
    
    if (message.member.permissions.has(Discord.PermissionsBitField.Flags.ManageMessages)) return;
    
    let foundInText = false;
    for(var i in kfr) {
      if (message.content.toLowerCase().includes(kfr[i].toLowerCase())) foundInText = true;
    }
    
    if(foundInText) {
       message.delete();
       message.channel.send({ embeds: [reply(`${emote.warning} **|** Hey ${message.author.username}, bu sunucuda küfür etmek yasaklanmış.`, message)] }).then(msg => { setTimeout(() => { msg.delete() }, 5000) }); 
    }
    
  });
  
  client.on("messageCreate", async(message) => {
    if (!db.fetch(`lnkEngel_${message.guild.id}`)) return;
    if (message.author.bot || !message.guild) return;
    
    if (message.member.permissions.has(Discord.PermissionsBitField.Flags.ManageMessages)) return;
    
    let foundInText = false;
    for(var i in lnks) {
      if (message.content.toLowerCase().includes(lnks[i].toLowerCase())) foundInText = true;
    }
    
    if(foundInText) {
       message.delete();
       message.channel.send({ embeds: [reply(`${emote.warning} **|** Hey ${message.author.username}, bu sunucuda link paylaşımı yapmak yasaklanmış.`, message)] }).then(msg => { setTimeout(() => { msg.delete() }, 5000) }); 
    }
    
  });
  
  client.on("messageCreate", async(message) => {
    if (!db.fetch(`pingEngel_${message.guild.id}`)) return;
    if (message.author.bot || !message.guild) return;
    
    if (message.member.permissions.has(Discord.PermissionsBitField.Flags.ManageMessages)) return;
    
    if(message.mentions.everyone) {
       message.delete();
       message.channel.send({ embeds: [reply(`${emote.warning} **|** Hey ${message.author.username}, bu sunucuda **@everyone** ve **@here** etiketleri yasaklanmış.`, message)] }).then(msg => { setTimeout(() => { msg.delete() }, 5000) }); 
    }
    
  });
  
};