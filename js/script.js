
const lista_anime = ['HunterXHunter','BlueLock','OnePiece', 'GodOfTowes', 'FireForce', 'AssassinationClassrom']

const listContain = document.querySelector('.list-unstiled')

let i = 0

while(i < lista_anime.length){
    
    console.log(lista_anime[i])  // mi stampa ogni singolo elemento della lista

    let listItem = document.createElement('li')
    listItem.innerText = item
    listContain.append(listItem)

    

}

