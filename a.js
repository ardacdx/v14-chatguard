const Discord = require('discord.js')
exports.run = async(client, message, args) => {

  const Discord = require("discord.js")
  const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("Güncelle")
.setStyle(Discord.ButtonStyle.Primary)
.setCustomId("guq")

)

  message.reply({content: 'https://dummyimage.com/2000x500/33363c/ffffff&text='+ client.ws.ping +'%20MS', components: [row]}).then(radio => {
 
  const collector = message.channel.createMessageComponentCollector({ });
  
    collector.on('collect', async i => {
      if(i.user.id !== message.author.id) return i.reply({ content: `:x: **|** Bu butonu yalnızca komutu kullanan kişi kullanabilir.`, ephemeral: true })
      
      if (i.customId == "guq") {
         i.update({content: 'https://dummyimage.com/2000x500/33363c/ffffff&text='+ client.ws.ping +'%20MS', components: []})
          }  
    });
      
  });
  
}  
exports.conf = {
  aliases: ['p', 'ms']
};

exports.help = {
  name: 'ping'
};