const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const ee = require('../../json/embed.json');
const { users } = require('../../json/config.json');

module.exports = {
    name: 'desabaforegistro',
    description: 'desabafo',
    execute(client, message, args) {

        const {
            member,
            channel
        } = message

        if (!users.includes(member.id)) return

        let embed = new MessageEmbed()
            .setColor(`${ee.color}`)
            .setDescription(`${descriptionDesabafo}`)

        let row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('desabafo')
                    .setEmoji('💭')
                    .setLabel('Desabafo')
                    .setStyle('SECONDARY')
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