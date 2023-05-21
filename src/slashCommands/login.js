const { SlashCommandBuilder } = require("discord.js");
const mongodb = require('../functions/mongodb');
const User = mongodb.models.user;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('login')
        .setDescription('realiza login')
        .setDMPermission(true)
        .addSubcommand(sub => sub.setName('anilist').setDescription('login com anilist')
            .addStringOption(opt => opt.setName('username').setDescription('nome de usuário').setRequired(true)))
        .addSubcommand(sub => sub.setName('steam').setDescription('login com steam')
            .addStringOption(opt => opt.setName('username').setDescription('nome de usuário').setRequired(true))),

    async execute(interaction) {
        const { options, user } = interaction

        if (options._subcommand == 'anilist') {
            let username = options.get('username').value;

            let userUpdate = await User.findOneAndUpdate({ idDiscord: user.id }, { anilistName: username }) || new User({ idDiscord: user.id, anilistName: username });
            
        
            userUpdate.save().then(async () => {
                try { await interaction.reply({ content: "Login realizado.", ephemeral: true }); } catch (err) {}
            }).catch(async (err) => {
                try { await interaction.reply({ content: "Ocorreu algum erro", ephemeral: true }); } catch (err) {}
                console.error(err);
            })
        }   

        if (options._subcommand == 'steam') {
            let username = options.get('username').value ;

            let userUpdate = await User.findOneAndUpdate({ idDiscord: user.id }, { steamName: username }) || new User({ idDiscord: user.id, steamName: username });

            userUpdate.save().then(async () => {
                try { await interaction.reply({ content: "Login realizado.", ephemeral: true }); } catch (err) {}
            }).catch(async (err) => {
                try { await interaction.reply({ content: "Ocorreu algum erro", ephemeral: true }); } catch (err) {}
                console.error(err)
            })
        }
    }
}