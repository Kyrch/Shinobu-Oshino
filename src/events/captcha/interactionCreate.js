const Captcha = require("@haileybot/captcha-generator");
const { MessageAttachment, MessageEmbed } = require('discord.js');
const ee = require('../../../json/embed.json')

module.exports = async (Discord, client, interaction) => {

    if (!interaction.isButton() || interaction.customId != 'captcha') return

    let captcha = new Captcha()
    let attachment = new MessageAttachment(captcha.JPEGStream, "captcha.jpeg")

    var embedSucess = new MessageEmbed()
        .setColor(ee.color)
        .setTitle("Captcha")
        .setDescription("**Parabéns, agora você tem acesso ao servidor**")
        .setTimestamp()
        .setFooter({ text: ee.footerText, iconURL: ee.footerIcon });

    var embedFailed = new MessageEmbed()
        .setColor(ee.color)
        .setTitle("Captcha")
        .setDescription("**Parece que você errou o captcha, chame o comando novamente**")
        .setTimestamp()
        .setFooter({ text: ee.footerText, iconURL: ee.footerIcon });


    await interaction.reply({
        content: "**FAÇA O CAPTCHA**",
        files: [attachment],
        ephemeral: true
    })

    let filter = m => m.author.id === interaction.member.user.id
    
    let collector = interaction.channel.createMessageCollector({ filter, time: 60000, max: 1 })
    collector.on("collect", m => {
        if (m.content.toUpperCase() === captcha.value) {
            interaction.followUp({ embeds: [embedSucess], ephemeral: true });
            var role = interaction.guild.roles.cache.find(role => role.id === '775145689146851369')
            interaction.member.roles.add(role)

        } else interaction.followUp({ embeds: [embedFailed], ephemeral: true });
        sleep(1000)
        m.delete();
        collector.stop();
    });
}

sleep = async msec => {
    return new Promise(resolve => setTimeout(resolve, msec));
}