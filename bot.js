const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { //playing
    client.user.setGame(`Welcome To Fèarless Server..`,'https://www.twitch.tv/faresgameryt');
    client.user.setStatus('Online')
});

client.on('guildMemberAdd',m =>{
m.guild.channels.find(c => c.name === "fearless").send('**Welcome To Fèarless Server..**');
});


client.login(process.env.BOT_TOKEN);
