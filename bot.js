const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
    
client.on('guildMemberAdd', member => {
      if(member.guild.id !== '47456747494008423') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '480929688605425694').send('__  Welcome to Versace 𖤐 __');
},3000);
});



client.login(process.env.BOT_TOKEN);
