const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');
const ee = require('../../json/embed.json');
const help = require('../../json/help.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('comando de ajuda')
        .addStringOption(option => option
            .setName('comando')
            .setDescription('selecione um comando ou deixe em branco')
            .addChoices({ name: 'Activity', value: 'activity' },
                { name: 'MudaeHelp', value: 'mudaehelp' },
                { name: 'OldMembers', value: 'oldmembers' },
                { name: 'Profile', value: 'profile' },
                { name: 'Say', value: 'say' },
                { name: 'Server-Info', value: 'server-info' },
                { name: 'User-Info', value: 'user-info' })),

    async execute(interaction) {

        const command = interaction.options.get('comando')?.value
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

        let embed = new EmbedBuilder()
            .setColor(ee.color)
            .setDescription("**Prefixo:** t!")
            .setAuthor({ name: `${user.username}#${user.discriminator}`, iconURL: avatar })
            .setThumbnail(ee.avatar)
            .setTimestamp()
            .setFooter({ text: ee.footerText, iconURL: ee.footerIcon })

        if (command == undefined || command == null) {
            embed.setTitle(`${help.default.title}`)
            embed.addFields([{ name: `${help.default.field1.name}`, value: `${help.default.field1.value}` }])
            embed.addFields([{ name: `${help.default.field2.name}`, value: `${help.default.field2.value}` }])
        } else {
            embed.setTitle(`${help[command].title}`)
            embed.addFields([{ name: "Sintaxe", value: `${help[command].sintaxe}` }])
            embed.addFields([{ name: "Aliases", value: `${help[command].aliases}` }])
            embed.addFields([{ name: "Função", value: `${help[command].funcao}` }])
            embed.addFields([{ name: "Permissões Necessárias", value: `${help[command].perms}` }])
        }

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        })
    }
}