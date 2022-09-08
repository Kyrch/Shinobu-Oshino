const { ButtonBuilder, EmbedBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
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
                    .setEmoji('💛')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('eventos')
                    .setEmoji('💙')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('indicacoes')
                    .setEmoji('🤍')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('evento-atual')
                    .setEmoji('💚')
                    .setStyle(ButtonStyle.Secondary),
            );

        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('mudaenotify')
                    .setEmoji('💖')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('sorteios')
                    .setEmoji('🧡')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('jogos-gratis')
                    .setEmoji('💜')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('faqnotifys')
                    .setEmoji('❔')
                    .setStyle(ButtonStyle.Primary),
            );


        let embed = new EmbedBuilder()
            .setColor(color)
            .setDescription(`**CARGOS DE NOTIFICAÇÕES**\n\nClique em "❔" para saber mais.`)

        
        channel.send({
            embeds: [embed],
            components: [row1, row2]
        })
    }
}