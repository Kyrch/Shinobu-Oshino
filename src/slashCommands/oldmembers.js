const { SlashCommandBuilder, ButtonBuilder, ActionRowBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const ee = require('../utils/embed.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('oldmembers')
        .setDescription('Mostra os membros mais antigos'),

    async execute(interaction) {
        const list = new Set()
        const list2 = new Set()
        const col = interaction.guild.members.cache.mapValues(user => user.joinedAt)

        for (const [k, v] of col) {
            let array = { id: k, joined: v }
            list.add(array)
        }

        const arrayList = Array.from(list)
        const org = arrayList.sort((a, b) => {
            if (a.joined > b.joined) {
                return 1
            }
            if (a.joined < b.joined) {
                return -1
            }
            return 0
        })

        let i = 0
        for (let k = 0; k < 10; k++) {
            let info = {
                top: `${i + 1}`,
                id: org[i].id,
                joined: new Date(org[i].joined).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                }),
                top2: `${i + 2}`,
                id2: org[i + 1].id,
                joined2: new Date(org[i + 1].joined).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                }),
                top3: `${i + 3}`,
                id3: org[i + 2].id,
                joined3: new Date(org[i + 2].joined).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                }),
                top4: `${i + 4}`,
                id4: org[i + 3].id,
                joined4: new Date(org[i + 3].joined).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                }),
                top5: `${i + 5}`,
                id5: org[i + 4].id,
                joined5: new Date(org[i + 4].joined).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                }),
                top6: `${i + 6}`,
                id6: org[i + 5].id,
                joined6: new Date(org[i + 5].joined).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                }),
                top7: `${i + 7}`,
                id7: org[i + 6].id,
                joined7: new Date(org[i + 6].joined).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                }),
                top8: `${i + 8}`,
                id8: org[i + 7].id,
                joined8: new Date(org[i + 7].joined).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                }),
                top9: `${i + 9}`,
                id9: org[i + 8].id,
                joined9: new Date(org[i + 8].joined).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                }),
                top10: `${i + 10}`,
                id10: org[i + 9].id,
                joined10: new Date(org[i + 9].joined).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                })
            }
            i += 10
            list2.add(info)
        }
        await interaction.reply({ content: '...', fetchReply: true })
        const listMsg = await interaction.fetchReply()
        await sleep(500)
        let pe = Array.from(list2)
        lis(listMsg, pe, 1, listMsg.id, interaction)
        list2.clear()
    }
}

lis = async (listMsg, pe, page, ID, interaction) => {

    let top = pe.slice(page - 1, page).map(a => a.top)
    let id = pe.slice(page - 1, page).map(a => a.id)
    let join = pe.slice(page - 1, page).map(a => a.joined)
    let top2 = pe.slice(page - 1, page).map(a => a.top2)
    let id2 = pe.slice(page - 1, page).map(a => a.id2)
    let join2 = pe.slice(page - 1, page).map(a => a.joined2)
    let top3 = pe.slice(page - 1, page).map(a => a.top3)
    let id3 = pe.slice(page - 1, page).map(a => a.id3)
    let join3 = pe.slice(page - 1, page).map(a => a.joined3)
    let top4 = pe.slice(page - 1, page).map(a => a.top4)
    let id4 = pe.slice(page - 1, page).map(a => a.id4)
    let join4 = pe.slice(page - 1, page).map(a => a.joined4)
    let top5 = pe.slice(page - 1, page).map(a => a.top5)
    let id5 = pe.slice(page - 1, page).map(a => a.id5)
    let join5 = pe.slice(page - 1, page).map(a => a.joined5)
    let top6 = pe.slice(page - 1, page).map(a => a.top6)
    let id6 = pe.slice(page - 1, page).map(a => a.id6)
    let join6 = pe.slice(page - 1, page).map(a => a.joined6)
    let top7 = pe.slice(page - 1, page).map(a => a.top7)
    let id7 = pe.slice(page - 1, page).map(a => a.id7)
    let join7 = pe.slice(page - 1, page).map(a => a.joined7)
    let top8 = pe.slice(page - 1, page).map(a => a.top8)
    let id8 = pe.slice(page - 1, page).map(a => a.id8)
    let join8 = pe.slice(page - 1, page).map(a => a.joined8)
    let top9 = pe.slice(page - 1, page).map(a => a.top9)
    let id9 = pe.slice(page - 1, page).map(a => a.id9)
    let join9 = pe.slice(page - 1, page).map(a => a.joined9)
    let top10 = pe.slice(page - 1, page).map(a => a.top10)
    let id10 = pe.slice(page - 1, page).map(a => a.id10)
    let join10 = pe.slice(page - 1, page).map(a => a.joined10)


    const user = interaction.user;
    const avatarVerify = user.avatarURL({
        dynamic: true,
        format: "png",
        size: 1024
    });

    if (avatarVerify === null) {
        var avatar = "https://i.imgur.com/JdLLM92.png"
    } else {
        var avatar = avatarVerify
    }

    let embed = new EmbedBuilder()
        .setColor(ee.color)
        .setAuthor({ name: `${user.tag}`, iconURL: `${avatar}` })
        .setTitle(`Old Members - Page ${page}/${pe.length}`)
        .setDescription(`${top} - <@!${id}>: ${join}\n${top2} - <@!${id2}>: ${join2}\n${top3} - <@!${id3}>: ${join3}\n${top4} - <@!${id4}>: ${join4}\n${top5} - <@!${id5}>: ${join5}\n${top6} - <@!${id6}>: ${join6}\n${top7} - <@!${id7}>: ${join7}\n${top8} - <@!${id8}>: ${join8}\n${top9} - <@!${id9}>: ${join9}\n${top10} - <@!${id10}>: ${join10}`)
        .setTimestamp()
        .setFooter({ text: ee.footerText, iconURL: ee.footerIcon })

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
            lis(listMsg, pe, page - 1, ID, inter)
            page--
        }

        if (inter.customId == `${ID}next`) {
            lis(listMsg, pe, page + 1, ID, inter)
            page++
        }

        if (inter.customId == `${ID}fback`) {
            lis(listMsg, pe, 1, ID, inter)
            page = 1
        }

        if (inter.customId == `${ID}fnext`) {
            lis(listMsg, pe, pe.length, ID, inter)
            page = pe.length
        }
    });
}

sleep = async msec => {
    return new Promise(resolve => setTimeout(resolve, msec));
}