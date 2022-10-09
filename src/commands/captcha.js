const { ButtonBuilder, ActionRowBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const { getEmojiCode } = require('../functions/rest');
const { color, footerText, footerIcon } = require('../utils/embed.json');
const { users } = require('../utils/config.json');

module.exports = {
    name: 'captcha',
    description: 'inicia o captcha',
    execute(client, message) {

        const { member, channel } = message
        
        if (!users.includes(member.id)) return

        let embedCaptcha = new EmbedBuilder()
            .setColor(color)
            .setTitle("Captcha")
            .setDescription('🔐 Clique no botão abaixo para realizar o captcha.')
            .setTimestamp()
            .setFooter({ text: footerText, iconURL: footerIcon })

        let button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('captcha')
                    .setEmoji(getEmojiCode('🔐'))
                    .setStyle(ButtonStyle.Primary)
            )

        channel.send({ embeds: [embedCaptcha], components: [button] })
    }
}
