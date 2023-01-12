const axios = require('axios');

const getLinkAnimeThemes = async (id) => {
    let url = `https://api.animethemes.moe/anime?filter[has]=resources&filter[site]=AniList&filter[external_id]=${id}&include=animethemes.animethemeentries.videos`
    let response = await axios.get(url)
    let anime = response.data.anime[0]

    if (response.status != 200) return null

    let info = {}
    info["name"] = anime.name
    info["animethemes"] = []
    for (let anthem of anime.animethemes) {
        let obj = {
            type: anthem.type,
            sequence: anthem.sequence,
        }
        for (let entry of anthem.animethemeentries) {
            add = {
                version: entry.version,
                episodes: entry.episodes
            }
            for (let video of entry.videos) {
                addVideo = {
                    filename: video.filename,
                    resolution: video.resolution,
                    source: video.source,
                    link: video.link
                }

                if (Array.isArray(add["videos"])) {
                    add["videos"].push(addVideo)
                } else add["videos"] = [addVideo]
            }

            if (Array.isArray(obj["entries"])) {
                obj["entries"].push(add)
            } else obj["entries"] = [add]
        }
        info["animethemes"].push(obj)
    }


    return info
}

module.exports = {
    getLinkAnimeThemes
}