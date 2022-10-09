const { getArgs, mudaedl, mudaetop, mudaewl } = require('../functions/mudae')

module.exports = {
    data: {
        name: 'Mudae Help',
        type: 3
    },
    async execute(interaction) {

        const message = interaction.options._hoistedOptions[0].message
        const type = message.embeds[0]?.data.author?.name?.toLowerCase().split(' ')
        if (!type) return
        var args = String(message.embeds[0].data.description)

        if (type.includes('disablelist')) {
            var separator = args.split('\n\n')
            separator.shift()
            var args = String(separator)
        }

        if (type.includes('top')) var args = args.replace('\n', '')
        var response = getArgs(args.split(' '), true)
        let res = []


        if (type.includes('disablelist')) {
            res += mudaedl(response[1])
        }

        if (type.includes('top')) {
            res += mudaetop(response[1])
        }

        if (type.includes('wishlist')) {
            res += mudaewl(response[1])
        }

        if (res && typeof res == 'string') {
            await interaction.reply({ content: res })
        } else {
            await interaction.reply({ content: 'Lista Inválida', ephemeral: true })
        }
    }
}