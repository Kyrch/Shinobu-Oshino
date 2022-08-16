const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const ee = require('../../json/embed.json');
const { users } = require('../../json/config.json');

module.exports = {
    name: 'animeregistro',
    description: 'animeregistro',
    execute(client, message, args) {

        const {
            member,
            channel
        } = message

        if (!users.includes(member.id)) return

        if (args[0] == '1') {

            let row1 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('boku-no-hero')
                        .setEmoji('🦸')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('boku-no-pico')
                        .setEmoji('🍨')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('chainsaw-man')
                        .setEmoji('🪚')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('youjitsu')
                        .setEmoji('📚')
                        .setStyle('SECONDARY'),
                );

            let row2 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('code-geass')
                        .setEmoji('♟️')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('cowboy-bebop')
                        .setEmoji('🚀')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('death-note')
                        .setEmoji('📓')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('detective-conan')
                        .setEmoji('🕵️‍♂️')
                        .setStyle('SECONDARY'),
                );

            let row3 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('dragon-ball')
                        .setEmoji('🌀')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('evangelion')
                        .setEmoji('👾')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('fate')
                        .setEmoji('<:tohsakacool:775217629580754984>')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('fruits-basket')
                        .setEmoji('🧺')
                        .setStyle('SECONDARY'),
                );

            let row4 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('fullmetal')
                        .setEmoji('🧪')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('gintama')
                        .setEmoji('👘')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('grand-blue')
                        .setEmoji('🏊‍♂️')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('faqanimes1')
                        .setEmoji('❔')
                        .setStyle('PRIMARY'),
                );

            let embed = new MessageEmbed()
                .setColor(`${ee.color}`)
                .setDescription(`${descriptionMsg1}`)

            channel.send({
                embeds: [embed],
                components: [row1, row2, row3, row4]
            })
        }

        if (args[0] == '2') {

            let row1 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('gurren-lagann')
                        .setEmoji('🤖')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('haikyuu')
                        .setEmoji('🏐')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('houseki-no-kuni')
                        .setEmoji('💎')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('hunter-x-hunter')
                        .setEmoji('⛓️')
                        .setStyle('SECONDARY'),
                );

            let row2 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('jojo')
                        .setEmoji('💪')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('jujutsu-kaisen')
                        .setEmoji('👁️')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('kaguya-sama')
                        .setEmoji('💖')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('kimetsu-no-yaiba')
                        .setEmoji('🌊')
                        .setStyle('SECONDARY'),
                );

            let row3 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('k-on')
                        .setEmoji('🎸')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('konosuba')
                        .setEmoji('🌟')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('love-live')
                        .setEmoji('🎤')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('madoka')
                        .setEmoji('👧')
                        .setStyle('SECONDARY'),
                );

            let row4 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('mob')
                        .setEmoji('😐')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('monogatari')
                        .setEmoji('✂️')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('monster')
                        .setEmoji('<:gun2:775211091822903296>')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('faqanimes2')
                        .setEmoji('❔')
                        .setStyle('PRIMARY'),
                );

            let embed = new MessageEmbed()
                .setColor(`${ee.color}`)
                .setDescription(`${descriptionMsg2}`)


            channel.send({
                embeds: [embed],
                components: [row1, row2, row3, row4]
            })
        }

        if (args[0] == '3') {

            let row1 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('mushoku-tensei')
                        .setEmoji('🔮')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('naruto')
                        .setEmoji('🍃')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('one-piece')
                        .setEmoji('🏴‍☠️')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('oregairu')
                        .setEmoji('💜')
                        .setStyle('SECONDARY'),
                );

            let row2 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('one-punch-man')
                        .setEmoji('👊')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('oshi-no-ko')
                        .setEmoji('🎭')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('re-zero')
                        .setEmoji('☠️')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('sangatsu-no-lion')
                        .setEmoji('🦁')
                        .setStyle('SECONDARY'),
                );

            let row3 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('shingeki-no-kyojin')
                        .setEmoji('🛡️')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('spy-x-family')
                        .setEmoji('🕴🏻')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('steins-gate')
                        .setEmoji('⏱️')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('tokyo-ghoul')
                        .setEmoji('<:kaneki:775469143343366164>')
                        .setStyle('SECONDARY'),
                );

            let row4 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('tower-of-god')
                        .setEmoji('🗼')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('vinland-saga')
                        .setEmoji('🚤')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('neverland')
                        .setEmoji('🧒')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setCustomId('faqanimes3')
                        .setEmoji('❔')
                        .setStyle('PRIMARY'),
                );

            let embed = new MessageEmbed()
            .setColor(`${ee.color}`)
                .setDescription(`${descriptionMsg3}`)

            channel.send({
                embeds: [embed],
                components: [row1, row2, row3, row4]
            })
        }
    }
}

var descriptionMsg1 = `Escolha apenas **CINCO** obras.

🦸 - <@&935680337365835840>
🍨 - <@&775217377511079937>
🪚 - <@&854045089771814972>
📚 - <@&935687872395223080>
♟️ - <@&944972745786150942>
🚀 - <@&935689589551681546>
📓 - <@&935681269038198795>
🕵️‍♂️ - <@&854043360524632085>
🌀 - <@&935689232691888158>
👾 - <@&935681467026145281>
<:tohsakacool:775217629580754984> - <@&935682072222265367>
🧺 - <@&944972714383405076>
🧪 - <@&935682735387852931>
👘 - <@&944972718900674561>
🏊‍♂️ - <@&854045244617261106>`

var descriptionMsg2 = `🤖 - <@&854059660960595979>
🏐 - <@&935680610851254302>
💎 - <@&854045356521816085>
⛓️ - <@&854060244119978014>
💪 - <@&935682992658071602>
👁️ - <@&935684018748424212>
💖 - <@&935679463159635989>
🌊 - <@&854044870049529878>
🎸 - <@&935694014437531648>
🌟 - <@&854045453502644236>
🎤 - <@&935675251050827797>
👧 - <@&944972727427694673>
😐 - <@&935682051435286569>
✂️ - <@&854061607172309043>
<:gun2:775211091822903296> - <@&775222756589568000>`

var descriptionMsg3 = `🔮 - <@&935693810275606568>
🍃 - <@&775217075139641345>
🏴‍☠️ - <@&854062563776397323>
💜 - <@&854045550993997875>
👊 - <@&944972736252485732>
🎭 - <@&944972731605221386>
☠️ - <@&935680017529192480>
🦁 - <@&944972740715216906>
🛡️ - <@&935681983294615572>
🕴🏻 - <@&935676632126087308>
⏱️ - <@&935682692270420038>
<:kaneki:775469143343366164> - <@&944972722151239691>
🗼 - <@&944972749535846411>
🚤 - <@&935688538412957696>
🧒 - <@&775214227547750432>`