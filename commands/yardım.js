const emote = require("../emotes.json");
const config = require("../config.js");

module.exports = {
  run: async (client, message, args) => {

  let filteredCmds = config.filteredCmds;   
  let commands = client.commands.map(x => `• **__${x.config.name}__** 🠮 ${x.config.desc}`).jo
  let commandsLength = commands.length.toString();  
    
   message.reply({ content:  `${commands}`})  

},
  config: {
    name: "yardım",
    aliases: [""],
    desc: "RomanBot'un komutlarını gösterir.",
    enabled: false
  }
}; 