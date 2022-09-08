module.exports = {
    async createEvent(modal) {
        const { customId, fields, guild, user } = modal
        if (!modal.isModalSubmit()) return
        if (customId != 'modal-indica') return

        try { await modal.deferReply({ ephemeral: true }) } catch (err) {}

        let name = fields.getTextInputValue('name-midia')
        let sinopse = fields.getTextInputValue('sinopse-midia')
        let link = fields.getTextInputValue('link-midia')

        await modal.followUp({ content: `**${name}** foi enviado à administração.`, ephemeral: true })
        let channel = guild.channels.cache.find(c => c.id == '852696340264910898')
        channel.send({ content: `**Nome:** ${name}\n\n**Sinopse:** ${sinopse}\n\n**Link:** ${link}\n\n**Indicado por:** <@!${user.id}>` })
    }
}