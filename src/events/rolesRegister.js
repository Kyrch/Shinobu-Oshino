const { EmbedBuilder } = require("discord.js")
const { color, footerText, footerIcon } = require('../utils/embed.json')

module.exports = {
    async createEvent(interaction) {
        const { user, guild, member, customId } = interaction
        if (!interaction.isButton()) return

        const avatarVerify = user.avatarURL({
            dynamic: true,
            format: "png",
            size: 1024
        });

        if (avatarVerify === null) {
            var avatar = "https'://i.imgur.com/JdLLM92.png"
        } else {
            var avatar = avatarVerify
        }

        if (interaction.customId == 'corpersonalizada') {
            await interaction.reply({
                content: "Quer uma cor personalizada? Dê uma olhada em <#852658210938945566>.",
                ephemeral: true
            })
            return
        }

        if (interaction.customId == 'faqcolor') {
            var descriptionFaq = descriptionCor
        }

        if (interaction.customId == 'faqjogos') {
            var descriptionFaq = descriptionJogos
        }

        if (interaction.customId == 'faqnotifys') {
            var descriptionFaq = descriptionNotifys
        }

        if (interaction.customId == 'faqspoiler') {
            var descriptionFaq = descriptionSpoiler
        }

        if (interaction.customId == 'faqindicacoes') {
            var descriptionFaq = descriptionIndica
        }

        if (descriptionFaq) {
            let embed = new EmbedBuilder()
                .setColor(color)
                .setAuthor({ name: `${user.username}#${user.discriminator}`, iconURL: `${avatar}` })
                .setDescription(`${descriptionFaq}`)
                .setTimestamp()
                .setFooter({ text: footerText, iconURL: footerIcon })

            await interaction.reply({
                embeds: [embed],
                ephemeral: true
            })
            return
        }

        if (customId == 'faqanimes1' || customId == 'faqanimes2' || customId == 'faqanimes3') {
            await interaction.reply({
                content: `Dúvidas? Pergunte a <@&775060539885092914>.`,
                ephemeral: true
            })
            return
        }

        const idrole = require('../utils/roles.json')[customId]
        const role = guild.roles.cache.find(role => role.id === idrole)

        if (idrole && role) {

            if (member._roles.includes(idrole)) {
                member.roles.remove(role)
                var ae = 'removido'
            } else {
                member.roles.add(role)
                var ae = 'adicionado'
            }

            await interaction.reply({
                content: `Cargo <@&${idrole}> foi ${ae}.`,
                ephemeral: true
            })
        }
    }
}

var descriptionCor = `Clique novamente para remover

<@&775076510859264101> - Amarelo
<@&775077167871819794> - Azul Claro
<@&775077357241237574> - Azul Escuro
<@&775075901373022238> - Branco
<@&775076060823158835> - Cinza
<@&775076382266753044> - Laranja
<@&935678500357152838> - Lilás
<@&775077941020852256> - Preto
<@&775077735005552692> - Rosa
<@&775077471795281952> - Roxo
<@&775076656402137111> - Verde Claro
<@&775076894340546600> - Verde Escuro
<@&775076221166944266> - Vermelho
<@&944745767694917692> - Vinho`

var descriptionJogos = `Clique novamente para remover
            
<@&911368918017376256>
<@&929153343652245575>
<@&911367101242032148>
<@&935688116470185984>
<@&966955858783248414>
<@&935684761471578202>
<@&928788972556136458>
<@&935682720422588497>
<@&796220365881344010>
<@&966956871791562782>
<@&966957070282805268>
<@&966955852709908480>
<@&911368416814833735>
<@&911366797305978890>
<@&911367280745644052>`

var descriptionNotifys = `Clique novamente para remover

💛 - <@&935689589748817920> Receba notificações de avisos importantes e atualizações do servidor.

💙 - <@&935688104268951573> Receba notificações dos nossos eventos e de todos os seus detalhes.

🤍 - <@&928784860217237514> Receba notificações de indicações de animes, mangás, jogos e filmes.

💚 - <@&929184618417102860> Receba notificações do atual evento ocorrendo no servidor.

💖 - <@&935688828558118952> Receba notificações de atualizações do mudae no nosso servidor.

🧡 - <@&935689211519053865> Receba notificações quando fizermos novos sorteios.

💜 - <@&935706617473822801> Receba notificações de jogos grátis.`

var descriptionSpoiler = `<#775150175114756106> - Canal livre dedicado a qualquer tipo de spoiler.

**• Posso postar spoilers em outros canais?**
Sim, desde que use a tag de spoiler fornecida pelo próprio discord. Para texto, use "\`||spoiler||\`".`

var descriptionIndica = `<#852931131824930816> - Receba indicações de animes, mangás, novels, filmes, séries, etc.

**• Como sou notificado?**
Pegue o cargo <@&928784860217237514> em <#854065444812881960>.

**• Posso fazer uma indicação?**
Sim, analise os exemplos e mande para alguém da <@&775060539885092914>.

**• Qual o período entre as indicações?**
No mínimo 3 dias.`