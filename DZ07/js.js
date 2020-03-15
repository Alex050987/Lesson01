let login = prompt("Введите логин");
let password = prompt("Введите пароль");

if (login == 'ivan' && password == '334455') {
    alert("Добро пожаловать, Иван");
} 
else if (login == 'alex' && password == '777'){
    alert("Добро пожаловать, Алекс");
}
else if (login == 'petr' && password == 'b5678'){
    alert("Добро пожаловать, Петр");
}
else {
    alert("Ошибка авторизации");
}