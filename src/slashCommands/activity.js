const { SlashCommandBuilder } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const client = require('../../index.js');
const discordTogether = new DiscordTogether(client);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('activity')
        .setDescription('adiciona atividade a call')
        .addStringOption(option => option
            .setName('atividade')
            .setDescription('selecionar atividade')
            .setRequired(true)
            .addChoices({ name: 'Youtube', value: 'youtube' },
                { name: 'Poker', value: 'poker' },
                { name: 'Xadrez', value: 'chess' },
                { name: 'Damas', value: 'checkers' },
                { name: 'Betrayal', value: 'betrayal' },
                { name: 'Fishing.io', value: 'fishing' },
                { name: 'Letter Tile', value: 'lettertile' },
                { name: 'Words Snack', value: 'wordsnack' },
                { name: 'Doodle Crew', value: 'doodlecrew' },
                { name: 'SpellCast', value: 'spellcast' },
                { name: 'Awkword', value: 'awkword' },
                { name: 'Puttparty', value: 'puttparty' })),


    async execute(interaction) {
        const { channel, member, options } = interaction
        if (channel.id != '775086769896554503') return await interaction.reply('Comando restrito a <#775086769896554503>')
        if (!member.voice.channel) return await interaction.reply('Entre em um canal de voz')

        const activity = options.get('atividade').value

        discordTogether.createTogetherCode(member.voice.channel.id, activity).then(async invite => {
            return interaction.reply(`${invite.code}`)
        })
    }
}