const Captcha = require("@haileybot/captcha-generator");
const { AttachmentBuilder, ActionRowBuilder, SelectMenuBuilder, EmbedBuilder } = require('discord.js');
const ee = require('../utils/embed.json');

module.exports = {
    async createEvent(interaction) {

        if (!interaction.isButton() || interaction.customId != 'captcha') return

        let captcha = new Captcha()
        let attachment = new AttachmentBuilder(captcha.JPEGStream, "captcha.jpeg")

        let array = [
            {
                label: captcha.value,
                value: 'correct1'
            },
            {
                label: shuffleString(),
                value: 'wrong1'
            },
            {
                label: shuffleString(),
                value: 'wrong2'
            },
            {
                label: shuffleString(),
                value: 'wrong3'
            }
        ]

        let newArray = shuffleArray(array)

        const row = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('captcha')
                    .setPlaceholder('Selecione o captcha correto')
                    .addOptions(newArray)
            )


        await interaction.reply({
            content: "**FAÇA O CAPTCHA**",
            files: [attachment],
            components: [row],
            ephemeral: true
        })

        let filter = m => m.member.user.id === interaction.member.user.id
        let collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000, max: 1 })

        collector.on('collect', async m => {
            let value = m.values[0].slice(0, -1)

            if (value == 'correct') {
                var embedSucess = new EmbedBuilder()
                    .setColor(ee.color)
                    .setTitle("Captcha")
                    .setDescription("**Parabéns, agora você tem acesso ao servidor**")
                    .setTimestamp()
                    .setFooter({ text: ee.footerText, iconURL: ee.footerIcon });

                await m.reply({ embeds: [embedSucess], ephemeral: true });
                var role = m.guild.roles.cache.find(role => role.id === '775145689146851369')
                m.member.roles.add(role)

            } else if (value == 'wrong') {
                var embedFailed = new EmbedBuilder()
                    .setColor(ee.color)
                    .setTitle("Captcha")
                    .setDescription("**Parece que você errou o captcha, chame o comando novamente**")
                    .setTimestamp()
                    .setFooter({ text: ee.footerText, iconURL: ee.footerIcon });
                await m.reply({ embeds: [embedFailed], ephemeral: true });
            }
        })
    }
}

sleep = async msec => {
    return new Promise(resolve => setTimeout(resolve, msec));
}

function shuffleArray(inputArray) {
    return inputArray.sort(() => Math.random() - 0.5);
}

function shuffleString() {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    return letters.split('').sort(() => Math.random() - 0.5).join('').substring(0, 6)
}