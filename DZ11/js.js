let yourOrder = prompt("Добрый день! Заказывайте!");
let age;

switch (yourOrder) {
    case 'сигареты':
        age = confirm('Вам есть 18?');
        if (age) {
            let sigaretes = 40;
            let howMuch = +prompt('Сколько?');
            let sum = sigaretes * howMuch;
            alert(`С Вас ${sum} гривен!`);
        } else {
            alert('Несовершеннолетним не продаем');
        }
        break;
    case 'пиво':
        age = confirm('Вам есть 18?');
        if (age) {
            let beer = 20;
            let howMuch = +prompt('Сколько?');
            let sum = beer * howMuch;
            alert(`С Вас ${sum} гривен!`);
        } else {
            alert('Несовершеннолетним не продаем');
        }
        break;

    case 'сок':
        chooseJuise = prompt('Какой именно сок?');
        let juise = 30;
        let howMuch = +prompt('Сколько?');
        let sum = juise * howMuch;
        alert(`С Вас ${sum} гривен! Держите Ваш ${chooseJuise} сок!`);
        
        break;
    
    default:
        alert('Вы пьяны? Говорите по-русски, пожалуйста!');
        break;
}



