document.addEventListener("DOMContentLoaded", function () {

    // Аккордеон
    const accordionItems = document.querySelectorAll(".accordion__item");

    accordionItems.forEach((item) => {
        item.querySelector(".accordion__item-title").addEventListener(
            "click",
            function () {
                // Если элемент уже активен, то сворачиваем его
                if (item.classList.contains("active")) {
                    item.classList.remove("active");
                } else {
                    // Убираем активный класс у всех элементов
                    accordionItems.forEach((el) =>
                        el.classList.remove("active")
                    );
                    // Добавляем активный класс к текущему элементу
                    item.classList.add("active");
                }
            }
        );
    });

    // Модальное окно
    const modal = document.getElementById("modal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".modal__inner-close");
    const body = document.body;

    // Обработчик начала касания
    closeBtn.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    }, false);

    // Обработчик окончания касания
    closeBtn.addEventListener('touchend', function(e) {
        endY = e.changedTouches[0].clientY;
        
        // Проверяем направление свайпа
        if (startY && Math.abs(startY - endY) > 40) { // Минимальный порог свайпа
            if (startY < endY) {
                console.log('Свайп вниз');
                modal.classList.remove('show'); // Закрываем модальное окно
                body.classList.remove('no-scroll');
            } else {
                console.log('Свайп вверх');
                
            }
            
            startY = null; // Сбрасываем координаты
        }
    }, false);

    // Открываем модальное окно при нажатии на кнопку
    openBtn.onclick = function () {
        modal.classList.add('show');
        body.classList.add('no-scroll');
    };

    // Закрываем модальное окно при нажатии на крестик
    closeBtn.onclick = function () {
        modal.classList.remove('show');
        body.classList.remove('no-scroll');
    };

    // Закрываем модальное окно при клике вне его области
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.classList.remove('show');
            body.classList.remove('no-scroll');
        }
    };
});
