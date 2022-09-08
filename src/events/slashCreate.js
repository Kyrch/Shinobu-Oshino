const { InteractionType } = require("discord.js");

module.exports = {
    async createEvent(interaction, client) {
        const { user, type, commandName } = interaction
        if (user.bot) return

        if (type == InteractionType.ApplicationCommand) {
            var command = client.commandsSlash.get(commandName) || client.commandsMenu.get(commandName);
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