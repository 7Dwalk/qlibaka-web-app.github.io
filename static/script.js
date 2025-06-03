document.addEventListener('DOMContentLoaded', function () {
    // Карусель уровней
    const carousel = document.querySelector('.carousel');
    const levels = document.querySelectorAll('.carousel-level');
    const dots = document.querySelectorAll('.pagination-dot');
    // **CORRECTED SELECTOR:**  Use 'pagination-arrow' to match the HTML
    const arrows = document.querySelectorAll('.pagination-arrow'); // Single set of arrows
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 33.333}%)`;

        // Обновляем пагинацию
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Обновляем состояние стрелок
        // Use 'arrows' here, as it's the single set of arrow elements.  Also index 0 and 1.
        arrows[0].classList.toggle('disabled', currentIndex === 0);
        arrows[1].classList.toggle('disabled', currentIndex === levels.length - 1);
        updateTaskCard();
    }

    function updateTaskCard() {
        const levels = ['easy', 'medium', 'hard'];
        const currentLevel = levels[currentIndex];

        // Скрываем все canvas задач и показываем нужный
        document.querySelectorAll('.task .scratch-canvas').forEach(canvas => {
            canvas.style.display = canvas.dataset.level === currentLevel ? 'block' : 'none';
        });

        // Инициализируем скретч-эффект для текущей карточки задания, если еще не инициализирован
        const currentTaskCanvas = document.querySelector(`.task .scratch-canvas[data-level="${currentLevel}"]`);
        if (currentTaskCanvas && !currentTaskCanvas.dataset.initialized) {
            initScratchEffect(currentTaskCanvas);
            currentTaskCanvas.dataset.initialized = "true";
        }
    }

    // Обработчики для стрелок
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            if (this.classList.contains('left')) {
                currentIndex = Math.max(0, currentIndex - 1);
            } else {
                currentIndex = Math.min(levels.length - 1, currentIndex + 1);
            }
            updateCarousel();
        });
    });

    // Обработчики для точек пагинации
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateCarousel();
        });
    });

        // Инициализация скретч-карточек
    function initScratchCards() {
        // Здесь должна быть логика инициализации скретч-карточек
        // Для каждого canvas можно использовать библиотеку или свою реализацию
        console.log('Инициализация скретч-карточек...');

        // Пример для одной карточки:
        const canvases = document.querySelectorAll('.carousel .scratch-canvas');
        canvases.forEach(canvas => {
            // Инициализация скретч-эффекта
            initScratchEffect(canvas);
        });
        updateTaskCard();
    }

    function initScratchEffect(canvas) {
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.fillStyle = '#1B1B1B';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#E91E63';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Сотри меня', canvas.width / 2, canvas.height / 2);

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        function startDrawing(e) {
            isDrawing = true;
            lastX = e.offsetX || (e.touches && e.touches[0].clientX - canvas.offsetLeft) || 0;
            lastY = e.offsetY || (e.touches && e.touches[0].clientY - canvas.offsetTop) || 0;
            e.preventDefault();
        }

        function draw(e) {
            if (!isDrawing) return;
            const x = e.offsetX || (e.touches && e.touches[0].clientX - canvas.offsetLeft) || 0;
            const y = e.offsetY || (e.touches && e.touches[0].clientY - canvas.offsetTop) || 0;

            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.lineWidth = 20;
            ctx.lineCap = 'round';
            ctx.stroke();
            lastX = x;
            lastY = y;
            e.preventDefault();
        }

        function stopDrawing() {
            isDrawing = false;
        }

        canvas.addEventListener('mousedown', startDrawing);document.addEventListener('DOMContentLoaded', function () {
    // Карусель уровней
    const carousel = document.querySelector('.carousel');
    const levels = document.querySelectorAll('.carousel-level');
    const dots = document.querySelectorAll('.pagination-dot');
    // **CORRECTED SELECTOR:**  Use 'pagination-arrow' to match the HTML
    const arrows = document.querySelectorAll('.pagination-arrow'); // Single set of arrows
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 33.333}%)`;

        // Обновляем пагинацию
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Обновляем состояние стрелок
        // Use 'arrows' here, as it's the single set of arrow elements.  Also index 0 and 1.
        arrows[0].classList.toggle('disabled', currentIndex === 0);
        arrows[1].classList.toggle('disabled', currentIndex === levels.length - 1);
        updateTaskCard();
    }

    function updateTaskCard() {
        const levels = ['easy', 'medium', 'hard'];
        const currentLevel = levels[currentIndex];

        // Скрываем все canvas задач и показываем нужный
        document.querySelectorAll('.task .scratch-canvas').forEach(canvas => {
            canvas.style.display = canvas.dataset.level === currentLevel ? 'block' : 'none';
        });

        // Инициализируем скретч-эффект для текущей карточки задания, если еще не инициализирован
        const currentTaskCanvas = document.querySelector(`.task .scratch-canvas[data-level="${currentLevel}"]`);
        if (currentTaskCanvas && !currentTaskCanvas.dataset.initialized) {
            initScratchEffect(currentTaskCanvas);
            currentTaskCanvas.dataset.initialized = "true";
        }
    }

    // Обработчики для стрелок
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            if (this.classList.contains('left')) {
                currentIndex = Math.max(0, currentIndex - 1);
            } else {
                currentIndex = Math.min(levels.length - 1, currentIndex + 1);
            }
            updateCarousel();
        });
    });

    // Обработчики для точек пагинации
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateCarousel();
        });
    });

        // Инициализация скретч-карточек
    function initScratchCards() {
        // Здесь должна быть логика инициализации скретч-карточек
        // Для каждого canvas можно использовать библиотеку или свою реализацию
        console.log('Инициализация скретч-карточек...');

        // Пример для одной карточки:
        const canvases = document.querySelectorAll('.carousel .scratch-canvas');
        canvases.forEach(canvas => {
            // Инициализация скретч-эффекта
            initScratchEffect(canvas);
        });
        updateTaskCard();
    }

    function initScratchEffect(canvas) {
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.fillStyle = '#1B1B1B';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#E91E63';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Сотри меня', canvas.width / 2, canvas.height / 2);

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        function startDrawing(e) {
            isDrawing = true;
            lastX = e.offsetX || (e.touches && e.touches[0].clientX - canvas.offsetLeft) || 0;
            lastY = e.offsetY || (e.touches && e.touches[0].clientY - canvas.offsetTop) || 0;
            e.preventDefault();
        }

        function draw(e) {
            if (!isDrawing) return;
            const x = e.offsetX || (e.touches && e.touches[0].clientX - canvas.offsetLeft) || 0;
            const y = e.offsetY || (e.touches && e.touches[0].clientY - canvas.offsetTop) || 0;

            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.lineWidth = 20;
            ctx.lineCap = 'round';
            ctx.stroke();
            lastX = x;
            lastY = y;
            e.preventDefault();
        }

        function stopDrawing() {
            isDrawing = false;
        }

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('touchstart', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        canvas.addEventListener('touchend', stopDrawing);
        canvas.addEventListener('touchcancel', stopDrawing);
    }

    // Инициализация при загрузке страницы
    updateCarousel(); // Update the carousel *before* initializing the scratch cards.
    //It's important to update the Task Card based on current index
    //after loading the page
    initScratchCards();


});
        canvas.addEventListener('touchstart', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        canvas.addEventListener('touchend', stopDrawing);
        canvas.addEventListener('touchcancel', stopDrawing);
    }

    // Инициализация при загрузке страницы
    updateCarousel(); // Update the carousel *before* initializing the scratch cards.
    //It's important to update the Task Card based on current index
    //after loading the page
    initScratchCards();


});