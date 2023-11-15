ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [44.836108, 37.556855], // Координаты центра карты
        zoom: 10 // Уровень масштабирования карты
    });

    // Добавление маркера
    var myPlacemark = new ymaps.Placemark([44.836108, 37.556855], {
        balloonContent: 'Раевская Клиника'
    });

    myMap.geoObjects.add(myPlacemark);
}
