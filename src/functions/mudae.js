const RegExpEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g

const getArgs = (args, contextmenu) => {
    const choice = args[0]
    if (contextmenu == false) args.shift()
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

        if (k - 2 == 90) var valor = true
    }
    return res
}

const mudaemm = (animes) => {
    let res = []
    var animes = Array.from(animes)
    animes.forEach((item) => {
        res += item.replace('|', '').replace(RegExpEmoji, '').replace('\n', '$')
    })
    return res
}

const mudaetop = (animes) => {
    let res = []
    let i = 3
    var teste = false

    if (animes.split(' - ')[1] !== undefined) {
        res += animes.split(' - ')[1]
    } else return

    while (animes.split(' - ')[i] !== undefined && teste == false) {

        if (animes.split(' - ')[i] !== undefined) {
            res += "$" + animes.split(' - ')[i]
            i += 2
        }

        if (i - 2 == 75) var teste = true
    }
    return res
}

const mudaewl = (animes) => {
    let res = []
    var animes = Array.from(animes)
    animes.forEach((item) => {
        res += item.replace("\n", "$").replace(/_/gi, " ")
    })
    return res
}

const mudaefav = (favourites) => {
    let string = ''
    favourites.forEach((fav) => {
        string += `${fav.name.first || ''} ${fav.name.middle || ''} ${fav.name.last || ''}` + '$'
    })
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