const axios = require('axios');

const getLinkAnimeThemes = async (id) => {
    let url = `https://beta.animethemes.moe/api/anime?filter[has]=resources&filter[site]=AniList&filter[external_id]=${id}&include=animethemes.animethemeentries.videos`
    let response = await axios.get(url)
    
    if (response.status != 200) return null

    let links = []
    response?.data?.anime[0]?.animethemes?.forEach((item) => {
        links.push(item?.animethemeentries[0]?.videos[0]?.link)
    })

    return links
}

module.exports = {
    getLinkAnimeThemes
}