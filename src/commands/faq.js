const { ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder } = require("discord.js");
const { color } = require('../utils/embed.json');
const { users } = require('../utils/config.json');

module.exports = {
    name: 'faq',
    description: 'faq',
    async execute(client, message) {

        const { member, channel } = message

        if (!users.includes(member.id)) return

        let embed = new EmbedBuilder()
            .setColor(color)
            .setDescription(`${description}`)

        let row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('faqspoiler')
                    .setEmoji(getEmojiCode("🚫"))
                    .setLabel('Spoilers')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('button-modal-indica')
                    .setEmoji(getEmojiCode("💭"))
                    .setLabel('Indicar')
                    .setStyle(ButtonStyle.Secondary))


        channel.send({
            embeds: [embed],
            components: [row]
        })
    }
}

function getEmojiCode(emoji) {
    return String.fromCodePoint("0x" + emoji.codePointAt(0).toString(16))
}

var description = `<:kannapeer:775355891326517249>  __**COMO FUNCIONA O SERVIDOR:**__

**• Registros:** Preencha seu cadastro aqui no servidor clicando nos botões abaixo das mensagens. Canais de desabafo e genshin necessitam de cargos.

**• Comandos:** Canal aberto para o spam de comandos dos bots do servidor, chame a <@&775060539885092914> em caso de dúvidas.

**• Receitinhas:** Compartilhe suas receitas conosco abertamente.

**• Sugestões:** Sugira mudanças ou adições no servidor para nós analisarmos.

**• Jogos-Grátis:** Seja notificado sobre promoções de 100% de desconto fazendo o <#854065444812881960>.

**• Indicações:** Clique no botão abaixo para fazer uma indicação de mídia.`