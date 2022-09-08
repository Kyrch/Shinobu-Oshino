const { ButtonBuilder, ActionRowBuilder, EmbedBuilder, ButtonStyle } = require("discord.js");
const { color } = require('../utils/embed.json');
const { users } = require('../utils/config.json');

module.exports = {
    name: 'boosterregistro',
    description: 'booster',
    execute(client, message) {

        const { member, channel } = message

        if (!users.includes(member.id)) return

        let embed = new EmbedBuilder()
            .setColor(color)
            .setDescription(`${description}`)


        let row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setEmoji('🚀')
                    .setLabel('Seja Booster')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://support.discord.com/hc/pt-br/articles/360028038352-Server-Boosting-')
            )


        channel.send({
            embeds: [embed],
            components: [row]
        })
    }
}

var description = `🚀 **SEJA UM BOOSTER**

Uma ótima maneira de ajudar o nosso servidor é sendo um <@&775195841249935370>. Por isso nós também daremos ótimos benefícios para quem der boosts aqui no server.

<:shinocool:775219104369999890> __**Benefícios dos Boosters:**__

**• Vantagens de nível:** Terão todas as vantagens de nível do servidor (alterar o próprio apelido, mandar imagens no <#775085350950666281> e criar sua própria call).

**• Cores exclusivas:** Poderão acessar novas cores em <#852652240706863104>.

**• Pagamento Mudae:** Receberão um pagamento de 500 kakeras por semana (1° boost) ou 1000 kakeras por semana (2° boost).

**• Rolls Mudae:** Terão acesso ao <#852652866196078592>, um canal para dar rolls com menos chances de roubo.

**• Mudae 2:** Terão acesso ao <#939432763017273414>, um canal para a segunda instância do Mudae.

**• Cargo novo:** Poderão solicitar um cargo de enfeite para si mesmo.

**• Emojis:** Poderão indicar 1 emoji normal e 1 animado.`