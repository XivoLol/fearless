const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { //playing
    client.user.setGame(`Welcome To Stuning Server..`,'https://www.twitch.tv/faresgameryt');
    client.user.setStatus('Online')
});



client.login(process.env.BOT_TOKEN);
