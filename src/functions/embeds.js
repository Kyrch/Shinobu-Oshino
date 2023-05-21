const { getLinkAnimeThemes } = require('../anilist/animethemes');
const { EmbedBuilder } = require("discord.js");
const { color } = require('../utils/embed.json');

const embedAnimeThemes = async (id) => {
    const animeThemes = await getLinkAnimeThemes(id);

    let data = "";

    for (let aniThem of animeThemes.animethemes) {
        for (let entry of aniThem.entries) {
            data += `${aniThem.type}${aniThem.sequence == null ? 1 : aniThem.sequence} V${entry.version == null ? 1 : entry.version} => `;

            for (let video of entry.videos) {
                data += `[${video.resolution}p/${video.source}](${video.link}) `;
            }
            data += "\n";
        }
        data += "\n";
    }

    let embed = new EmbedBuilder()
        .setColor(color)
        .setTitle("AnimeThemes")
        .setDescription(data)

    return embed;
}

module.exports = {
    embedAnimeThemes
}