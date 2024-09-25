const valor_item_car = document.getElementById('valor-item-carrinho');
const carrinho_valor = document.getElementById('carrinho-valor')
const cafe_leite1 = document.getElementById('cafe_leite1');
const cafe_com_creme1 = document.getElementById('cafe_com_creme1');
const cafe_com_chocolate1 = document.getElementById('cafe_com_chocolate1');
const cafe_leite2 = document.getElementById('cafe_leite2');
const cafe_com_creme2 = document.getElementById('cafe_com_creme2');
const cafe_com_chocolate2 = document.getElementById('cafe_com_chocolate2');
const menu_botao = document.getElementById('botao-menu');
const menu_itens = document.getElementById('menu-itens');

function tem_item() {
    if (carrinho_valor.classList.contains('item-not-add')) {
        carrinho_valor.classList.remove('item-not-add');
    }
}

// Menu de compras

cafe_leite1.addEventListener('click', () => {
    tem_item()
    valor_item_car.innerHTML ++
});

cafe_com_creme1.addEventListener('click', () => {
    tem_item()
    valor_item_car.innerHTML ++
});

cafe_com_chocolate1.addEventListener('click', () => {
    tem_item()
    valor_item_car.innerHTML ++
});

cafe_leite2.addEventListener('click', () => {
    tem_item()
    valor_item_car.innerHTML ++
});

cafe_com_creme2.addEventListener('click', () => {
    tem_item()
    valor_item_car.innerHTML ++
});

cafe_com_chocolate2.addEventListener('click', () => {
    tem_item()
    valor_item_car.innerHTML ++
});

//

//

// Menu header

menu_botao.addEventListener('click', () => {
    menu_itens.classList.toggle('aberto');
    menu_botao.classList.toggle('menu_aberto');
});
//
