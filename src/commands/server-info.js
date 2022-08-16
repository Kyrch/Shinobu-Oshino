const { MessageEmbed } = require("discord.js");
const ee = require('../../json/embed.json')

module.exports = {
    name: 'server-info',
    description: 'Mostra as informações do servidor',
    aliases: ['serverinfo'],
    async execute(client, message, args) {

        const {
            channel,
            guild,
            guildId
        } = message

        if (channel.type == "dm") return
        if (channel.id != '775086769896554503') return channel.send(`Comando restrito a <#775086769896554503>`)

        if (args.length !== 0) return;
        const avatar = guild.iconURL({
            dynamic: true,
            format: "png",
            size: 1024
        });

        const membersOnline = guild.members.cache.filter(member => member.status != 'offline').size;

        const channelText = guild.channels.cache.filter(channel => channel.type == "GUILD_TEXT").size;
        const channelNews = guild.channels.cache.filter(channel => channel.type == "GUILD_NEWS").size;
        const channelStore = guild.channels.cache.filter(channel => channel.type == "GUILD_STORE").size;
        const channelVoice = guild.channels.cache.filter(channel => channel.type == "GUILD_VOICE").size;
        const channelStage = guild.channels.cache.filter(channel => channel.type == "GUILD_STAGE_VOICE").size;

        const features = guild.features.sort();
        let nowFeatures = []
        features.forEach((item) => {
            nowFeatures += capitalizeFirstLetter(item.replace(",", "").replace(/_/gi, " ").toLowerCase()) + "\n"
        });

        if (avatar === null) {
            var avatarHere = "https://i.imgur.com/JdLLM92.png"
        } else {
            var avatarHere = avatar
        }

        if (guild.description === null) {
            var descriptionHere = `Sem Descrição`
        } else {
            var descriptionHere = guild.description
        }

        if (nowFeatures.length === 0) {
            var nowFeaturesHere = `Sem Módulos`
        } else {
            var nowFeaturesHere = nowFeatures
        }

        const owner = guild.members.cache.find(member => member.id == guild.ownerId).user.tag
        const text = channelText + channelNews
        const cvoice = channelVoice + channelStage

        const exampleEmbed = new MessageEmbed()
            .setColor('#58a0e7')
            .setAuthor({ name: `${guild.name}`, iconURL: `${avatarHere}` })
            .setThumbnail(avatarHere)
            .addFields({
                name: 'ID do Servidor',
                value: `${guildId}`,
                inline: true
            }, {
                name: 'Criação',
                value: new Date(guild.createdTimestamp).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                }),
                inline: true
            }, {
                name: 'Descrição',
                value: `${descriptionHere}`
            }, {
                name: 'Dona',
                value: `${owner}`,
                inline: true
            }, {
                name: 'ID do Dona',
                value: `${guild.ownerId}`,
                inline: true
            }, {
                name: 'Membros',
                value: `${membersOnline} online ${guild.memberCount} membros`
            }, {
                name: 'Cargos',
                value: `${guild.roles.cache.size}`,
                inline: true
            }, {
                name: 'Emojis',
                value: `${guild.emojis.cache.size}`,
                inline: true
            }, {
                name: 'Canais de Texto',
                value: text.toString(),
            }, {
                name: 'Canais de Voz',
                value: cvoice.toString(),
            }, {
                name: 'Impulsos',
                value: `${guild.premiumSubscriptionCount} (Nível ${guild.premiumTier == 'NONE' ? '0' : guild.premiumTier})`
            }, {
                name: 'Recursos do Servidor',
                value: nowFeaturesHere
            })
            .setTimestamp()
            .setFooter({ text: ee.footerText, iconURL: ee.footerIcon });

        try {
            channel.send({
                embeds: [exampleEmbed]
            })
        } catch (err) {
            console.log(err)
        }
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}