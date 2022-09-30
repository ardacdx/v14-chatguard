const emote = require("../emotes.json");
const config = require("../config.js");

const reply = require("../reply");

const Discord = require('discord.js');

module.exports = {
  run: async (client, message, args, db) => {

   const vl = args[0];
    
   if (!message.member.permissions.has([Discord.PermissionsBitField.Flags.ManageRoles, Discord.PermissionsBitField.Flags.ManageMessages])) return message.reply({ embeds: [reply(`${emote.danger} **|**  Bu komutu kullanmak için gerekli yetkilere sahip değilsin.`, message)] }) 
    
   if(vl === "ayarla") {
     
     const getActive = args[1]
     
     if(!getActive) return message.reply({ embeds: [reply(`${emote.danger} **|** Komutu eksik belirttin, \`${config.prefix}küfür-engel <aç/kapat>\` `, message)] }) 
     
     if(getActive) { 
       if(getActive === "aç") {
         
       db.set(`kfrEngel_${message.guild.id}`, true) 
       return message.reply({ embeds: [reply(`${emote.success} **|** Küfür engel sistemi başarıyla aktif edildi`, message)] }) 
         
       } else if(getActive === "kapat") {
         
       } else {
         return message.reply({ embeds: [reply(`${emote.danger} **|** Komutu yanlış belirttin, \`${config.prefix}küfür-engel <aç/kapat>\` `, message)] }) 
       }
       
       
     }    
   } else if(vl === "sıfırla") {
     
   } else {
     
   }

},
  config: {
    name: "küfür-engel",
    aliases: ["ke", "küfürengel", "cursingblock", "cursing-block"],
    desc: "Küfür engel sistemini sunucunuza kurablirsiniz.",
    enabled: false
  }
}; 