const fs = require('fs');

const events = {
    "buttons.js": "interactionCreate",
    "captcha.js": "interactionCreate",
    "messageCreate.js": "messageCreate",
    "modalIndica.js": "interactionCreate",
    "msgCrosspost.js": "messageCreate",
    "newMember.js": "guildMemberAdd",
    "ready.js": "ready",
    "rolesRegister.js": "interactionCreate",
    "slashCreate.js": "interactionCreate"
}

module.exports = (client) => {
    const eventFiles = fs.readdirSync(`./src/events`).filter(file => file.endsWith('.js'))

    for (let file of eventFiles) {
        let event = require(`../events/${file}`)
        client.on(events[file], (data) => {
            event.createEvent(data, client)
        })
    }
}