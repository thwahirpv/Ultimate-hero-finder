const imageDiv = document.getElementById('imageDiv')
const nameDiv = document.getElementById('nameDiv')
const randomHeroBtn = document.getElementById('randomHeroBtn') 
const heroInfo = document.getElementById('heroInfo')
const inputBtn = document.getElementById('inputBtn')
const searchHero = document.getElementById('searchHero')
const BASE_URL = 'https://superheroapi.com/api.php/132038549744357/'



const makeSuperHero = (id) => {
    fetch(`${BASE_URL}${id}`)
    .then(Response => Response.json())
    .then(json => {
        const randomStats = getHeroStats(json)
        const heroName = `<h2>${json.name}</h2>`
        imageDiv.innerHTML = `<img src='${json.image.url}' height='300px' width='300px'/>`
        heroInfo.innerHTML = `${heroName}${randomStats}`
        // nameDiv.innerHTML = ``
        console.log(heroName)
        
        // console.log(json.name)
    })
}


// search hero function 
function searchSuperHero(name) {
    fetch(`${BASE_URL}search/${name}`)
    .then(Response => Response.json())
    .then(json => {
        const hero = json.results[0]
        const statss = getHeroStats(hero)
        const heroName = `<h2>${hero.name}</h2>`
        imageDiv.innerHTML = `<img src='${hero.image.url}' height='300px' width='300px'/>`
        heroInfo.innerHTML = `${heroName}${statss}`
       

    })
}

function getHeroStats(carector) {
    const stats = Object.keys(carector.powerstats).map(stat =>{
        return `<p>${statsToEmogi[stat]} ${stat.toUpperCase()} : ${carector.powerstats[stat]}</p>`
        // console.log(stat)
    })
    return stats.join('')
}


// this is emoji to powerstats converting center

    const statsToEmogi = {
        intelligence : '🧠',
        strength : '💪',
        speed : '⚡',
        durability : '🏋️',
        power : '📶',
        combat : '⚔️'
    }


function randomId() {
    const randomNumber = Math.floor(Math.random() * 731) + 1
    return randomNumber
}


randomHeroBtn.onclick = () => makeSuperHero(randomId())
inputBtn.onclick = () => searchSuperHero(searchHero.value)

