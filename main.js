const Discord = require('discord.js')



const client = new Discord.Client();

const prefix = '$';

const fs = require('fs');

const querystring = require('querystring'); //urban dictionary

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command);
}


client.once('ready', ()=>{
    console.log('testing is alive')
})

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    // allows to have multiple commands
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if (command === 'oui') {
        client.commands.get('oui').execute(message, args)
    }
    else if (command == 'marco') {
        client.commands.get('marco').execute(message, args)

    } 
    else if (command == 'urban' || command =='ud') {
        client.commands.get('urbandict').execute(message, args)

    } 
    else if (command == 'read' || 'reading' || 'lectura') {
        client.commands.get('lectura').execute(message, args)

    }
    else if (command == 'alain') {
        message.channel.send('https://www.youtube.com/watch?v=YihmpQdTj54')
    }


})







// GIVING ACCESS TO THE BOT
client.login('ODA3ODM5MTI0NDA0MzA2MDAx.YB900A.t0BZ_oRjR2cDMJsfOg3bBf_44x4')