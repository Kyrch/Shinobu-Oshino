const { ButtonBuilder, ActionRowBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const ee = require('../utils/embed.json');
const { users } = require('../utils/config.json');

module.exports = {
    name: 'captcha',
    description: 'inicia o captcha',
    execute(client, message, args) {

        const {
            member,
            channel
        } = message
        
        if (!users.includes(member.id)) return

        let embedCaptcha = new EmbedBuilder()
            .setColor(ee.color)
            .setTitle("Captcha")
            .setDescription('🔐 Clique no botão abaixo para realizar o captcha.')
            .setTimestamp()
            .setFooter({ text: ee.footerText, iconURL: ee.footerIcon })

        let button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('captcha')
                    .setEmoji('🔐')
                    .setStyle(ButtonStyle.Primary)
            )

        channel.send({ embeds: [embedCaptcha], components: [button] })
    }
}
