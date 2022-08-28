const { SlashCommandBuilder, ButtonBuilder, ActionRowBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const ee = require('../../json/embed.json');
const { searchAPI, searchMedia } = require('../functions/anilist');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anilist')
        .setDescription('Busca no Anilist')
        .addStringOption(option => option
            .setName('tipo')
            .setDescription('selecione o tipo de pesquisa')
            .setRequired(true)
            .addChoices({ name: 'Anime', value: 'anime' },
                { name: 'Character', value: 'character' },
                { name: 'Mangá', value: 'manga' },
                { name: 'Staff', value: 'staff' },
                { name: 'User', value: 'user' }))
        .addStringOption(option => option
            .setName('pesquisa')
            .setDescription('digite o que deseja buscar')
            .setRequired(true)),

    async execute(interaction) {

        const type = interaction.options.get('tipo').value
        const query = interaction.options.get('pesquisa').value

        if (type == 'anime' || type == 'manga') {
            results = await searchMedia(query, type.toUpperCase())
            await interaction.reply({ content: '...', fetchReply: true })
            const listMsg = await interaction.fetchReply()
            await sleep(500)
            loadMsgMedia(listMsg, results, 1, listMsg.id, interaction, type)
            return
        }

        search = await searchAPI(query, type)

        if (type == 'character') {
            let gendersDefault = {
                Female: "Mulher",
                Male: "Homem"
            }

            let name = `${search.name?.first} ${search.name?.last}`
            let idade = search.age || "Não revelado"
            let gender = gendersDefault[search.gender] || "Não revelado"
            var embed = new EmbedBuilder()
                .setColor(ee.color)
                .setTitle(`${name}`)
                .setDescription(`[${name}](${search.siteUrl})\n\n**Idade:** ${idade}\n**Gênero:** ${gender}`)
                .addFields([{ name: 'Favoritos', value: `${search.favourites}` }])
                .setImage(`${search.image?.large}`)

            var embed2 = new EmbedBuilder()
                .setColor(ee.color)
                .setDescription(`${search.description.replace(/~!/g, "||").replace(/!~/g, "||")}`)
                .setTimestamp()
                .setFooter({ text: ee.footerText, iconURL: ee.footerIcon })

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
                .setColor(ee.color)
                .setTitle(`${search.name?.first} ${search.name?.last}`)
                .setDescription(`[${search.name?.first} ${search.name?.last}](${search.siteUrl})\n\n${search.description}`)
                .setImage(`${search.image?.large}`)
                .setTimestamp()
                .setFooter({ text: ee.footerText, iconURL: ee.footerIcon })

        }

        if (type == 'user') {
            var embed = new EmbedBuilder()
                .setColor(ee.color)
                .setTitle(`${search.name}`)
                .setDescription(`[${search.name}](${search.siteUrl})`)
                .setImage(`${search.avatar?.large}`)
                .addFields([{ name: "Minutos Assistidos", value: `${search.statistics?.anime?.minutesWatched}` }])
                .addFields([{ name: "Capítulos Lidos", value: `${search.statistics?.manga?.chaptersRead}` }])
                .setTimestamp()
                .setFooter({ text: ee.footerText, iconURL: ee.footerIcon })

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

loadMsgMedia = async (listMsg, pe, page, ID, interaction, type) => {

    let url = pe.slice(page - 1, page).map(a => a.siteUrl)
    let format = pe.slice(page - 1, page).map(a => a.format)
    let titleRomaji = pe.slice(page - 1, page).map(a => a.title.romaji)
    let titleEnglish = pe.slice(page - 1, page).map(a => a.title.english)
    let img = pe.slice(page - 1, page).map(a => a.coverImage.large)
    let favourites = pe.slice(page - 1, page).map(a => a.favourites)
    let genres = pe.slice(page - 1, page).map(a => a.genres.join(', '))
    let startDate = pe.slice(page - 1, page).map(a => `${a.startDate.day}/${a.startDate.month}/${a.startDate.year}`) || "XX/XX/XXXX"
    let endDate = pe.slice(page - 1, page).map(a => `${a.endDate.day}/${a.endDate.month}/${a.endDate.year}`) || "XX/XX/XXXX"
    let season = pe.slice(page - 1, page).map(a => a.season)
    let episodes = pe.slice(page - 1, page).map(a => a.episodes)
    let chapters = pe.slice(page - 1, page).map(a => a.chapters)
    let volumes = pe.slice(page - 1, page).map(a => a.volumes)
    let status = pe.slice(page - 1, page).map(a => a.status)
    let meanScore = pe.slice(page - 1, page).map(a => a.meanScore)


    let embed = new EmbedBuilder()
        .setColor(ee.color)
        .setTitle(`${titleRomaji} - Página ${page}/${pe.length}`)
        .setDescription(`[${titleEnglish}](${url}) (${format})`)
        .setThumbnail(`${img}`)
        .setFooter({ text: ee.footerText, iconURL: ee.footerIcon })

    const seasonDefault = {
        WINTER: 'Winter',
        SPRING: 'Spring',
        SUMMER: 'Summer',
        FALL: 'Fall'
    }

    embed.addFields([{ name: 'Status', value: `${status}`, inline: false }])
    embed.addFields([{ name: 'Início', value: `${startDate}`, inline: true }])
    embed.addFields([{ name: 'Fim', value: `${endDate}`, inline: true }])
    embed.addFields([{ name: 'Season', value: `${seasonDefault[season]}`, inline: true }])
    embed.addFields([{ name: 'Favoritos', value: `${favourites}`, inline: true }])

    if (type == 'anime') {
        embed.addFields([{ name: 'Episódios', value: `${episodes}`, inline: true }])
    } else if (type == 'manga') {
        embed.addFields([{ name: 'Capítulos', value: `${chapters}`, inline: true }])
        embed.addFields([{ name: 'Volumes', value: `${volumes}`, inline: true }])
    }

    embed.addFields([{ name: 'Gêneros', value: `${genres}`, inline: false }])
    embed.addFields([{ name: 'MeanScore', value: `${meanScore}`, inline: true }])

    const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId(`${ID}fback`)
            .setEmoji('⏪')
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page == 1),
        new ButtonBuilder()
            .setCustomId(`${ID}back`)
            .setEmoji('◀️')
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page == 1),
        new ButtonBuilder()
            .setCustomId(`${ID}next`)
            .setEmoji('▶️')
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page == pe.length),
        new ButtonBuilder()
            .setCustomId(`${ID}fnext`)
            .setEmoji('⏩')
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page == pe.length)
    )

    if (listMsg) await interaction.editReply({
        embeds: [embed],
        components: [row]
    })
    else listMsg = await interaction.followUp({
        embeds: [embed],
        components: [row]
    });

    const filter = i => i.user.id === interaction.member.id
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000, max: 1 })

    collector.on('collect', async inter => {
        try {
            await inter.deferUpdate()
        } catch (err) { }

        if (inter.customId == `${ID}back`) {
            loadMsgMedia(listMsg, pe, page - 1, ID, inter)
            page--
        }

        if (inter.customId == `${ID}next`) {
            loadMsgMedia(listMsg, pe, page + 1, ID, inter)
            page++
        }

        if (inter.customId == `${ID}fback`) {
            loadMsgMedia(listMsg, pe, 1, ID, inter)
            page = 1
        }

        if (inter.customId == `${ID}fnext`) {
            loadMsgMedia(listMsg, pe, pe.length, ID, inter)
            page = pe.length
        }
    });
}

sleep = async msec => {
    return new Promise(resolve => setTimeout(resolve, msec));
}