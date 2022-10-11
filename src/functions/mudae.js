const RegExpEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g

const getArgs = (args, contextmenu) => {
    const choice = args[0]
    contextmenu == false ? args.shift() : undefined
    var animes = args.slice(0).join(' ').replace(RegExpEmoji, '')

    return response = [choice, animes]
}

const mudaedl = (animes) => {
    let res = []
    var animesSpace = animes.replace(/\n/g, '')
    var corte = animesSpace.split(/[{)(}]/)
    let i = 3
    let k = 4
    var valor = false

    if (animes.split('(')[0] !== undefined) {
        res += animesSpace.split('(', 1)[0]
    }

    if (animes.split(')')[1] !== undefined) {
        res += "$" + corte[2]
    }

    while (animes.split('(')[i] !== undefined && valor == false) {

        if (animes.split('(')[i] !== undefined) {
            res += "$" + corte[k]
            k += 2
        }

        if (animes.split(')')[i] !== undefined) {
            res += "$" + corte[k]
            k += 2
            i += 2
        }

        valor = k - 2 == 90 ? true : false
    }
    return res
}

const mudaemm = (list) => {
    let res = []
    var list = Array.from(list)
    list.forEach((character) => {
        res += character.replace('|', '').replace(RegExpEmoji, '').replace('\n', '$')
    })
    return res
}

const mudaetop = (animes) => {
    let res = []
    let i = 3
    var teste = false

    if (animes.split(' - ')[1] !== undefined) {
        res += animes.split(' - ')[1].replace(/\*/g, "").trimEnd()
    } else return

    while (animes.split(' - ')[i] !== undefined && teste == false) {

        if (animes.split(' - ')[i] !== undefined) {
            res += "$" + animes.split(' - ')[i].replace(/\*/g, "").trimEnd()
            i += 2
        }

        teste = i - 2 == 75 ? true : false
    }
    return res
}

const mudaewl = (characters) => {
    let res = []
    var characters = Array.from(characters)
    characters.forEach((character) => {
        res += character.replace("\n", "$").replace(/_/gi, " ").replace(/\*/g, "")
    })
    return res
}

const mudaefav = (favourites) => {
    let string = ''
    favourites.forEach((fav) => {
        string += `${fav.name.first || ''} ${fav.name.middle || ''} ${fav.name.last || ''}` + '$'
    })
    string = string.replace(/( )+/g, " ").slice(0, -1)
    return string
}

module.exports = {
    getArgs,
    mudaedl,
    mudaemm,
    mudaetop,
    mudaewl,
    mudaefav
}