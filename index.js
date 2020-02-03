const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
client.on('ready', () => {
    console.clear()
    console.log(`======= Bot is Ready =======`)
    console.log(`===========================`)
    console.log(`Bot is : ${client.user.tag}`)
    console.log(`===========================`)
})

client.on('message', async (message) => {
console.log(`message has been detected`)
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

client.on('guildMemberAdd', (member) => {
    console.log(`${member.user.tag} has been join ${member.guild.name}`)
})

client.on('guildMemberRemove', (member) => {
    console.log(`${member.user.tag} has been leave ${member.guild.name}`)
})

client.login(config.token)
