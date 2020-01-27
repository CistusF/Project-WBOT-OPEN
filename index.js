const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
client.on('ready', () =>{
console.log('Bot is operational')
})
client.on('message', async (message) => {
console.log(`${message.author.username} : ${message.content}`) //log
if (message.author.bot) return;
if (message.channel.type === "dm") {
    return;
}
if (message.content.indexOf(config.prefix) !== 0) return;
var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
var command = args.shift().toLowerCase();
   try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, database);
    } catch (err) {
        console.log(err)
    }
})

client.login(config.token)
