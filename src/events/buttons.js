const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    async createEvent(interaction) {
        if (!interaction.isButton()) return;
        const { customId } = interaction;

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

            await interaction.showModal(modal);
        }

        if (customId == 'button-modal-secretfriend') {
            let modal = new ModalBuilder()
                .setCustomId('modal-secret-friend-participants')
                .setTitle('Amigo Secreto')
                .addComponents(
                    new ActionRowBuilder().addComponents(new TextInputBuilder()
                        .setCustomId('ruanumber-secretfriend')
                        .setLabel('Digite sua rua e número')
                        .setStyle(TextInputStyle.Short)
                        .setRequired(true)),
                    new ActionRowBuilder().addComponents(new TextInputBuilder()
                        .setCustomId('cep-secretfriend')
                        .setLabel('Digite seu CEP')
                        .setStyle(TextInputStyle.Short)
                        .setRequired(true)),
                    new ActionRowBuilder().addComponents(new TextInputBuilder()
                        .setCustomId('complement-secretfriend')
                        .setLabel('Digite seu complemento (se houver)')
                        .setStyle(TextInputStyle.Short)
                        .setRequired(false)),
                    new ActionRowBuilder().addComponents(new TextInputBuilder()
                        .setCustomId('bairro-secretfriend')
                        .setLabel('Digite seu bairro')
                        .setStyle(TextInputStyle.Short)
                        .setRequired(true)),
                    new ActionRowBuilder().addComponents(new TextInputBuilder()
                        .setCustomId('citystate-secretfriend')
                        .setLabel('Digite sua cidade e estado')
                        .setStyle(TextInputStyle.Short)
                        .setRequired(true)))

            await interaction.showModal(modal);
        }
    }
}