require('dotenv').config();
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { color, footerText, footerIcon } = require('../utils/embed.json');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('csgo')
        .setDescription('Mostra os status equivalente a conta Steam')
        .setDMPermission(false)
        .addStringOption(option => option
            .setName('steam')
            .setDescription('Insira seu ID ou link STEAM')
            .setRequired(true)),
    async execute(interaction) {

        if (interaction.channel.id != '775086769896554503') return
        const name = interaction.options.get('steam').value

        try {
            var response = await axios.get(
                `https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${name}`,
                {
                    headers: {
                        "TRN-Api-Key": process.env.apiKeyCS
                    }
                }
            )
        } catch (err) {
            console.error(err)
            await interaction.reply({ content: `Insira um nome válido.`, ephemeral: true })
            return
        }

        const status = response.data.data.segments[0].stats

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

        const embed = new EmbedBuilder()
            .setColor(color)
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
            .setFooter({ text: footerText, iconURL: footerIcon })

        await interaction.reply({
            embeds: [embed]
        })
    }
}