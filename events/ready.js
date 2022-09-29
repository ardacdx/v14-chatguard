module.exports = (Discord, client, config) => {
  client.on('ready', () => {
      console.log('(!) ' + client.user.tag + ' olarak oturum açıldı!');
      client.user.setPresence({ activities: [{ name: 'activity' }], status: 'idle' });
  });
};