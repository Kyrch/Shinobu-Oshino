const { ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRowBuilder } = require("discord.js");
const { getEmojiCode } = require('../functions/rest');
const { color } = require('../utils/embed.json');
const { users } = require('../utils/config.json');

module.exports = {
    name: 'jogosregistro',
    description: 'jogos',
    execute(client, message) {

        const { member, channel } = message

        if (!users.includes(member.id)) return

        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('amongus')
                    .setEmoji(getEmojiCode('<:amongus:944758103394615356>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('amq')
                    .setEmoji(getEmojiCode('<:amq:944758103574986823>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('csgo')
                    .setEmoji(getEmojiCode('<:csgo:944758103524667403>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('danganronpa')
                    .setEmoji(getEmojiCode('<:danganronpa:944758103461752862>'))
                    .setStyle(ButtonStyle.Secondary),
            );

        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('fortnite')
                    .setEmoji(getEmojiCode('<:fortnite:966962979784515584>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('genshin')
                    .setEmoji(getEmojiCode('<:genshin:944758103642079312>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('llsifas')
                    .setEmoji(getEmojiCode('<:llsifas:944758104262856764>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('lol')
                    .setEmoji(getEmojiCode('<:lol:944758103558201344>'))
                    .setStyle(ButtonStyle.Secondary),

            );

        const row3 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('mudae')
                    .setEmoji(getEmojiCode('<:mudae:944758104120229928>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('osu')
                    .setEmoji(getEmojiCode('<:osu:966962979805478982>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('poker')
                    .setEmoji(getEmojiCode('<:poker:966962979549626391>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('rainbowsix')
                    .setEmoji(getEmojiCode('<:r6:966962980401074236>'))
                    .setStyle(ButtonStyle.Secondary),
            );

        const row4 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('roblox')
                    .setEmoji(getEmojiCode('<:roblox:944758103646285834>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('rocket-league')
                    .setEmoji(getEmojiCode('<:rocket-league:944758103423991829>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('valorant')
                    .setEmoji(getEmojiCode('<:vava:944758103520456784>'))
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('faqjogos')
                    .setEmoji(getEmojiCode('❔'))
                    .setStyle(ButtonStyle.Primary),
            );


        let embed = new EmbedBuilder()
            .setColor(color)
            .setDescription(`**CARGOS DE JOGOS**\n\nQuais são os jogos que você joga?`)


        channel.send({
            embeds: [embed],
            components: [row1, row2, row3]
        })
    }
}