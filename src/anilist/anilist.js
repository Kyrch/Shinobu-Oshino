const api = require('./api');
const query = require('./queryAnilist');

const searchAPI = async (searchArg, type) => {
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

const searchMedia = async (searchArg, typeMedia) => {
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