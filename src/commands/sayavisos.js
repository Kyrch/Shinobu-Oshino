const { PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'sayavisos',
    description: 'sayavisos',
    aliases: ['avisos'],
    execute(client, message, args) {

        const {
            member,
            attachments
        } = message

        const adm = PermissionsBitField.Flags.Administrator

        if (!member.permissions.has(adm)) return

        const channel = client.channels.cache.find(channel => channel.id == '775414286905770024')
        const files = attachments.map(a => a.attachment)
        channel.send({
            content: `${args.join(' ')}`,
            file: files
        })
    }
}