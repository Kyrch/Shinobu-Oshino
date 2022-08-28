const { InteractionType } = require("discord.js");

module.exports = {
    async createEvent(interaction, client) {
        if (interaction.user.bot) return

        if (interaction.type == InteractionType.ApplicationCommand) {
            var command = client.commandsSlash.get(interaction.commandName) || client.commandsMenu.get(interaction.commandName);
        }

        if (!command) return

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            return interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true
            });
        }
    }
}