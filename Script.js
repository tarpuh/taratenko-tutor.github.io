// Мобильное меню
const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    navList.classList.toggle('active');
    burger.classList.toggle('active');
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Учет фиксированной шапки
                behavior: 'smooth'
            });
            // Закрываем мобильное меню после клика
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                burger.classList.remove('active');
            }
        }
    });
});

// Простая обработка формы (для реального использования нужна интеграция с сервером)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.');
    this.reset();
});