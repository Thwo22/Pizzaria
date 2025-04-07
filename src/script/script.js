const cardapioPizzas= document.getElementById("pizzas");
const cardapioRefris= document.getElementById("refris");
const cardapioPorcoes= document.getElementById("porcoes");

const botaoPizza= document.getElementById("btn-pizza");
const botaoRefri= document.getElementById("btn-refri");
const botaoPorcoes= document.getElementById("btn-porcoes");

botaoPizza.addEventListener(`click`, () => {
    cardapioRefris.style.opacity = "0";
    cardapioPorcoes.style.opacity = "0";
    cardapioPizzas.style.opacity = "1"
});

botaoRefri.addEventListener(`click`, () => {
    cardapioPizzas.style.opacity = "0";
    cardapioPorcoes.style.opacity = "0";
    cardapioRefris.style.opacity = "1"
});

botaoPorcoes.addEventListener(`click`, () => {
    cardapioPizzas.style.opacity = "0";
    cardapioRefris.style.opacity = "0";
    cardapioPorcoes.style.opacity = "1"
});

