let roomNumber = +prompt("Введите номер квартиры");

if (roomNumber >= 1 && roomNumber <= 20) {
    alert("Первый подъезд");
} 
else if (roomNumber >= 21 && roomNumber <= 48){
    alert("Второй подъезд");
}
else if (roomNumber >= 49 && roomNumber <= 90){
    alert("Третий подъезд");
}
else {
    alert("Такой квартиры в этом доме нет");
}