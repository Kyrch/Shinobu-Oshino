const activities = [
    { type: 'WATCHING', name: 'Monogatari' },
    { type: 'PLAYING', name: 'with friends' },
    { type: 'STREAMING', name: 'on Terra do Nunca' }
]

module.exports = (Discord, client) => {
    console.log('Bot ready!')
    client.user.setActivity({ type: 'STREAMING', name: 'on Terra do Nunca'})
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