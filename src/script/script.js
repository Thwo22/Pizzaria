const cardapioPizzas= document.getElementById("pizzas");
const cardapioRefris= document.getElementById("refris");
const cardapioPorcoes= document.getElementById("porcoes");

const botaoPizza= document.getElementById("btn-pizza");
const botaoRefri= document.getElementById("btn-refri");
const botaoPorcoes= document.getElementById("btn-porcoes");

const secaoContato= document.getElementById("contato");
const botaoCardapio= document.getElementById("btn-cardapio");
const secaoCardapio= document.getElementById("cardapio");

const caixas= document.querySelectorAll(`.box`);
const containerButtonBuy= document.querySelectorAll(`.buy-btn`);
const numeroQuantidade= document.querySelectorAll(`.quantidade`);
const botoesAdd= document.querySelectorAll(`.buttonAdd`);
const botoesRemove= document.querySelectorAll(`.buttonRemove`)

botaoPizza.addEventListener(`click`, () => {
    cardapioRefris.style.opacity = "0";
    cardapioPorcoes.style.opacity = "0";
    cardapioPizzas.style.opacity = "1";
    
    cardapioPorcoes.style.pointerEvents = "none";
    cardapioRefris.style.pointerEvents = "none";
    cardapioPizzas.style.pointerEvents = "auto"

    cardapioPorcoes.style.zIndex= "1";
    cardapioRefris.style.zIndex = "1"
    cardapioPizzas.style.zIndex = "2";
});

botaoRefri.addEventListener(`click`, () => {
    cardapioPizzas.style.opacity = "0";
    cardapioPorcoes.style.opacity = "0";
    cardapioRefris.style.opacity = "1";

    cardapioPizzas.style.pointerEvents = "none";
    cardapioPorcoes.style.pointerEvents = "none";
    cardapioRefris.style.pointerEvents = "auto";

    cardapioPizzas.style.zIndex= "1";
    cardapioPorcoes.style.zIndex= "1";
    cardapioRefris.style.zIndex = "2"
});

botaoPorcoes.addEventListener(`click`, () => {
    cardapioPizzas.style.opacity = "0";
    cardapioRefris.style.opacity = "0";
    cardapioPorcoes.style.opacity = "1"

    cardapioPizzas.style.pointerEvents = "none";
    cardapioRefris.style.pointerEvents = "none";
    cardapioPorcoes.style.pointerEvents = "auto";

    cardapioPizzas.style.zIndex= "1";
    cardapioRefris.style.zIndex= "1";
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

for (let box of caixas) {
    box.addEventListener(`mouseenter`, () => {
        const interno = box.querySelector(`.buy-btn`);
        interno.style.opacity = "1";
    });
    
    box.addEventListener(`mouseleave`, () => {
        const interno = box.querySelector(`.buy-btn`);
        interno.style.opacity = "0";
    });
}

for (let caixa of caixas) {
const botaoAdd = caixa.querySelector('.buttonAdd');
const botaoRemove = caixa.querySelector('.buttonRemove');
const numeroQuantidade = caixa.querySelector('.quantidade');

let quantidade = 0;

botaoAdd.addEventListener('click', () => {
    quantidade++;
    numeroQuantidade.textContent = quantidade;
});

botaoRemove.addEventListener('click', () => {
    if (quantidade > 0) {
    quantidade--;
    numeroQuantidade.textContent = quantidade;
    }
});
}


