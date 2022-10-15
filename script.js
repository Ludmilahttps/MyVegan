function selectDish(botao) {
    priceDish = document.querySelector(".dish")
    const aux = document.querySelector('.selectDish');
    if (aux !== null) {
        aux.classList.remove('selectDish');
    }
    botao.classList.add('selectDish');4
}

function selectDrink(botao) {
    const aux = document.querySelector('.selectDrink');
    if (aux !== null) {
        aux.classList.remove('selectDrink');
    }
    botao.classList.add('selectDrink');
}

function selectDessert(botao) {
    const aux = document.querySelector('.selectDessert');
    if (aux !== null) {
        aux.classList.remove('selectDessert');
    }
    botao.classList.add('selectDessert');
}