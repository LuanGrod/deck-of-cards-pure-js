# Blackjack usando API DeckOfCards
[![status](https://img.shields.io/badge/status-completo-green)](https://github.com/LuanGrod/)
[![licence](https://img.shields.io/badge/licença-MIT-red)](https://github.com/LuanGrod/Projeto_Integrado1/blob/main/LICENSE)

# Sobre o projeto
Esse repositório foi feito com o objetivo de aprender mais sobre a utilização de APIs, sua consulta e manipulação de objetos JSON. <br>

Foram utilizados conceitos como a criação de métodos assíncronos, instanciação de objetos e manipulação do DOM.

[O jogo](https://luangrod-blackjack.netlify.app)

# Tratando a response da API
Ao realizar a requisição de um deck via URL usando o método GET é retornada uma promise, que precisa ser tratada para os casos de resolve e reject

~~~javascript
 const URL = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    try {
        const responseGet = await fetch(URL)
        if (responseGet.status >= 200 && responseGet.status < 300) {
            //convert data to json format
            responseJson = await responseGet.json()

            deck.deckId = responseJson.deck_id
            
            // choose the number of cards that will be draw when initialized
            getCard(2)
        } else {
            throw new Error(responseGet.status)
        }
    } catch (err) {
        document.getElementById("IdSection").innerHTML = err.message;
    }
~~~

Caso ocorra tudo certo na requisição e seja retornado um status de 200 - 299 a String retornada pela promise é convertida em um objeto JSON para ser manipulado mais facilmente

~~~json
{
   "code": "AS", 
   "image": "https://deckofcardsapi.com/static/img/AS.png",
   "images": {
       "svg": "https://deckofcardsapi.com/static/img/AS.svg", 
       "png": "https://deckofcardsapi.com/static/img/AS.png"
   }, 
   "value": "ACE", 
   "suit": "SPADES"
}
~~~

# Layout da aplicação
### Tela Principal
![Main](https://github.com/LuanGrod/deck-of-cards-pure-js/blob/main/example.JPG)

# Ferramentas e Tecnologias
### Front-end
- HTML
- CSS

### Back-end
- Javascript

### APIs
- Fetch
- [DeckOfCards](https://www.deckofcardsapi.com)

# Autores

Luan Guilherme Rodrigues - https://www.linkedin.com/in/luan-grod/
