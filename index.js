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

/* Modüller yüklendi */

