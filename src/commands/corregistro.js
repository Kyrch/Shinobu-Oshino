const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
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

        const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('amarelo')
                    .setEmoji('<:amarelo:944732583357452288>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('azul-claro')
                    .setEmoji('<:azulclaro:944730688144425063>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('azul-escuro')
                    .setEmoji('<:azulescuro:944730687720783882>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('branco')
                    .setEmoji('<:branco:944730687284609046>')
                    .setStyle('SECONDARY'),
            );

        const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('cinza')
                    .setEmoji('<:cinza:944730687670480906>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('laranja')
                    .setEmoji('<:laranja:944730687569788959>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('lilas')
                    .setEmoji('<:lilas:944730687842451536>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('preto')
                    .setEmoji('<:preto:944730687435604053>')
                    .setStyle('SECONDARY'),
            );

        const row3 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('rosa')
                    .setEmoji('<:rosa:944730687720808529>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('roxo')
                    .setEmoji('<:roxo:944730687913754674>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('verde-claro')
                    .setEmoji('<:verdeclaro:944730687838224484>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('verde-escuro')
                    .setEmoji('<:verdeescuro:944730687875973241>')
                    .setStyle('SECONDARY'),
            );

        const row4 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('vermelho')
                    .setEmoji('<:vermelho:944730687427207249>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('vinho')
                    .setEmoji('<:vinho:944746953776955392>')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('faqcolor')
                    .setEmoji('❔')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('corpersonalizada')
                    .setEmoji('<:corpersonalizada:944744434904489984>')
                    .setStyle('PRIMARY')
            )

        let embed = new MessageEmbed()
            .setColor(`${ee.color}`)
            .setDescription('Escolha apenas **UMA** das cores abaixo.')


        channel.send({
            embeds: [embed],
            components: [row1, row2, row3, row4]
        })
    }
}