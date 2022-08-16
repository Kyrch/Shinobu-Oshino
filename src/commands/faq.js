const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const ee = require('../../json/embed.json');
const { users } = require('../../json/config.json');

module.exports = {
    name: 'faq',
    description: 'faq',
    execute(client, message, args) {

        const {
            member,
            channel
        } = message

        if (!users.includes(member.id)) return

        let embed = new MessageEmbed()
            .setColor(`${ee.color}`)
            .setDescription(`${description}`)

        let row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('faqspoiler')
                    .setEmoji('🚫')
                    .setLabel('Spoilers')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('faqindicacoes')
                    .setEmoji('💭')
                    .setLabel('Indicações')
                    .setStyle('SECONDARY')
            )


        channel.send({
            embeds: [embed],
            components: [row]
        })
    }
}

var description = `<:kannapeer:775355891326517249>  __**COMO FUNCIONA O SERVIDOR:**__

**• Registros:** Preencha seu cadastro aqui no servidor clicando nos botões abaixo das mensagens. Canais de desabafo e genshin necessitam de cargos.

**• Comandos:** Canal aberto para o spam de comandos dos bots do servidor, chame a <@&775060539885092914> em caso de dúvidas.

**• Receitinhas:** Compartilhe suas receitas conosco abertamente.

**• Sugestões:** Sugira mudanças ou adições no servidor para nós analisarmos.

**• Jogos-Grátis:** Seja notificado sobre promoções de 100% de desconto fazendo o <#854065444812881960>.`