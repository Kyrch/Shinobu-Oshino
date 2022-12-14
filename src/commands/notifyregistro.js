const { ButtonBuilder, EmbedBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
const { getEmojiCode } = require('../functions/rest');
const { color } = require('../utils/embed.json');
const { users } = require('../utils/config.json');

module.exports = {
    name: 'notifyregistro',
    description: 'notify',
    execute(client, message) {

        const { member, channel } = message

        if (!users.includes(member.id)) return

        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('avisos')
                    .setEmoji(getEmojiCode('๐'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('eventos')
                    .setEmoji(getEmojiCode('๐'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('indicacoes')
                    .setEmoji(getEmojiCode('๐ค'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('evento-atual')
                    .setEmoji(getEmojiCode('๐'))
                    .setStyle(ButtonStyle.Secondary),
            );

        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('mudaenotify')
                    .setEmoji(getEmojiCode('๐'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('sorteios')
                    .setEmoji(getEmojiCode('๐งก'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('jogos-gratis')
                    .setEmoji(getEmojiCode('๐'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('faqnotifys')
                    .setEmoji(getEmojiCode('โ'))
                    .setStyle(ButtonStyle.Primary),
            );


        let embed = new EmbedBuilder()
            .setColor(color)
            .setDescription(`**CARGOS DE NOTIFICAรรES**\n\nClique em "โ" para saber mais.`)

        
        channel.send({
            embeds: [embed],
            components: [row1, row2]
        })
    }
}