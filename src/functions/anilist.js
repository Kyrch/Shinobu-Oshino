const api = require('../anilist/api');
const query = require('./queryAnilist');

const searchAPI = async function searchAPI(searchArg, type) {
    const response = await api(query[type], {
        search: searchArg
    });

    if (response.error) {
        return response;
    }

    switch (type) {
        case 'character':
            return response.Character;
        case 'staff':
            return response.Staff;
        case 'user':
            return response.User
    }
    return null
}

const searchMedia = async function searchMedia(searchArg, typeMedia) {
    const response = await api(query.media, {
        search: searchArg,
        type: typeMedia,
        page: 1,
        perPage: 5,
    });

    return response.Page.media
}

module.exports = {
    searchAPI,
    searchMedia
}