require('dotenv').config();
const Discord = require('discord.js');
const config = require('./config.js');

const moment = require('moment');

const express = require('express');
const router = express();

const fs = require('fs');


const client = new Discord.Client({ 
  intents: Object.values(Discord.GatewayIntentBits), 
  partials: Object.values(Discord.Partials), 
  allowedMentions: {
    parse: ["user", "roles", "everyone"] 
  } 
});

/* Modüller yüklendi. */

client.once("ready", () => {
  if(!global.client) {
    global.client = client;
  };
});

/* Client siteye tanımlandı. */

function LoadUtils(utils) {
  utils.forEach(async(e) => {
     require('./util/' + e + '.js')(Discord, client, config);
  });
};

/* 
 @params {Array} names
*/

LoadUtils([ "Commands", "Events" ]);

/* Sistem dosyaları yüklendi. */

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commands/${command}`)];
            let cmd = require(`./commands/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.config.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.config.name);
            });
            resolve('[COMMANDS] '+command+" komutu yüklendi.");
        } catch (e) {
            reject(e.toString().includes('Cannot find module') ? 'Geçersiz komut adı yazdınız!': e);
        }
    });
};

/* Komutları yeniler. */

client.login(config.token).then(() => {
  console.log('(!) Token doğrulandı, giriş yapılıyor...');
}).catch(() => {
  console.error('(!) Token hatalı, kontrol ediniz...');
});