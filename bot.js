const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'X';
    client.on('message', message => {
        if (!message.content.startsWith(prefix)) return;
        var args = message.content.split(' ').slice(1);
        var argresult = args.join(' ');
        if (message.author.id !== "336614900329611264") return;
      
      if (message.content.startsWith(prefix + 'setstream')) {
        client.user.setGame(argresult, "https://www.twitch.tv/mrx-dev");
           console.log('test' + argresult);
          message.channel.sendMessage(`Streaming: **${argresult}`)
      }
      
      if (message.content.startsWith(prefix + 'setname')) {
        client.user.setUsername(argresult).then
            message.channel.sendMessage(`Username Changed To **${argresult}**`)
        return message.reply("You Can change the username 2 times per hour");
      }
      if (message.content.startsWith(prefix + 'setavatar')) {
        client.user.setAvatar(argresult);
         message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
      }
      if (message.content.startsWith(prefix + 'setgame')) {
        client.user.setGame(argresult)
        message.channel.sendMessage(`Game Changed Successfully To **${argresult}**`);
    
    
    }
      });



client.login(process.env.BOT_TOKEN);
