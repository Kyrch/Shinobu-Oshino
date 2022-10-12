const { SlashCommandBuilder, ButtonBuilder, ActionRowBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const { getEmojiCode } = require('../functions/rest');
const { searchAPI, searchMedia } = require('../anilist/anilist');
const { getLinkAnimeThemes } = require('../anilist/animethemes');
const { mudaefav } = require('../functions/mudae');
const { color, footerText, footerIcon } = require('../utils/embed.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anilist')
        .setDescription('Busca no Anilist')
        .addSubcommand(sub =>sub.setName('mudae').setDescription('separa os favoritos por $')
                .addStringOption(option => option.setName('username').setDescription('digite o nome de usuário').setRequired(true)))
        .addSubcommand(sub =>sub.setName('pesquisa').setDescription('busca um perfil no anilist')
                .addStringOption(opt => opt.setName('tipo').setDescription('selecione o tipo de pesquisa').setRequired(true)
                    .addChoices({ name: 'Anime', value: 'anime' },
                        { name: 'Character', value: 'character' },
                        { name: 'Mangá', value: 'manga' },
                        { name: 'Staff', value: 'staff' },
                        { name: 'User', value: 'user' }))
                .addStringOption(opt => opt.setName('pesquisa').setDescription('digite o que deseja buscar').setRequired(true))),

    async execute(interaction) {
        const { options, id } = interaction
        if (options._subcommand == 'mudae') {
            search = await searchAPI(options.get('username').value, 'user')
            favsModify = mudaefav(search.favourites.characters.nodes)
            await interaction.reply({ content: favsModify })
            return
        }

        const type = options.get('tipo').value
        const query = options.get('pesquisa').value

        if (type == 'anime' || type == 'manga') {
            results = await searchMedia(query, type.toUpperCase())
            loadMsgMedia(false, results, 1, id, interaction, type)
            return
        }

        search = await searchAPI(query, type)

        if (type == 'character') {
            const gendersDefault = {
                Female: "Feminino",
                Male: "Masculino"
            }

            let name = `${search.name?.first} ${search.name?.last}`
            let idade = search.age || "Não revelado"
            let gender = gendersDefault[search.gender] || "Não revelado"
            var embed = new EmbedBuilder()
                .setColor(color)
                .setTitle(`${name}`)
                .setDescription(`[${name}](${search.siteUrl})\n\n**Idade:** ${idade}\n**Gênero:** ${gender}`)
                .addFields([{ name: 'Favoritos', value: `${search.favourites}` }])
                .setImage(`${search.image?.large}`)

            var embed2 = new EmbedBuilder()
                .setColor(color)
                .setDescription(`${search.description.replace(/~!/g, "||").replace(/!~/g, "||")}`)
                .setTimestamp()
                .setFooter({ text: footerText, iconURL: footerIcon })

            try {
                return await interaction.reply({
                    embeds: [embed, embed2]
                })
            } catch (err) {
                return await interaction.reply({ content: "Ocorreu algum erro", ephemeral: true })
            }
        }

        if (type == 'staff') {
            var embed = new EmbedBuilder()
                .setColor(color)
                .setTitle(`${search.name?.first} ${search.name?.last}`)
                .setDescription(`[${search.name?.first} ${search.name?.last}](${search.siteUrl})\n\n${search.description}`)
                .setImage(`${search.image?.large}`)
                .setTimestamp()
                .setFooter({ text: footerText, iconURL: footerIcon })
        }

        if (type == 'user') {
            var embed = new EmbedBuilder()
                .setColor(color)
                .setTitle(`${search.name}`)
                .setDescription(`[${search.name}](${search.siteUrl})`)
                .setImage(`${search.avatar?.large || 'https://anilist.co/img/icons/icon.svg'}`)
                .addFields([{ name: "Minutos Assistidos", value: `${search.statistics?.anime?.minutesWatched}` }])
                .addFields([{ name: "Capítulos Lidos", value: `${search.statistics?.manga?.chaptersRead}` }])
                .setTimestamp()
                .setFooter({ text: footerText, iconURL: footerIcon })
        }

        try {
            return await interaction.reply({
                embeds: [embed]
            })
        } catch (err) {
            return await interaction.reply({ content: "Ocorreu algum erro", ephemeral: true })
        }
    }
}

var collectNum = 0;

loadMsgMedia = async (listMsg, pe, page, ID, interaction, type) => {

    let idAL = pe.slice(page - 1, page).map(a => a.id)
    let url = pe.slice(page - 1, page).map(a => a.siteUrl)
    let format = pe.slice(page - 1, page).map(a => a.format)
    let titleRomaji = pe.slice(page - 1, page).map(a => a.title.romaji)
    let titleEnglish = pe.slice(page - 1, page).map(a => a.title.english)
    let img = pe.slice(page - 1, page).map(a => a.coverImage.large)
    let favourites = pe.slice(page - 1, page).map(a => a.favourites)
    let genres = pe.slice(page - 1, page).map(a => a.genres.join(', '))
    let startDate = pe.slice(page - 1, page).map(a => `${a.startDate.day || 'XX'}/${a.startDate.month || 'XX'}/${a.startDate.year || 'XX'}`) || "XX/XX/XXXX"
    let endDate = pe.slice(page - 1, page).map(a => `${a.endDate.day || 'XX'}/${a.endDate.month || 'XX'}/${a.endDate.year || 'XX'}`) || "XX/XX/XXXX"
    let season = pe.slice(page - 1, page).map(a => a.season)
    let episodes = pe.slice(page - 1, page).map(a => a.episodes)
    let chapters = pe.slice(page - 1, page).map(a => a.chapters)
    let volumes = pe.slice(page - 1, page).map(a => a.volumes)
    let status = pe.slice(page - 1, page).map(a => a.status)
    let meanScore = pe.slice(page - 1, page).map(a => a.meanScore)


    let embed = new EmbedBuilder()
        .setColor(color)
        .setTitle(`${titleRomaji}`)
        .setDescription(`[${titleEnglish}](${url}) (${format})`)
        .setThumbnail(`${img}`)
        .setFooter({ text: `Página ${page}/${pe.length}`, iconURL: footerIcon })

    const seasonDefault = {
        WINTER: 'Winter',
        SPRING: 'Spring',
        SUMMER: 'Summer',
        FALL: 'Fall',
        not: "Não revelado"
    }

    const statusDefault = {
        NOT_YET_RELEASED: "Não lançado",
        FINISHED: "Finalizado",
        RELEASING: "Lançando",
        CANCELLED: "Cancelado"
    }

    embed.addFields([{ name: 'Status', value: `${statusDefault[status]}`, inline: false }])
    embed.addFields([{ name: 'Início', value: `${startDate}`, inline: true }])
    embed.addFields([{ name: 'Fim', value: `${endDate}`, inline: true }])
    embed.addFields([{ name: 'Season', value: `${seasonDefault[season[0] == null ? "not" : season]}`, inline: true }])
    embed.addFields([{ name: 'Favoritos', value: `${favourites}`, inline: true }])

    if (type == 'anime') {
        embed.addFields([{ name: 'Episódios', value: `${episodes}`, inline: true }])
    } else if (type == 'manga') {
        embed.addFields([{ name: 'Capítulos', value: `${chapters}`, inline: true }])
        embed.addFields([{ name: 'Volumes', value: `${volumes}`, inline: true }])
    }

    embed.addFields([{ name: 'Gêneros', value: `${genres}`, inline: false }])
    try { embed.addFields([{ name: 'MeanScore', value: `${meanScore}%`, inline: true }]) } catch (err) { }

    const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId(`${ID}fback`)
            .setEmoji(getEmojiCode('⏪'))
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page == 1),
        new ButtonBuilder()
            .setCustomId(`${ID}back`)
            .setEmoji(getEmojiCode('◀️'))
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page == 1),
        new ButtonBuilder()
            .setCustomId(`${ID}next`)
            .setEmoji(getEmojiCode('▶️'))
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page == pe.length),
        new ButtonBuilder()
            .setCustomId(`${ID}fnext`)
            .setEmoji(getEmojiCode('⏩'))
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page == pe.length),
        new ButtonBuilder()
            .setCustomId('animethemes')
            .setEmoji(getEmojiCode("📺"))
            .setStyle(ButtonStyle.Success)
            .setDisabled(type == 'manga')
    )

    if (listMsg) await interaction.editReply({
        embeds: [embed],
        components: [row]
    })
    else listMsg = await interaction.reply({
        embeds: [embed],
        components: [row]
    });

    function createCollector() {
        let collector = interaction.channel.createMessageComponentCollector({ time: 60000, max: 1 })

        collector.on('collect', async inter => {
            try { await inter.deferUpdate() } catch (err) { }

            switch (inter.customId) {

                case `${ID}back`:
                    loadMsgMedia(listMsg, pe, page - 1, ID, inter)
                    page--
                    break;

                case `${ID}next`:
                    loadMsgMedia(listMsg, pe, page + 1, ID, inter)
                    page++
                    break;

                case `${ID}fback`:
                    loadMsgMedia(listMsg, pe, 1, ID, inter)
                    page = 1
                    break;

                case `${ID}fnext`:
                    loadMsgMedia(listMsg, pe, pe.length, ID, inter)
                    page = pe.length
                    break;

                case "animethemes":
                    createCollector()
                    let arrayThemes = await getLinkAnimeThemes(idAL[0])
                    if (arrayThemes == null) return await inter.followUp({ content: "Ocorreu algum erro." })
                    await inter.followUp({ content: `**Links AnimeThemes:**\n\n${arrayThemes.join('\n')}` })
                    break;
            }
        });
    }

    createCollector()
}