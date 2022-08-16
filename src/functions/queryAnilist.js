let character = `
query ($search: String) {
    Character(search: $search) {
      id
      siteUrl
      name {
        first
        last
      }
      image {
        large
      }
      description(asHtml: false)
      gender
      age
      favourites
    }
  }
  
`

let media = `
query ($search: String, $type: MediaType, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(search: $search, type: $type, isAdult: false) {
        id
        siteUrl
        format
        title {
          romaji
          english
        }
        coverImage {
          large
        }
        favourites
        genres
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        season
        episodes
        chapters
        volumes
        studios {
          edges {
            id
          }
        }
        status(version: 2)
        description(asHtml: false)
        meanScore
      }
    }
  }
`

let staff = `
query ($search: String) {
    Staff(search: $search) {
        id
        siteUrl
        name {
            first
            last
        }
        image {
            large
        }
        description(asHtml: false)
    }
}
`

let user = `
query ($search: String) {
    User(name: $search) {
      id
      name
      siteUrl
      avatar {
        large
      }
      about(asHtml: false)
      statistics {
        anime {
          minutesWatched
        }
        manga {
          chaptersRead
        }
      }
    }
  }  
`

module.exports = {
    character: character,
    media: media,
    staff: staff,
    user: user
}