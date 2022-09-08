const { getArgs, mudaedl, mudaemm, mudaetop, mudaewl } = require('../functions/mudae');

module.exports = {
    name: 'mudaehelp',
    description: 'auxilia no mudae',
    aliases: ['mh'],
    execute(client, message, args) {

        const { channel } = message

        var response = getArgs(args, false)
        var choice = response[0]

        if (choice == 'dl') {
            res = mudaedl(response[1])
        }

        if (choice == 'mm') {
            res = mudaemm(response[1])
        }

        if (choice == 'top') {
            res = mudaetop(response[1])
        }

        if (choice == 'wl') {
            res = mudaewl(response[1])
        }

        if (!res || typeof res != 'string') return
        channel.send({ content: res })
    }
}