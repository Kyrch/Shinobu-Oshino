const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
const ee = require('../../json/embed.json');
const { users } = require('../../json/config.json');

module.exports = {
    name: 'notifyregistro',
    description: 'notify',
    execute(client, message, args) {

        const {
            member,
            channel
        } = message

        if (!users.includes(member.id)) return

        const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('avisos')
                    .setEmoji('💛')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('eventos')
                    .setEmoji('💙')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('indicacoes')
                    .setEmoji('🤍')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('evento-atual')
                    .setEmoji('💚')
                    .setStyle('SECONDARY'),
            );

        const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('mudaenotify')
                    .setEmoji('💖')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('sorteios')
                    .setEmoji('🧡')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('jogos-gratis')
                    .setEmoji('💜')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('faqnotifys')
                    .setEmoji('❔')
                    .setStyle('PRIMARY'),
            );


        let embed = new MessageEmbed()
            .setColor(ee.color)
            .setDescription(`**CARGOS DE NOTIFICAÇÕES**\n\nClique em "❔" para saber mais.`)

        
        channel.send({
            embeds: [embed],
            components: [row1, row2]
        })
    }
}