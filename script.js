function Deck(deckId, remaining) {
    this.deckId = deckId
    this.remaining = remaining
}

let deck = new Deck(0, 52)

// receive API data by Get method
async function getDeck() {
    // Reset deck state
    reset()

    //fetch to get API's data
    const URL = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    try {
        const responseGet = await fetch(URL)
        if (responseGet.status >= 200 && responseGet.status < 300) {
            //convert data to json format
            responseJson = await responseGet.json()

            deck.deckId = responseJson.deck_id
            document.getElementById("IdSection").innerHTML = "Deck ID: " + responseJson.deck_id

            // choose the number of cards that will be draw when initialized
            // // aqui da pra criar uma função que sorteia um determinado numero de cartas de acordo com
            // // o parametro, para deixar mais genérico pq o código está duplicado
            deck.remaining = deck.remaining - 2
            document.getElementById("RemainingSection").innerHTML = "Remaining: " + deck.remaining

            getCartas(2)
        } else {
            throw new Error(responseGet.status)
        }
    } catch (err) {
        document.getElementById("IdSection").innerHTML = err.message;
    }
}

function reset() {
    deck = new Deck(0, 52)
    document.getElementById("IdSection").innerHTML = ""
    document.getElementById("RemainingSection").innerHTML = ""
    document.getElementById("lista").innerHTML = ""
}

async function getCartas(qtd) {
    const URL = "https://www.deckofcardsapi.com/api/deck/" + deck.deckId + "/draw/?count=" + qtd.toString()
    try {
        const responseGet = await fetch(URL)
        if (responseGet.status >= 200 && responseGet.status < 300) {
            responseJson = await responseGet.json()

            for (let i = 0; i < qtd; i++) {
                var img = document.createElement("img")
                img.height = 200
                img.style.padding = "0 10px"

                let url = responseJson.cards[i].image
                img.src = url
                document.getElementById("lista").appendChild(img)
            }
        } else {
            throw new Error(responseGet.status)
        }
    } catch (err) {
        document.getElementById("IdSection").innerHTML = err.message;
    }
}

async function drawOne() {
    try {
        const responseGet = await fetch("https://www.deckofcardsapi.com/api/deck/" + deck.deckId + "/draw/?count=1")
        if (responseGet.status >= 200 && responseGet.status < 300) {
            responseJson = await responseGet.json()

            var img = document.createElement("img")
            img.height = 200
            img.style.padding = "0 10px"

            let url = responseJson.cards[0].image
            img.src = url

            deck.remaining--
            document.getElementById("RemainingSection").innerHTML = "Remaining: " + deck.remaining

            document.getElementById("lista").appendChild(img)
        } else {
            throw new Error(responseGet.status)
        }
    } catch (err) {
        document.getElementById("IdSection").innerHTML = err.message;
    }
}
