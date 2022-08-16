const { Permissions } = require('discord.js');

module.exports = {
    name: 'say',
    description: 'say',
    execute(client, message, args) {

        const {
            member,
            channel
        } = message

        const adm = Permissions.FLAGS.ADMINISTRATOR

        if (!member.permissions.has(adm)) return

        channel.send(`${args.join(' ')}`)
        message.delete()
    }
}