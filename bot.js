const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
      if(member.guild.id !== '474567474940084234') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '507233340751872001').send('*Welcome To* ***Fèarless*** *Server..*');
},3000);
});

client.on('guildMemberAdd', member => {
      if(member.guild.id !== '459123746117255168') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '494383184675602442').send('***"Welcome to Sky Light. " :milky_way: :yellow_heart:***');
},3000);
});



client.login(process.env.BOT_TOKEN);
