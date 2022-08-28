const { ButtonBuilder, EmbedBuilder, ActionRowBuilder } = require("discord.js");
const ee = require('../../json/embed.json');
const { users } = require('../../json/config.json');
const { ButtonStyle } = require('discord.js');

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

        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('amongus')
                    .setEmoji('<:amongus:944758103394615356>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('amq')
                    .setEmoji('<:amq:944758103574986823>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('csgo')
                    .setEmoji('<:csgo:944758103524667403>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('danganronpa')
                    .setEmoji('<:danganronpa:944758103461752862>')
                    .setStyle(ButtonStyle.Secondary),
            );

        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('fortnite')
                    .setEmoji('<:fortnite:966962979784515584>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('genshin')
                    .setEmoji('<:genshin:944758103642079312>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('llsifas')
                    .setEmoji('<:llsifas:944758104262856764>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('lol')
                    .setEmoji('<:lol:944758103558201344>')
                    .setStyle(ButtonStyle.Secondary),

            );

        const row3 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('mudae')
                    .setEmoji('<:mudae:944758104120229928>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('osu')
                    .setEmoji('<:osu:966962979805478982>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('poker')
                    .setEmoji('<:poker:966962979549626391>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('rainbowsix')
                    .setEmoji('<:r6:966962980401074236>')
                    .setStyle(ButtonStyle.Secondary),
            );

        const row4 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('roblox')
                    .setEmoji('<:roblox:944758103646285834>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('rocket-league')
                    .setEmoji('<:rocket-league:944758103423991829>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('valorant')
                    .setEmoji('<:vava:944758103520456784>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('faqjogos')
                    .setEmoji('❔')
                    .setStyle(ButtonStyle.Primary),
            );


        let embed = new EmbedBuilder()
            .setColor(ee.color)
            .setDescription(`**CARGOS DE JOGOS**\n\nQuais são os jogos que você joga?`)


        channel.send({
            embeds: [embed],
            components: [row1, row2, row3]
        })

        //  channelEdit.messages.fetch('945499707952734289').then(msg => msg.edit({ embeds: [embed], components: [row1, row2, row3, row4] }))
    }
}