values = {
    "ACE": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "JACK": 10,
    "QUEEN": 10,
    "KING": 10
}

function Deck(deckId, remaining) {
    this.deckId = deckId
    this.remaining = remaining
}

function Hand(points) {
    this.points = points
}

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
            // document.getElementById("IdSection").innerHTML = "Deck ID: " + responseJson.deck_id

            // choose the number of cards that will be draw when initialized
            getCard(2)
        } else {
            throw new Error(responseGet.status)
        }
    } catch (err) {
        document.getElementById("IdSection").innerHTML = err.message;
    }
}

async function getCard(qtd) {
    const URL = "https://www.deckofcardsapi.com/api/deck/" + deck.deckId + "/draw/?count=" + qtd.toString()
    try {
        const responseGet = await fetch(URL)
        if (responseGet.status >= 200 && responseGet.status < 300) {
            responseJson = await responseGet.json()

            for (let i = 0; i < qtd; i++) {
                //print card image in window
                var img = document.createElement("img")
                img.height = 130
                img.style.padding = "0"

                let url = responseJson.cards[i].image
                img.src = url
                document.getElementById("lista").appendChild(img)

                //add card value to player's hand
                for (let j = 0; j < Object.keys(values).length; j++) {
                    if (responseJson.cards[i].value == Object.keys(values)[j]) {
                        hand.points += Object.values(values)[j]
                    }
                }
            }

            //print updates in the window
            deck.remaining = deck.remaining - qtd
            // document.getElementById("RemainingSection").innerHTML = "Remaining: " + deck.remaining
            document.getElementById("PlayerPoints").innerHTML = "Points: " + hand.points

            //verify player situation
            await verifyStatus(hand.points)
        } else {
            throw new Error(responseGet.status)
        }
    } catch (err) {
        document.getElementById("IdSection").innerHTML = err.message;
    }
}

async function verifyStatus(points) {
    let status = points > 21 ? "LOSE" : (points == 21 ? "WIN" : false)
    status ? alert(status) : ""
}

function reset() {
    deck = new Deck(0, 52)
    hand = new Hand(0)
    document.getElementById("IdSection").innerHTML = ""
    // document.getElementById("RemainingSection").innerHTML = ""
    document.getElementById("lista").innerHTML = ""
    document.getElementById("PlayerPoints").innerHTML = ""
}
