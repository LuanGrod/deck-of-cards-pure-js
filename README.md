# Blackjack usando API DeckOfCards
[![status](https://img.shields.io/badge/status-completo-green)](https://github.com/LuanGrod/)
[![licence](https://img.shields.io/badge/licença-MIT-red)](https://github.com/LuanGrod/Projeto_Integrado1/blob/main/LICENSE)

# Sobre o projeto
Esse repositório foi feito com o objetivo de aprender mais sobre a utilização de APIs, sua consulta e manipulação de objetos JSON. <br>

Foram utilizados conceitos como a criação de métodos assíncronos, instanciação de objetos e manipulação do DOM.

[O jogo](https://luangrod-blackjack.netlify.app)

# Tratando a response da API
Ao realizar a requisição de uma carta via URL usando o método GET é retornado um objeto JSON que possui essa estrutura

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
