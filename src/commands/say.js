const { PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'say',
    description: 'say',
    execute(client, message, args) {

        const { member, channel } = message

        const adm = PermissionsBitField.Flags.Administrator

        if (!member.permissions.has(adm)) return

        channel.send({
            content: `${args.join(' ')}`
        })
        
    }
}