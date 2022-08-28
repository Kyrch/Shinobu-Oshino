require('dotenv').config();
const { prefix } = require('../../json/config.json');
const { EmbedBuilder } = require('discord.js');
const ee = require('../../json/embed.json');
const axios = require('axios');

module.exports = {
    name: "csgo",
    description: "Mostra os status equivalente a conta Steam",
    aliases: ['cs-go'],
    async execute(client, message, args) {

        const {
            member,
            channel
        } = message

        if (args.length != 1) return channel.send(`<@!${member.id}>, use ${prefix}profile <id steam>`)
        if (channel.id != '775086769896554503') return

        try {
            var response = await axios.get(
                `https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${args[0]}`,
                {
                    headers: {
                        "TRN-Api-Key": process.env.apiKeyCS
                    }
                }
            )
        } catch (err) {
            console.error(err)
            channel.send(`<@!${member.id}>, insira um nome válido.`)
            return
        }

        const status = response.data.data.segments[0].stats

        const user = message.author;
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

        const embed = new EmbedBuilder()
            .setColor('#ffca00')
            .setAuthor({ name: `${user.tag}`, iconURL: `${avatar}` })
            .setTitle(`**${response.data.data.platformInfo.platformUserHandle}**`)
            .setThumbnail(response.data.data.platformInfo.avatarUrl)
            .addFields({
                name: 'Tempo Jogado',
                value: status.timePlayed.displayValue.replace(/,/g, '')
            }, {
                name: 'Kills',
                value: status.kills.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Deaths',
                value: status.deaths.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'K/D',
                value: status.kd.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Headshot',
                value: status.headshotPct.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'MVP',
                value: status.mvp.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Dano Causado',
                value: status.damage.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Partidas Jogadas',
                value: status.matchesPlayed.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Partidas Ganhas',
                value: status.wins.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Partidas Perdidas',
                value: status.losses.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Bombas Plantadas',
                value: status.bombsPlanted.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Bombas Defusadas',
                value: status.bombsDefused.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Dinheiro Gasto',
                value: status.moneyEarned.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Precisão',
                value: status.shotsAccuracy.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Kills de Sniper',
                value: status.snipersKilled.displayValue.replace(/,/g, ''),
                inline: true
            }, {
                name: 'Reféns Resgatados',
                value: status.hostagesRescued.displayValue.replace(/,/g, ''),
                inline: true
            })
            .setTimestamp()
            .setFooter({ text: ee.footerText, iconURL: ee.footerIcon })

        channel.send({
            embeds: [embed]
        })
    }
}