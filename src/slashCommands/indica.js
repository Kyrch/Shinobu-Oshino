require('dotenv').config();
const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');
const ee = require('../../json/embed.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('indica')
        .setDescription('Sugere alguma mídia para a administração indicar')
        .setDMPermission(false),
    async execute(interaction) {

        let modal = new ModalBuilder()
            .setCustomId('modal-indica')
            .setTitle('teste')
            .addComponents(
                new ActionRowBuilder().addComponents(new TextInputBuilder()
                    .setCustomId('name-midia')
                    .setLabel('O que deseja indicar?')
                    .setStyle(TextInputStyle.Short)),
                new ActionRowBuilder().addComponents(new TextInputBuilder()
                    .setCustomId('sinopse-midia')
                    .setLabel('Qual a sinopse?')
                    .setStyle(TextInputStyle.Paragraph)),
                new ActionRowBuilder().addComponents(new TextInputBuilder()
                    .setCustomId('link-midia')
                    .setLabel('Qual o link no anilist?')
                    .setStyle(TextInputStyle.Short)))


        await interaction.showModal(modal)
        const info = await interaction.awaitModalSubmit({ time: 120000 })

        if (info) {
            try { await info.deferUpdate() } catch (err) {}
            let name = info.fields.getTextInputValue('name-midia')
            let sinopse = info.fields.getTextInputValue('sinopse-midia')
            let link = info.fields.getTextInputValue('link-midia')
            await info.followUp({ content: `**${name}** foi enviado à administração.`, ephemeral: true })

            let channel = interaction.guild.channels.cache.find(c => c.id == '852696340264910898')
            channel.send({ content: `**Nome:** ${name}\n\n**Sinopse:** ${sinopse}\n\n**Link:** ${link}\n\n**Indicado por:** <@!${info.user.id}>`})
        }
    }
}