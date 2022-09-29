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
     return message.reply({ content: "Bu Komut deaktıf" })
   } 
     
    if(cmd) {
       return cmd.run(client, message, args);
      }; 
     
   });
  
};