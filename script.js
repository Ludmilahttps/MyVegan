let price;

function selectDish(botao) {
    const aux = document.querySelector('.selectDish');
    if (aux !== null) {
        aux.classList.remove('selectDish');
        aux.querySelector('.icon').classList.add("disable");
        if (botao == aux) {
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
        if (botao == aux) {
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
        if (botao == aux) {
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

function done() {
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

function whats(botao) {
    let aux = botao.querySelector(".disable");
    let aux2 = botao.querySelector(".done");

    if (aux2 != aux) {

        let price_dish = (document.querySelector('.selectDish .price').innerHTML).replace('R$ ', '').replace(',', '.');
        let price_drink = document.querySelector('.selectDrink .price').innerHTML.replace('R$ ', '').replace(',', '.');
        let price_dessert = document.querySelector('.selectDessert .price').innerHTML.replace('R$ ', '').replace(',', '.');

        price = Number(price_dish) + Number(price_drink) + Number(price_dessert);

        document.querySelector(".overlay").classList.remove("disable");
        addOrder();
    }
}

function sendZap() {

    let name_dish = document.querySelector('.selectDish .name').innerHTML;
    let name_drink = document.querySelector('.selectDrink .name').innerHTML;
    let name_dessert = document.querySelector('.selectDessert .name').innerHTML;


    const name = prompt("Digite seu nome: ");
    const adress = prompt("Digite seu endereço: ");

    let msg = `Olá, meu nome é ${name} e eu gostaria de fazer o pedido:
    - Prato: ${name_dish}
    - Bebida: ${name_drink}
    - Sobremesa: ${name_dessert}
    Total: R$ ${price}
    Para ser entregue em: ${adress}`;

    msgWhats = encodeURIComponent(msg);
    window.open(`http://wa.me/55048991339151?text=${msgWhats}`);

}

function cancelOrder() {
    document.location.reload(true);
}

function addOrder() {
    let name_dish = document.querySelector('.selectDish .name').innerHTML;
    let name_drink = document.querySelector('.selectDrink .name').innerHTML;
    let name_dessert = document.querySelector('.selectDessert .name').innerHTML;

    let price_dish = (document.querySelector('.selectDish .price').innerHTML);
    let price_drink = document.querySelector('.selectDrink .price').innerHTML;
    let price_dessert = document.querySelector('.selectDessert .price').innerHTML;

    let orderDishName = document.querySelector(".order-dish .name");
    orderDishName.innerHTML = name_dish;
    let orderDishPrice = document.querySelector(".order-dish .price");
    orderDishPrice.innerHTML = price_dish;

    let orderDrinkName = document.querySelector(".order-drink .name");
    orderDrinkName.innerHTML = name_drink;
    let orderDrinkPrice = document.querySelector(".order-drink .price");
    orderDrinkPrice.innerHTML = price_drink;

    let orderDessertName = document.querySelector(".order-dessert .name");
    orderDessertName.innerHTML = name_dessert;
    let orderDessertPrice = document.querySelector(".order-dessert .price");
    orderDessertPrice.innerHTML = price_dessert;

    let orderPrice = document.querySelector(".order-price .price");
    orderPrice.innerHTML = `R$ ${price}`;
}

