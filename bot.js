const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("ready", () => {
    client.user.setPresence({
      status: 'dnd',
      game: { 
         type: 0,
         name: 'Surprise Mother Fucker :) ',
         details: `I'm : dÁrY - Developer and Programmer`,
         url: 'http://twitch.tv/Streammingg',
         state: `إنْ لَمْ تَجِد لكْ حآقدْ إعلمْ أنْك إنسآن فآشِلْ`,
        application_id: '336614900329611264',
         assets: {
            small_image: `366835431037337600`,
            small_text: ' Take This ! ' ,
            large_image: `370451271133429760`,
            large_text: `CODES FOREVER ♥` }
    
      }
        });
    });
    
client.on('guildMemberAdd', member => {
      if(member.guild.id !== '474567474940084234') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '512734412501155840').send('*Welcome To* ***Fèarless*** *Server..*');
},3000);
});

client.on('guildMemberAdd', member => {
      if(member.guild.id !== '459123746117255168') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '494383184675602442').send('***"Welcome to Sky Light. " :milky_way: :yellow_heart:***');
},3000);
});



client.login(process.env.BOT_TOKEN);
