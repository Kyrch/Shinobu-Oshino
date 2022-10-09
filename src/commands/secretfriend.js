const { EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require("discord.js");
const { getEmojiCode } = require('../functions/rest');
const { color } = require('../utils/embed.json');

module.exports = {
    name: 'secretfriend',
    description: 'a',
    execute(client, message, args) {
        if (message.member.id != '435919278164803586') return

        if (args[0] == 'mensagem') {

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

        if (args[0] == 'adress') {

            let channelAdress = client.channels.cache.find(c => c.id == '1023640869749936128')
            channelAdress.messages.fetch(args[1]).then(m => {
                let content = m.content
                m.edit({ content: `${content}\n**Email:** ${args[2]}` })
            })
        }
    }
}