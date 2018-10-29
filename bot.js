const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', function(){
    var ms = 4000 ;
    var setGame = [`Welcome To Stúning`,`Tags Seller`,`Nitro Seller`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);

});



client.login(process.env.BOT_TOKEN);
