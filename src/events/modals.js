module.exports = {
    async createEvent(modal) {
        const { customId, fields, guild, user } = modal
        if (!modal.isModalSubmit()) return

        if (customId == 'modal-indica') {

            try { await modal.deferReply({ ephemeral: true }) } catch (err) { }

            let name = fields.getTextInputValue('name-midia')
            let sinopse = fields.getTextInputValue('sinopse-midia')
            let link = fields.getTextInputValue('link-midia')

            await modal.followUp({ content: `**${name}** foi enviado à administração.`, ephemeral: true })
            let channel = guild.channels.cache.find(c => c.id == '852696340264910898')
            channel.send({ content: `**Nome:** ${name}\n\n**Sinopse:** ${sinopse}\n\n**Link:** ${link}\n\n**Indicado por:** <@!${user.id}>` })
        }

        if (customId == 'modal-secret-friend-participants') {
            try { await modal.deferReply({ ephemeral: true }) } catch (err) { }

            let rua = fields.getTextInputValue('ruanumber-secretfriend')
            let cep = fields.getTextInputValue('cep-secretfriend')
            let complement = fields.getTextInputValue('complement-secretfriend') || "Não divulgado"
            let bairro = fields.getTextInputValue('bairro-secretfriend')
            let cityState = fields.getTextInputValue('citystate-secretfriend')

            await modal.followUp({ content: `Seu endereço foi enviado.`, ephemeral: true })
            let channelOrg = guild.channels.cache.find(c => c.id == '1023640869749936128')
            let channelName = guild.channels.cache.find(c => c.id == '1023627890111283271')
            channelOrg.send({ content: `**Usuário:** <@!${user.id}>\n**Rua:** ${rua}\n**Complemento:** ${complement}\n**Bairro:** ${bairro}\n**CEP:** ${cep}\n**Cidade/Estado:** ${cityState}` })

            channelName.messages.fetch('1023643685180670022').then(m => {
                let msgContentSpace = m.content.split('\n')
                let lastLine = msgContentSpace[msgContentSpace.length - 1]
                let numb = parseInt(lastLine.split(' -')[0])
                m.edit({ content: `${m.content}\n${numb + 1} - <@!${user.id}>`})
            })
        }
    }
}