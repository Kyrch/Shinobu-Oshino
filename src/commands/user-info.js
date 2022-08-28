const { ButtonBuilder, ChannelType } = require("discord.js");
const ee = require('../../json/embed.json');

module.exports = {
    name: 'user-info',
    description: 'Mostra as informações de um usuário',
    aliases: ['userinfo'],
    execute(client, message) {

        const {
            mentions,
            author,
            channel,
            guild
        } = message

        if (channel.type == ChannelType.DM) return
        if (channel.id != '775086769896554503') return channel.send(`Comando restrito a <#775086769896554503>`)

        const user = mentions.users.first() || author;
        if (user) {
            const memberGuild = guild.members.cache.get(user.id)
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

            const status = {
                online: ' `🟢` Online',
                idle: ' `🟠` Ausente',
                dnd: ' `🔴` Não perturbe',
                offline: ' `⚫️` Offline'
            }

            if (memberGuild.presence === null) {
                var statusVerify = ' `⚫️` Offline'
            } else {
                var statusVerify = status[memberGuild.presence.status]
            }

            const exampleEmbed = new ButtonBuilder()
                .setColor('#58a0e7')
                .setAuthor({ name: `${user.username}#${user.discriminator}`, iconURL: `${avatar}` })
                .setTitle(`**${user.tag}**`)
                .setThumbnail(avatar)
                .addFields({
                    name: 'Id do Usuário',
                    value: `${user.id}`
                }, {
                    name: 'Entrou no discord',
                    value: new Date(user.createdTimestamp).toLocaleString("pt-BR", {
                        timeZone: "America/Sao_Paulo"
                    }),
                }, {
                    name: 'Entrou no servidor',
                    value: new Date(memberGuild.joinedTimestamp).toLocaleString("pt-BR", {
                        timeZone: "America/Sao_Paulo"
                    }),
                }, {
                    name: 'Cargo mais alto',
                    value: `${memberGuild.roles.highest}`
                }, {
                    name: 'Status',
                    value: `${statusVerify}`
                })
                .setTimestamp()
                .setFooter({ text: ee.footerText, iconURL: ee.footerIcon });

            try {
                channel.send({
                    embeds: [exampleEmbed]
                });
            } catch (err) {
                console.log(err)
            }
        }
    }
}