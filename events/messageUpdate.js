const reply = require("../reply");
const db = require("croxydb");

const emote = require("../emotes.json");
const Discord = require("discord.js");

const kfr = require("../jsons/kfr.json");

module.exports = async (Discord, client, config) => {
  
  let newSet = new Set();
  
  client.on("messageUpdate", async(oldMessage, newMessage) => {
    if (!db.fetch(`kfrEngel_${newMessage.guild.id}`)) return;
    if (newMessage.author.bot || !newMessage.guild) return;
    
    if (!newMessage.member.permissions.has(Discord.PermissionsBitField.Flags.ManageMessages)) return;
    
    let foundInText = false;
    for(var i in kfr) {
      if (newMessage.content.toLowerCase().includes(kfr[i].toLowerCase())) foundInText = true;
    }
    
    if(foundInText) {
       newMessage.delete();
       newMessage.channel.send({ embeds: [reply(`${emote.warning} **|** Hey ${newMessage.author.username}, bu sunucuda küfür etmek yasaklanmış.`, newMessage)] }) 
    }
    
  });
  
};