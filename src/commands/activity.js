const { DiscordTogether } = require('discord-together');
const client = require('../../index');
const discordTogether = new DiscordTogether(client);

module.exports = {
    name: 'activity',
    description: 'Adiciona atividade a call',
    aliases: ['ac'],
    execute(client, message, args) {

        const {
            member,
            channel
        } = message

        const list = ['youtube', 'poker', 'chess', 'checkers', 'betrayal', 'fishing', 'lettertile', 'wordsnack', 'doodlecrew', 'spellcast', 'awkword', 'puttparty']

        if (args.length != 1 || !list.includes(args[0])) return channel.send(`<@!${member.id}>, use uma dessas atividades: ${list.join(', ')}`)

        if (channel.id != '775086769896554503') return channel.send(`<@!${member.id}>, comando restrito a <#775086769896554503>`)
        if (!member.voice.channel) return channel.send(`<@!${member.id}>, entre em um canal de voz`)

        discordTogether.createTogetherCode(member.voice.channel.id, activity).then(async invite => {
            return channel.send(`${invite.code}`)
        })
    }
}