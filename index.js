require('dotenv').config();
const { Client, GatewayIntentBits, Collection, IntentsBitField } = require('discord.js');

const myIntents = new IntentsBitField();
myIntents.add(GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences);
const client = new Client({ intents: myIntents });
module.exports = client

client.commands = new Collection();
client.commandsSlash = new Collection();
client.commandsMenu = new Collection();

['commands', 'events'].forEach(handler => require(`./src/handlers/${handler}`)(client));

client.on("error", () => {
    console.log('error')
})

client.login(process.env.DISCORD_TOKEN)