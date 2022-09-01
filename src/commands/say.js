const { PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'say',
    description: 'say',
    execute(client, message, args) {

        const {
            member,
            channel,
            attachments
        } = message

        const adm = PermissionsBitField.Flags.Administrator

        if (!member.permissions.has(adm)) return

        const files = attachments.map(a => a.attachment)
        channel.send({
            content: `${args.join(' ')}`,
            files: files
        })
        
    }
}