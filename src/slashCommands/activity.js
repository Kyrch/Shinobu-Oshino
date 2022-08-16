const { SlashCommandBuilder } = require('@discordjs/builders');
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
            .addChoice('Youtube', 'youtube')
            .addChoice('Poker', 'poker')
            .addChoice('Xadrez', 'chess')
            .addChoice('Damas', 'checkers')
            .addChoice('Betrayal', 'betrayal')
            .addChoice('Fishing.io', 'fishing')
            .addChoice('Letter Tile', 'lettertile')
            .addChoice('Words Snack', 'wordsnack')
            .addChoice('Doodle Crew', 'doodlecrew')
            .addChoice('SpellCast', 'spellcast')
            .addChoice('Awkword', 'awkword')
            .addChoice('Puttparty', 'puttparty')),

    async execute(interaction) {
        if (interaction.options._hoistedOptions.length != 1) return
        if (interaction.channel.id != '775086769896554503') return await interaction.reply('Comando restrito a <#775086769896554503>')
        if (!interaction.member.voice.channel) return await interaction.reply('Entre em um canal de voz')

        const activity = interaction.options.getString('atividade')

        discordTogether.createTogetherCode(interaction.member.voice.channel.id, activity).then(async invite => {
            return interaction.reply(`${invite.code}`)
        })
    }
}