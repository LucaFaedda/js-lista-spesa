
const lista_anime = ['HunterXHunter','BlueLock','OnePiece', 'GodOfTowes', 'FireForce', 'AssassinationClassrom']

const listContain = document.querySelector('.list-unstiled')

let i = 0
let listItem = ''


do{
    
    console.log(lista_anime[i])  // mi stampa ogni singolo elemento della lista

    let listItem = lista_anime[i]
    listItem = `<li class = "lista" >${listItem}</li>`
    listContain.innerHTML += listItem
    i++ // Mi serve per incrementare ogni volta il valore sennò va in loop
    
}while(i < lista_anime.length  )
