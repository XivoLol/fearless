const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { //playing
    client.user.setGame(`Welcome To Fèarless Server..`,'https://www.twitch.tv/faresgameryt');
    client.user.setStatus('Online')
});

//خـليه يبحث عن الروم بالاول ..
m.guild.channels.find(c => c.name === "fearless").then(c => { //بـعدين
    c.send("**Welcome To Fèarless Server..**")
    //يـبعت الرسالة
})
});

client.login(process.env.BOT_TOKEN);
