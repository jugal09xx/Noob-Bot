const Discord = require('discord.js');
const client = new Discord.Client();
const oneLinerJoke = require('one-liner-joke'); 
const request = require('request');

request('http://mapps.cricbuzz.com/cbzios/match/livematches', function(err,res,body){
    console.log(body.url['match'])
});

const token = 'NzY0NzAwNTgwMjM2ODg2MDQ2.X4KE6Q.KfkwZ7jgtJloiSLoyif8DVdMnHE';

client.on('message', (msg) => {
    if(msg.content.toLowerCase() === '!hello'){
        console.log(msg.content);
        msg.channel.send(`Hello ${msg.author}, how are you doing?`);
    }

    else if(msg.content.toLowerCase() === "!joke"){
        const getRandomJoke = oneLinerJoke.getRandomJoke();
        msg.channel.send(getRandomJoke.body);
    }

    else if(msg.content.toLowerCase() === "!bye"){
        msg.channel.send(`Good-Bye ${msg.author}!`);
    }

    else if(msg.content.toLowerCase() === "!help"){
        const embed = new Discord.MessageEmbed()
        .setTitle('Welcome to Test Bot!')
        .setDescription('This bot can perform the following tasks:-')
        .addField('!help','Command list')
        .addField('!joke','Random joke')
        .addField('!hello','The bot will greet you')
        .setColor('#3454ee')
        .setAuthor('By Jugal Lad','https://msclubsrm.in/img/teamimg/jugal.jpg')
        msg.channel.send(embed)
    }
});

client.on('ready', () => {
    console.log('bot is online!');
});

client.login(token);