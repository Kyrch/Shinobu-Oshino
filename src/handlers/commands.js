require('dotenv').config()
const { REST, Routes } = require('discord.js');
const fs = require('fs');

module.exports = async (client) => {

    let comma = []
    let commandFiles = fs.readdirSync('./src/commands').filter(folder => folder.endsWith('.js'))
    let slashFiles = fs.readdirSync('./src/slashCommands').filter(file => file.endsWith('.js'))
    let menuFiles = fs.readdirSync('./src/menuCommands').filter(fileM => fileM.endsWith('.js'))


    for (let file of commandFiles) {
        let commands = require(`../commands/${file}`)
        if (commands.name) client.commands.set(commands.name, commands);
        else continue
    }

    for (let fileS of slashFiles) {
        let commandSlash = require(`../slashCommands/${fileS}`)
        client.commandsSlash.set(commandSlash.data.name, commandSlash)
        comma.push(commandSlash.data.toJSON())
    }

    for (let fileM of menuFiles) {
        let commandMenu = require(`../menuCommands/${fileM}`)
        client.commandsMenu.set(commandMenu.data.name, commandMenu);
        comma.push(commandMenu.data);
    }

    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(process.env.ID_BOT), { body: comma });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}