const emote = require("../emotes.json");
const config = require("../config.js");

const reply = require("../reply");

const Discord = require('discord.js');

module.exports = {
  run: async (client, message, args) => {

   const vl = args[0];
    
   if (!message.member.permissions.has([Discord.PermissionsBitField.Flags.ManageRoles, Discord.PermissionsBitField.Flags.ManageMessages])) message.reply({ embeds: [reply(`${emote.danger} **|**  Bu komutu kullanmak için gerekli yetkilere sahip de`, message)] }) 
    
   if(vl === "ayarla") {
     
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