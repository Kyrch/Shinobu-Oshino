const { ActivityType } = require('discord.js');

const activities = [
    { type: ActivityType.Watching, name: 'Monogatari' },
    { type: ActivityType.Playing, name: 'with friends' },
    { type: ActivityType.Streaming, name: 'on Terra do Nunca' }
]

module.exports = {
    async createEvent(client) {
        console.log('Bot ready!')
        client.user.setActivity({ type: ActivityType.Streaming, name: 'on Terra do Nunca' })
        setInterval(() => {
            const randomActivity = activities[Math.floor(Math.random() * activities.length)]
            const c = client.user.setPresence({
                afk: false,
                activities: [{
                    name: randomActivity.name,
                    type: randomActivity.type
                }],
                intents: [],
                partials: [],
            })
        }, 3 * 60 * 1000)
    }
}