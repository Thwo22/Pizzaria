const cardapioPizzas= document.getElementById("pizzas");
const cardapioRefris= document.getElementById("refris");
const cardapioPorcoes= document.getElementById("porcoes");

const botaoPizza= document.getElementById("btn-pizza");
const botaoRefri= document.getElementById("btn-refri");
const botaoPorcoes= document.getElementById("btn-porcoes");

const secaoContato= document.getElementById("contato");
const botaoCardapio= document.getElementById("btn-cardapio");
const secaoCardapio= document.getElementById("cardapio");

botaoPizza.addEventListener(`click`, () => {
    cardapioRefris.style.opacity = "0";
    cardapioPorcoes.style.opacity = "0";
    cardapioPizzas.style.opacity = "1";
    cardapioPizzas.style.pointerEvents = "auto";
    cardapioPizzas.style.zIndex = "2"
});

botaoRefri.addEventListener(`click`, () => {
    cardapioPizzas.style.opacity = "0";
    cardapioPorcoes.style.opacity = "0";
    cardapioRefris.style.opacity = "1"
    cardapioRefris.style.pointerEvents = "auto";
    cardapioRefris.style.zIndex = "2"
});

botaoPorcoes.addEventListener(`click`, () => {
    cardapioPizzas.style.opacity = "0";
    cardapioRefris.style.opacity = "0";
    cardapioPorcoes.style.opacity = "1"
    cardapioPorcoes.style.pointerEvents = "auto";
    cardapioPorcoes.style.zIndex = "2"
});

botaoCardapio.addEventListener(`click`, () => {
    secaoCardapio.scrollIntoView({behavior: `smooth`});
});

secaoContato.addEventListener(`click`, () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: `smooth`
    });
});


