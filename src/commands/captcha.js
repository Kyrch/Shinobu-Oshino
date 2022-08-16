const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const ee = require('../../json/embed.json');
const { users } = require('../../json/config.json');

module.exports = {
    name: 'captcha',
    description: 'inicia o captcha',
    execute(client, message, args) {

        const {
            member,
            channel
        } = message
        
        if (!users.includes(member.id)) return

        let embedCaptcha = new MessageEmbed()
            .setColor(ee.color)
            .setTitle("Captcha")
            .setDescription('🔐 Clique no botão abaixo para realizar o captcha.')
            .setTimestamp()
            .setFooter({ text: ee.footerText, iconURL: ee.footerIcon })

        let button = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('captcha')
                    .setEmoji('🔐')
                    .setStyle('PRIMARY')
            )

        channel.send({ embeds: [embedCaptcha], components: [button] })
    }
}
