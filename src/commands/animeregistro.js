const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require("discord.js");
const { getEmojiCode } = require('../functions/rest');
const { color } = require('../utils/embed.json');
const { users } = require('../utils/config.json');

module.exports = {
    name: 'animeregistro',
    description: 'animeregistro',
    execute(client, message, args) {

        const { member, channel } = message

        if (!users.includes(member.id)) return

        if (args[0] == '1') {

            let row1 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('boku-no-hero')
                        .setEmoji(getEmojiCode('🦸'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('boku-no-pico')
                        .setEmoji(getEmojiCode('🍨'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('chainsaw-man')
                        .setEmoji(getEmojiCode('🪚'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('youjitsu')
                        .setEmoji(getEmojiCode('📚'))
                        .setStyle(ButtonStyle.Secondary),
                );

            let row2 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('code-geass')
                        .setEmoji(getEmojiCode('♟️'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('cowboy-bebop')
                        .setEmoji(getEmojiCode('🚀'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('death-note')
                        .setEmoji(getEmojiCode('📓'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('detective-conan')
                        .setEmoji(getEmojiCode('🕵️‍♂️'))
                        .setStyle(ButtonStyle.Secondary),
                );

            let row3 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('dragon-ball')
                        .setEmoji(getEmojiCode('🌀'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('evangelion')
                        .setEmoji(getEmojiCode('👾'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('fate')
                        .setEmoji(getEmojiCode('<:tohsakacool:775217629580754984>'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('fruits-basket')
                        .setEmoji(getEmojiCode('🧺'))
                        .setStyle(ButtonStyle.Secondary),
                );

            let row4 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('fullmetal')
                        .setEmoji(getEmojiCode('🧪'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('gintama')
                        .setEmoji(getEmojiCode('👘'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('grand-blue')
                        .setEmoji(getEmojiCode('🏊‍♂️'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('faqanimes1')
                        .setEmoji(getEmojiCode('❔'))
                        .setStyle(ButtonStyle.Primary),
                );

            let embed = new EmbedBuilder()
                .setColor(color)
                .setDescription(`${descriptionMsg1}`)

            channel.send({
                embeds: [embed],
                components: [row1, row2, row3, row4]
            })
        }

        if (args[0] == '2') {

            let row1 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('gurren-lagann')
                        .setEmoji(getEmojiCode('🤖'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('haikyuu')
                        .setEmoji(getEmojiCode('🏐'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('houseki-no-kuni')
                        .setEmoji(getEmojiCode('💎'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('hunter-x-hunter')
                        .setEmoji(getEmojiCode('⛓️'))
                        .setStyle(ButtonStyle.Secondary),
                );

            let row2 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('jojo')
                        .setEmoji(getEmojiCode('💪'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('jujutsu-kaisen')
                        .setEmoji(getEmojiCode('👁️'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('kaguya-sama')
                        .setEmoji(getEmojiCode('💖'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('kimetsu-no-yaiba')
                        .setEmoji(getEmojiCode('🌊'))
                        .setStyle(ButtonStyle.Secondary),
                );

            let row3 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('k-on')
                        .setEmoji(getEmojiCode('🎸'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('konosuba')
                        .setEmoji(getEmojiCode('🌟'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('love-live')
                        .setEmoji(getEmojiCode('🎤'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('madoka')
                        .setEmoji(getEmojiCode('👧'))
                        .setStyle(ButtonStyle.Secondary),
                );

            let row4 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('mob')
                        .setEmoji(getEmojiCode('😐'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('monogatari')
                        .setEmoji(getEmojiCode('✂️'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('monster')
                        .setEmoji(getEmojiCode('<:gun2:775211091822903296>'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('faqanimes2')
                        .setEmoji(getEmojiCode('❔'))
                        .setStyle(ButtonStyle.Primary),
                );

            let embed = new EmbedBuilder()
                .setColor(color)
                .setDescription(`${descriptionMsg2}`)


            channel.send({
                embeds: [embed],
                components: [row1, row2, row3, row4]
            })
        }

        if (args[0] == '3') {

            let row1 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('mushoku-tensei')
                        .setEmoji(getEmojiCode('🔮'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('naruto')
                        .setEmoji(getEmojiCode('🍃'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('one-piece')
                        .setEmoji(getEmojiCode('🏴‍☠️'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('oregairu')
                        .setEmoji(getEmojiCode('💜'))
                        .setStyle(ButtonStyle.Secondary),
                );

            let row2 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('one-punch-man')
                        .setEmoji(getEmojiCode('👊'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('oshi-no-ko')
                        .setEmoji(getEmojiCode('🎭'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('re-zero')
                        .setEmoji(getEmojiCode('☠️'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('sangatsu-no-lion')
                        .setEmoji(getEmojiCode('🦁'))
                        .setStyle(ButtonStyle.Secondary),
                );

            let row3 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('shingeki-no-kyojin')
                        .setEmoji(getEmojiCode('🛡️'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('spy-x-family')
                        .setEmoji(getEmojiCode('🕴🏻'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('steins-gate')
                        .setEmoji(getEmojiCode('⏱️'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('tokyo-ghoul')
                        .setEmoji(getEmojiCode('<:kaneki:775469143343366164>'))
                        .setStyle(ButtonStyle.Secondary),
                );

            let row4 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('tower-of-god')
                        .setEmoji(getEmojiCode('🗼'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('vinland-saga')
                        .setEmoji(getEmojiCode('🚤'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('neverland')
                        .setEmoji(getEmojiCode('🧒'))
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('faqanimes3')
                        .setEmoji(getEmojiCode('❔'))
                        .setStyle(ButtonStyle.Primary),
                );

            let embed = new EmbedBuilder()
            .setColor(color)
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