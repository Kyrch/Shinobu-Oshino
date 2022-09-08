require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMembers] });
module.exports = client

client.commands = new Collection();
client.commandsSlash = new Collection();
client.commandsMenu = new Collection();

['commands', 'events'].forEach(handler => require(`./src/handlers/${handler}`)(client));

client.on("error", () => {
    console.log('error')
})

client.login(process.env.DISCORD_TOKEN)