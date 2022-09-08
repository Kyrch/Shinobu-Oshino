const { ActionRowBuilder, ButtonStyle, ButtonBuilder, EmbedBuilder } = require("discord.js");
const { color } = require('../utils/embed.json');
const { users } = require('../utils/config.json');

module.exports = {
    name: 'desabaforegistro',
    description: 'desabafo',
    execute(client, message) {

        const { member, channel } = message

        if (!users.includes(member.id)) return

        let embed = new EmbedBuilder()
            .setColor(color)
            .setDescription(`${descriptionDesabafo}`)

        let row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('desabafo')
                    .setEmoji('💭')
                    .setLabel('Desabafo')
                    .setStyle(ButtonStyle.Secondary)
            )

        channel.send({
            embeds: [embed],
            components: [row]
        })
    }
}

var descriptionDesabafo = `**DESABAFO**

Ao reagir você ganhará acesso ao canal de desabafo.
Pedimos que só reaja caso possa se comprometer a não fazer piadas. Esperamos que fique à vontade para usar sempre que sentir que precisa! <:hanekawa:775725327396634654>`