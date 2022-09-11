const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    async createEvent(interaction) {
        if (!interaction.isButton()) return
        const { customId } = interaction

        if (customId == 'button-modal-indica') {
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
}