const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
console.log('Bot is operational')
})

client.on('message',(message) => {
console.log(`${message.author.username} : ${message.content}`)
})

client.login('Your Token')
