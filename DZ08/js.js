let yearBorn = prompt("Введите год Вашего рождения");
let age = 2020 - yearBorn;

if (age >= 16) {
    alert(`Вам ${age} лет! Добро пожаловать!`);
} 
else {
    alert("Вход запрещен");
}