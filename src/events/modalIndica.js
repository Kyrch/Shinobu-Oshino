module.exports = {
    async createEvent(modal) {
        if (!modal.isModalSubmit()) return
        if (modal.customId != 'modal-indica') return

        try { await modal.deferReply({ ephemeral: true }) } catch (err) {}

        let name = modal.fields.getTextInputValue('name-midia')
        let sinopse = modal.fields.getTextInputValue('sinopse-midia')
        let link = modal.fields.getTextInputValue('link-midia')

        await modal.followUp({ content: `**${name}** foi enviado à administração.`, ephemeral: true })
        let channel = modal.guild.channels.cache.find(c => c.id == '852696340264910898')
        channel.send({ content: `**Nome:** ${name}\n\n**Sinopse:** ${sinopse}\n\n**Link:** ${link}\n\n**Indicado por:** <@!${modal.user.id}>` })
    }
}