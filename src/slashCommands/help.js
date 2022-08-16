const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const ee = require('../../json/embed.json');
const help = require('../../json/help.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('comando de ajuda')
        .addStringOption(option => option
            .setName('comando')
            .setDescription('selecione um comando ou deixe em branco')
            .addChoice('Activity', 'activity')
            .addChoice('MudaeHelp', 'mudaehelp')
            .addChoice('OldMembers', 'oldmembers')
            .addChoice('Profile', 'profile')
            .addChoice('Say', 'say')
            .addChoice('Server-Info', 'server-info')
            .addChoice('User-Info', 'user-info')),

    async execute(interaction) {

        const command = interaction.options.getString('comando')
        const user = interaction.user;
        const avatarVerify = user.avatarURL({
            dynamic: true,
            format: "png",
            size: 1024
        });

        if (avatarVerify === null) {
            var avatar = "https://i.imgur.com/Xlm8eDA.png"
        } else {
            var avatar = avatarVerify
        }

        let embed = new MessageEmbed()
            .setColor(`${ee.color}`)
            .setDescription("**Prefixo:** t!")
            .setAuthor({ name: `${user.username}#${user.discriminator}`, iconURL: avatar })
            .setThumbnail(ee.avatar)
            .setTimestamp()
            .setFooter({ text: ee.footerText, iconURL: ee.footerIcon })

        if (interaction.options._hoistedOptions.length == 0) {
            embed.setTitle(`${help.default.title}`)
            embed.addField(`${help.default.field1.name}`, `${help.default.field1.value}`)
            embed.addField(`${help.default.field2.name}`, `${help.default.field2.value}`)
        } else {
            embed.setTitle(`${help[command].title}`)
            embed.addField("Sintaxe", `${help[command].sintaxe}`)
            embed.addField("Aliases", `${help[command].aliases}`)
            embed.addField("Função", `${help[command].funcao}`)
            embed.addField("Permissões Necessárias", `${help[command].perms}`)
        }

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        })
    }
}