const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');
const ee = require('../utils/embed.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('comando de ajuda'),

    async execute(interaction) {

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
            .setTitle("COMANDOS")
            .setDescription(commands)
            .setAuthor({ name: `${user.username}#${user.discriminator}`, iconURL: avatar })
            .setThumbnail(ee.avatar)
            .setTimestamp()
            .setFooter({ text: ee.footerText, iconURL: ee.footerIcon })


        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        })
    }
}

var commands = `**/activity <atividade>**
Inicia uma das atividades disponíveis.

**/anilist mudae <username>**
Separa seus personagens favoritos por $.

**/anilist pesquisa <tipo> <pesquisa>**
Pesquisa informações de anime/manga/personagem/usuário/staff.

**/csgo <username steam>**
Busca informações do CSGO de um perfil steam.

**/indicar**
Sugere algo para a administração indicar em <#852931131824930816>

**/oldmembers**
Lista os 100 primeiros membros do servidor.`