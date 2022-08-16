require('dotenv').config();
const { Client, Intents, Collection } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const Discord = require('discord.js');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS]
});
module.exports = client

client.commands = new Collection();
client.commandsSlash = new Collection();
client.commandsMenu = new Collection();
client.events = new Collection();

['command_handler', 'event_handler'].forEach(handler => require(`./src/handlers/${handler}`)(client, Discord));

const { botId } = require('./json/config.json');

client.on("guildMemberAdd", async member => {
    if (member.bot) return
    try {
        member.send({ content: `Realize o captcha clicando no botão do canal <#959848737348395038>` })
    } catch (err) {
        console.log(err)
    }
    const channel = member.guild.channels.cache.find(channel => channel.id === member.guild.systemChannelId)
    channel.send(`Seja bem-vindo (a) <@!${member.user.id}> à nossa amada **${member.guild.name}** !!! Agora somos ${member.guild.memberCount} membros no server.\nLembre-se de ler as <#775088287626428416>, fazer seus <#854065444812881960> e aproveitar ao máximo! <:senjougahara:775725327908601936>`)
})

client.on("messageCreate", (message) => {
    const { channel } = message

    if (channel.id == '935689126974476298' || channel.id == '852931131824930816' || channel.id == '929183441998708798') {
        message.crosspost()
    }
})

client.on("error", () => {
    console.log('error')
})

// Slash Commands setName
const comma = []
const commandFiles = fs.readdirSync('./src/slashCommands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./src/slashCommands/${file}`);
    client.commandsSlash.set(command.data.name, command);
    comma.push(command.data.toJSON());
}


// Context Menu setName
const menuFiles = fs.readdirSync('./src/menuCommands').filter(fileM => fileM.endsWith('.js'))

for (const fileM of menuFiles) {
   const commandMenu = require(`./src/menuCommands/${fileM}`)
   client.commandsMenu.set(commandMenu.data.name, commandMenu);
   comma.push(commandMenu.data);
}


// Server Defined
const rest = new REST({
    version: '9'
}).setToken(process.env.DISCORD_TOKEN);
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(
            Routes.applicationCommands(botId), {
            body: comma
        },
        );
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();


// Interaction Create from Slash and Context Menu
client.on('interactionCreate', async (interaction) => {

    if (interaction.member == null) return console.log('comando dm');

    if (interaction.isCommand()) {
        var command = client.commandsSlash.get(interaction.commandName);
    }

    if (interaction.isContextMenu()) {
        var command = client.commandsMenu.get(interaction.commandName);
    }

    if (!command) return

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        return interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true
        });
    }
});

client.login(process.env.DISCORD_TOKEN)