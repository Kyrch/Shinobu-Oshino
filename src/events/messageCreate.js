const { ChannelType } = require('discord.js');
const { prefix } = require('../utils/config.json')

module.exports = {
    createEvent(message, client) {

        if (!message.content.startsWith(prefix) /*|| message.channel.type == ChannelType.DM*/) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command_name = args.shift().toLowerCase();
        const command = client.commands.get(command_name) || client.commands.find(a => a.aliases && a.aliases.includes(command_name));
        if (command) command.execute(client, message, args);
    }
}