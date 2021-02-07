const querystring = require('querystring')
const Discord = require("discord.js")

module.exports = {
    name: 'urbandict',
    description: 'This is an urban dictionary command that fetches definitions from urban dictionary',
    execute(message, args) {
        //message.channel.send(args);
        //const searchString = querystring.stringify({ term: args })
        const searchString = `term=${args}`;
        //const searchString = args
        //message.channel.send(searchString);
        
        if (!args || args) return message.channel.send(new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setDescription(`Dictionary bot is currently unavailable! El Dictionary bot no está disponible actualmente.`)
        )

        // const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${searchString}`).then(response => response.json())

        // try {
        //     const [answer] = list

        //     const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)

        //     const embed = new Discord.MessageEmbed()
        //         .setColor("PURPLE")
        //         .setTitle(answer.word)
        //         .setURL(answer.permalink)
        //         .addFields(
        //             { name: 'Definition', value: trim(answer.definition, 1024) },
        //             { name: 'Example', value: trim(answer.example, 1024) },
        //             { name: 'Rating', value: `${answer.thumbs_up} 👍. ${answer.thumbs_down} 👎.` },
        //         )
        //     message.channel.send(embed)
        // } catch (error) {
        //     console.log(error)
        //     return message.channel.send(new Discord.MessageEmbed()
        //         .setColor("PURPLE")
        //         .setDescription(`No results were found for **${args.slice(1).join(" ")}**`)
        //     )
        // }
       


    }
}