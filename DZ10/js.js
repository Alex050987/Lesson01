let workAge = prompt("Сколько товаров у Вас в корзине?");

switch (workAge) {
    case '1':
        alert('У Вас один товар в корзине');
        break;
    case '2':
        alert('У Вас два товара в корзине');
        break;
    case '3':
        alert('У Вас три товара в корзине');
        break;
    case '4':
        alert('У Вас четыре товара в корзине');
        break;
    case '5':
        alert('У Вас пять товаров в корзине');
        break;
    case '6':
        alert('У Вас шесть товаров в корзине');
        break;
    case '7':
        alert('У Вас семь товаров в корзине');
        break;
    case '8':
        alert('У Вас восемь товаров в корзине');
        break;
    case '9':
        alert('У Вас девять товаров в корзине');
        break;

    default:
        alert('Корзина переполнена');
        break;
}