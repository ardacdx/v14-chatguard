const emote = require("../emotes.json");
const config = require("../config.js");

const reply = require("../reply");

const Discord = require('discord.js');

module.exports = {
  run: async (client, message, args) => {

   const vl = args[0];
    
   if (!message.member.permissions.has([Discord.PermissionsBitField.Flags.ManageRoles, Discord.PermissionsBitField.Flags.ManageMessages])) return message.reply({ embeds: [reply(`${emote.danger} **|**  Bu komutu kullanmak için gerekli yetkilere sahip değilsin.`, message)] }) 
    
   if(vl === "ayarla") {
     
     const getRole = message.mentions.roles.first();
     const getMessage = args.slice(0).join(" ");
     
     if(!getRole || !getMessage) return message.reply({ embeds: [reply(`${emote.danger} **|** Komutu eksik belirttin, \`\` `, message)] }) 
     
     
   } else if(vl === "sıfırla") {
     
   } else {
     
   }

},
  config: {
    name: "buton-rol",
    aliases: ["br", "butonrol", "button-role"],
    desc: "Buton Rol sistemini sunucunuza kurablirsiniz.",
    enabled: false
  }
}; 