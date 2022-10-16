function selectDish(botao) 
{
    const aux = document.querySelector('.selectDish');
    if (aux !== null) {
        aux.classList.remove('selectDish');
    }
    botao.classList.add('selectDish');
    priceDish = botao.querySelector(".price");
    done();
}

function selectDrink(botao) 
{
    const aux = document.querySelector('.selectDrink');
    if (aux !== null) {
        aux.classList.remove('selectDrink');
    }
    botao.classList.add('selectDrink');
    priceDrink = botao.querySelector(".price");
    done();
}

function selectDessert(botao) 
{
    const aux = document.querySelector('.selectDessert');
    if (aux !== null) {
        aux.classList.remove('selectDessert');
    }
    botao.classList.add('selectDessert');
    priceDessert = botao.querySelector(".price");
    done();
}

function done() 
{
    let select = document.querySelectorAll(".selectDish").length + document.querySelectorAll(".selectDrink").length + document.querySelectorAll(".selectDessert").length;

    const check = document.querySelector('.check');
    const ncheck = document.querySelector('.ncheck');

    if (select == 3) {
        check.classList.remove('check');
        check.classList.add('ncheck');

        ncheck.classList.add('check');
        ncheck.classList.remove('ncheck');
    }
}

function finished()
{
    const check = document.querySelector('.check');
}