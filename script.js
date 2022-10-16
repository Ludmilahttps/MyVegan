function selectDish(botao) {
    const aux = document.querySelector('.selectDish');
    if (aux !== null) {
        aux.classList.remove('selectDish');
        aux.querySelector('.icon').classList.add("disable");
        if(botao == aux)
        {
            aux.classList.remove('selectDish');
            aux.querySelector('.icon').classList.add("disable");
            done();
            return;
        }
    }
    botao.classList.add('selectDish');
    botao.querySelector('.icon').classList.remove("disable");
    priceDish = botao.querySelector(".price");
    done();
}

function selectDrink(botao) {
    const aux = document.querySelector('.selectDrink');
    if (aux !== null) {
        aux.classList.remove('selectDrink');
        aux.querySelector('.icon').classList.add("disable");
        if(botao == aux)
        {
            aux.classList.remove('selectDrink');
            aux.querySelector('.icon').classList.add("disable");
            done();
            return;
        }
    }
    botao.classList.add('selectDrink');
    botao.querySelector('.icon').classList.remove("disable");
    priceDrink = botao.querySelector(".price");
    done();
}

function selectDessert(botao) {
    const aux = document.querySelector('.selectDessert');
    if (aux !== null) {
        aux.classList.remove('selectDessert');
        aux.querySelector('.icon').classList.add("disable");
        if(botao == aux)
        {
            aux.classList.remove('selectDessert');
            aux.querySelector('.icon').classList.add("disable");
            done();
            return;
        }
    }
    botao.classList.add('selectDessert');
    botao.querySelector('.icon').classList.remove("disable");
    priceDessert = botao.querySelector(".price");
    done();
}

function done() 
{
    let select = document.querySelectorAll(".selectDish").length + document.querySelectorAll(".selectDrink").length + document.querySelectorAll(".selectDessert").length;

    if (select == 3) {
        document.querySelector(".finish").classList.add("enable");
        document.querySelector(".undone").classList.add("disable");
        document.querySelector(".done").classList.remove("disable");
    }
    else {
        document.querySelector(".finish").classList.remove("enable");
        document.querySelector(".done").classList.add("disable");
        document.querySelector(".undone").classList.remove("disable");
    }
}
