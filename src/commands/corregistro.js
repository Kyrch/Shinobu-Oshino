const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require("discord.js");
const ee = require('../../json/embed.json');
const { users } = require('../../json/config.json');

module.exports = {
    name: 'corresgistro',
    description: 'cor',
    execute(client, message, args) {

        const {
            member,
            channel
        } = message

        if (!users.includes(member.id)) return

        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('amarelo')
                    .setEmoji('<:amarelo:944732583357452288>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('azul-claro')
                    .setEmoji('<:azulclaro:944730688144425063>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('azul-escuro')
                    .setEmoji('<:azulescuro:944730687720783882>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('branco')
                    .setEmoji('<:branco:944730687284609046>')
                    .setStyle(ButtonStyle.Secondary),
            );

        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('cinza')
                    .setEmoji('<:cinza:944730687670480906>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('laranja')
                    .setEmoji('<:laranja:944730687569788959>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('lilas')
                    .setEmoji('<:lilas:944730687842451536>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('preto')
                    .setEmoji('<:preto:944730687435604053>')
                    .setStyle(ButtonStyle.Secondary),
            );

        const row3 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rosa')
                    .setEmoji('<:rosa:944730687720808529>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('roxo')
                    .setEmoji('<:roxo:944730687913754674>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('verde-claro')
                    .setEmoji('<:verdeclaro:944730687838224484>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('verde-escuro')
                    .setEmoji('<:verdeescuro:944730687875973241>')
                    .setStyle(ButtonStyle.Secondary),
            );

        const row4 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('vermelho')
                    .setEmoji('<:vermelho:944730687427207249>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('vinho')
                    .setEmoji('<:vinho:944746953776955392>')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('faqcolor')
                    .setEmoji('❔')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('corpersonalizada')
                    .setEmoji('<:corpersonalizada:944744434904489984>')
                    .setStyle(ButtonStyle.Primary)
            )

        let embed = new EmbedBuilder()
            .setColor(ee.color)
            .setDescription('Escolha apenas **UMA** das cores abaixo.')


        channel.send({
            embeds: [embed],
            components: [row1, row2, row3, row4]
        })
    }
}