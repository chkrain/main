function loadHTML(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.body.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function loadStylesheet(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
}

function checkWidth() {
    // Удалить существующие стили
    var existingStylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    existingStylesheets.forEach(function (stylesheet) {
        stylesheet.parentNode.removeChild(stylesheet);
    });

    if (window.innerWidth < 768) {
        loadStylesheet('mobile.css');
        loadHTML('mobile.html');
    } else if (window.innerWidth > 768) {
        loadStylesheet('style.css');
        loadHTML('index.html');
    }
}

// Проверка ширины окна при загрузке страницы
checkWidth();

// Обработчик события изменения размера окна
window.addEventListener('resize', function () {
    checkWidth();
}); 