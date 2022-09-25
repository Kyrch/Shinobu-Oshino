const { EmbedBuilder, ActionRowBuilder, ButtonStyle, TextInputStyle, ButtonBuilder } = require("discord.js");
const { color } = require('../utils/embed.json')

module.exports = {
    name: 'secretfriend',
    description: 'a',
    execute(client, message, args) {

        let embed = new EmbedBuilder()
            .setColor(color)
            .setDescription('Clique no botão para participar e siga o processo')

        let row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('button-modal-secretfriend')
                .setEmoji(getEmojiCode('👤'))
                .setStyle(ButtonStyle.Secondary))


        message.channel.send({ embeds: [embed], components: [row] })
    }
}

function getEmojiCode(emoji) {
    return String.fromCodePoint("0x" + emoji.codePointAt(0).toString(16))
}