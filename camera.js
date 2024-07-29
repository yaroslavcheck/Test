// Получение ссылки на элемент video
const video = document.getElementById('video');

// Запрос доступа к камере
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        // Установка потока видео в элемент video
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error('Ошибка доступа к камере:', err);
    });
