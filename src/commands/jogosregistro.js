const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
const ee = require('../../json/embed.json');
const { users } = require('../../json/config.json');

module.exports = {
    name: 'jogosregistro',
    description: 'jogos',
    execute(client, message, args) {

        const {
            member,
            channel
        } = message

        if (!users.includes(member.id)) return

        const channelEdit = client.channels.cache.find(channel => channel.id == '854065444812881960')

        const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('amongus')
                    .setEmoji('<:amongus:944758103394615356>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('amq')
                    .setEmoji('<:amq:944758103574986823>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('csgo')
                    .setEmoji('<:csgo:944758103524667403>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('danganronpa')
                    .setEmoji('<:danganronpa:944758103461752862>')
                    .setStyle('SECONDARY'),
            );

        const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('fortnite')
                    .setEmoji('<:fortnite:966962979784515584>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('genshin')
                    .setEmoji('<:genshin:944758103642079312>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('llsifas')
                    .setEmoji('<:llsifas:944758104262856764>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('lol')
                    .setEmoji('<:lol:944758103558201344>')
                    .setStyle('SECONDARY'),

            );

        const row3 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('mudae')
                    .setEmoji('<:mudae:944758104120229928>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('osu')
                    .setEmoji('<:osu:966962979805478982>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('poker')
                    .setEmoji('<:poker:966962979549626391>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('rainbowsix')
                    .setEmoji('<:r6:966962980401074236>')
                    .setStyle('SECONDARY'),
            );

        const row4 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('roblox')
                    .setEmoji('<:roblox:944758103646285834>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('rocket-league')
                    .setEmoji('<:rocket-league:944758103423991829>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('valorant')
                    .setEmoji('<:vava:944758103520456784>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('faqjogos')
                    .setEmoji('❔')
                    .setStyle('PRIMARY'),
            );


        let embed = new MessageEmbed()
            .setColor(ee.color)
            .setDescription(`**CARGOS DE JOGOS**\n\nQuais são os jogos que você joga?`)


        channel.send({
            embeds: [embed],
            components: [row1, row2, row3]
        })

        //  channelEdit.messages.fetch('945499707952734289').then(msg => msg.edit({ embeds: [embed], components: [row1, row2, row3, row4] }))
    }
}