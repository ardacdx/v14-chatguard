const emote = require("../emotes.json");
const config = require("../config.js");

const reply = require("../reply");

const Discord = require('discord.js');

module.exports = {
  run: async (client, message, args) => {
 
  let cmd = client.commands.filter(x => !x.config.enabled).map(x => `> • **__${config.prefix+x.config.name}__** 🠮 ${x.config.desc}`)
  var page = 1;
  
  const row = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
					.setLabel('Destek Sunucusu')
          .setEmoji("📕")
          .setURL("https://discord.gg/HK8z9TtRvk")
					.setStyle(Discord.ButtonStyle.Link),
        new Discord.ButtonBuilder()
					.setLabel('Botu davet et')
          .setEmoji("📘")
          .setURL("https://discordapp.com/api/oauth2/authorize?client_id=996343874509353122&permissions=8&scope=bot")
					.setStyle(Discord.ButtonStyle.Link),
        new Discord.ButtonBuilder()
					.setLabel('Bota oy ver')
          .setEmoji("📗")
          .setURL("https://top.gg/tr/bot/996343874509353122")
					.setStyle(Discord.ButtonStyle.Link),
			);
    
    const buttons = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
          .setCustomId('sol')
          .setEmoji("1025357695240388661")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId('sayfa')
          .setLabel("1/4")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
          .setCustomId('sag')
          .setEmoji("1025357694221172736")
					.setStyle(Discord.ButtonStyle.Success),
			);

  
  const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.")
  .addFields({ name: `<:new1:1025306297677135923><:new2:1025306296553066576> **|** Yenilikler/Güncellemeler`, value: `> • Son güncelleme notları için [tıkla](https://discord.gg/E66J2HzraQ).` })
  .addFields({ name: `<:global:1025305700257243176> **|** Tüm komutlar`, value: `${cmd.slice(0, 5).join("\n") || "Bu sayfada komut bulunmuyor"} ` })
  .setColor("#36393F")
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
  
  return message.reply({ embeds: [embed], components: [row, buttons] }).then(async(msg) => {
    
    const collector = message.channel.createMessageComponentCollector({ });
    
    collector.on('collect', async i => {
      if(i.user.id !== message.author.id) return i.reply({ embeds: [reply(`${emote.danger} **|** Bu butonu yalnızca komutu kullanan kişi kullanabilir.`, msg)], ephemeral: true })
      
      
      if(i.customId === "sag") {
        
        if(page === 1) {
          page += 1;
          
          const buttons = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
          .setCustomId('sol')
          .setEmoji("1025357695240388661")
					.setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId('sayfa')
          .setLabel(page+"/4")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
          .setCustomId('sag')
          .setEmoji("1025357694221172736")
					.setStyle(Discord.ButtonStyle.Success),
			);
        
        const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.")
  .addFields({ name: `<:new1:1025306297677135923><:new2:1025306296553066576> **|** Yenilikler/Güncellemeler`, value: `> • Son güncelleme notları için [tıkla](https://discord.gg/E66J2HzraQ).` })
  .addFields({ name: `<:global:1025305700257243176> **|** Tüm komutlar`, value: `${cmd.slice(5, 10).join("\n") || "Bu sayfada komut bulunmuyor"} ` })
  .setColor("#36393F")
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
        
       return  i.update({ embeds: [embed], components: [row, buttons] })
        }
        
        if(page === 2) {
          page += 1;
          
          const buttons = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
          .setCustomId('sol')
          .setEmoji("1025357695240388661")
					.setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId('sayfa')
          .setLabel(page+"/4")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
          .setCustomId('sag')
          .setEmoji("1025357694221172736")
					.setStyle(Discord.ButtonStyle.Success),
			);
        
        const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.")
  .addFields({ name: `<:new1:1025306297677135923><:new2:1025306296553066576> **|** Yenilikler/Güncellemeler`, value: `> • Son güncelleme notları için [tıkla](https://discord.gg/E66J2HzraQ).` })
  .addFields({ name: `<:global:1025305700257243176> **|** Tüm komutlar`, value: `${cmd.slice(10, 15).join("\n") || "Bu sayfada komut bulunmuyor"} ` })
  .setColor("#36393F")
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
        
       return  i.update({ embeds: [embed], components: [row, buttons] })
        }
        
        if(page === 3) {
          page += 1;
          
          const buttons = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
          .setCustomId('sol')
          .setEmoji("1025357695240388661")
					.setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId('sayfa')
          .setLabel(page+"/4")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
          .setCustomId('sag')
          .setEmoji("1025357694221172736")
					.setStyle(Discord.ButtonStyle.Success),
			);
        
        const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.")
  .addFields({ name: `<:new1:1025306297677135923><:new2:1025306296553066576> **|** Yenilikler/Güncellemeler`, value: `> • Son güncelleme notları için [tıkla](https://discord.gg/E66J2HzraQ).` })
  .addFields({ name: `<:global:1025305700257243176> **|** Tüm komutlar`, value: `${cmd.slice(15, 20).join("\n") || "Bu sayfada komut bulunmuyor"}` })
  .setColor("#36393F")
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
        
         return i.update({ embeds: [embed], components: [row, buttons] })
        }
        
        if(page === 4) {
          
          const buttons = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
          .setCustomId('sol')
          .setEmoji("1025357695240388661")
					.setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId('sayfa')
          .setLabel(page+"/4")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
          .setCustomId('sag')
          .setEmoji("1025357694221172736")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Success),
			);
        
        const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.")
  .addFields({ name: `<:new1:1025306297677135923><:new2:1025306296553066576> **|** Yenilikler/Güncellemeler`, value: `> • Son güncelleme notları için [tıkla](https://discord.gg/E66J2HzraQ).` })
  .addFields({ name: `<:global:1025305700257243176> **|** Tüm komutlar`, value: `${cmd.slice(20, 25).join("\n") || "Bu sayfada komut bulunmuyor"} ` })
  .setColor("#36393F")
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
        
      return i.update({ embeds: [embed], components: [row, buttons] })
        }
        
        

      }
      
      if(i.customId === "sol") {
        
        if(page === 4) {
          page -= 1;
          
          const buttons = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
          .setCustomId('sol')
          .setEmoji("1025357695240388661")
					.setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId('sayfa')
          .setLabel(page+"/4")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
          .setCustomId('sag')
          .setEmoji("1025357694221172736")
					.setStyle(Discord.ButtonStyle.Success),
			);
        
        const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.")
  .addFields({ name: `<:new1:1025306297677135923><:new2:1025306296553066576> **|** Yenilikler/Güncellemeler`, value: `> • Son güncelleme notları için [tıkla](https://discord.gg/E66J2HzraQ).` })
  .addFields({ name: `<:global:1025305700257243176> **|** Tüm komutlar`, value: `${cmd.slice(15, 20).join("\n") || "Bu sayfada komut bulunmuyor"}` })
  .setColor("#36393F")
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
        
         return i.update({ embeds: [embed], components: [row, buttons] })
        }
        
         if(page === 3) {
          page -= 1;
          
          const buttons = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
          .setCustomId('sol')
          .setEmoji("1025357695240388661")
					.setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId('sayfa')
          .setLabel(page+"/4")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
          .setCustomId('sag')
          .setEmoji("1025357694221172736")
					.setStyle(Discord.ButtonStyle.Success),
			);
        
        const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.")
  .addFields({ name: `<:new1:1025306297677135923><:new2:1025306296553066576> **|** Yenilikler/Güncellemeler`, value: `> • Son güncelleme notları için [tıkla](https://discord.gg/E66J2HzraQ).` })
  .addFields({ name: `<:global:1025305700257243176> **|** Tüm komutlar`, value: `${cmd.slice(10, 5).join("\n") || "Bu sayfada komut bulunmuyor"}` })
  .setColor("#36393F")
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
        
         return i.update({ embeds: [embed], components: [row, buttons] })
        }
        
        if(page === 2) {
          page -= 1;
          
          const buttons = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
          .setCustomId('sol')
          .setEmoji("1025357695240388661")
					.setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId('sayfa')
          .setLabel(page+"/4")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
          .setCustomId('sag')
          .setEmoji("1025357694221172736")
					.setStyle(Discord.ButtonStyle.Success),
			);
        
        const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.")
  .addFields({ name: `<:new1:1025306297677135923><:new2:1025306296553066576> **|** Yenilikler/Güncellemeler`, value: `> • Son güncelleme notları için [tıkla](https://discord.gg/E66J2HzraQ).` })
  .addFields({ name: `<:global:1025305700257243176> **|** Tüm komutlar`, value: `${cmd.slice(10, 5).join("\n") || "Bu sayfada komut bulunmuyor"}` })
  .setColor("#36393F")
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
        
         return i.update({ embeds: [embed], components: [row, buttons] })
        }
        
        if(page === 1) {
          
          const buttons = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
          .setCustomId('sol')
          .setEmoji("1025357695240388661")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId('sayfa')
          .setLabel(page+"/4")
          .setDisabled(true)
					.setStyle(Discord.ButtonStyle.Secondary),
        new Discord.ButtonBuilder()
          .setCustomId('sag')
          .setEmoji("1025357694221172736")
					.setStyle(Discord.ButtonStyle.Success),
			);
        
        const embed = new Discord.EmbedBuilder()
  .setAuthor({ name: "Yardım menüsü | RomanBot", iconURL: client.user.displayAvatarURL({ dynamic: true })})
  .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.")
  .addFields({ name: `<:new1:1025306297677135923><:new2:1025306296553066576> **|** Yenilikler/Güncellemeler`, value: `> • Son güncelleme notları için [tıkla](https://discord.gg/E66J2HzraQ).` })
  .addFields({ name: `<:global:1025305700257243176> **|** Tüm komutlar`, value: `${cmd.slice(5, 0).join("\n") || "Bu sayfada komut bulunmuyor"}` })
  .setColor("#36393F")
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
        
         return i.update({ embeds: [embed], components: [row, buttons] })
        }
        
        
      }
      
    });
    
  });

},
  config: {
    name: "yardım",
    aliases: ["help"],
    desc: "RomanBot'un komutlarını gösterir.",
    enabled: false
  }
}; 

