module.exports = {
    name: 'read',
    description: 'This is reading command, spits out text to read',
    execute(message, args) {
        message.channel.send('https://www.youtube.com/watch?v=Cap0BOzizbw');

    }
}