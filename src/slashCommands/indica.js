require('dotenv').config();
const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');
const ee = require('../../json/embed.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('indicar')
        .setDescription('Sugere alguma mídia para a administração indicar')
        .setDMPermission(false),
    async execute(interaction) {

        let modal = new ModalBuilder()
            .setCustomId('modal-indica')
            .setTitle('Indicação')
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
    }
}