document.addEventListener('DOMContentLoaded', function() {
    // Плавный скролл к секциям при клике на пункты навигации
    document.querySelectorAll('.navigation a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScrollTo(target);
            }
        });
    });

    // Функция плавного скролла
    function smoothScrollTo(element) {
        const start = window.pageYOffset;
        const end = element.offsetTop;
        let currentTime = null;
        
        const animateScroll = timestamp => {
            if (!currentTime) currentTime = timestamp;
            const progress = timestamp - currentTime;
            
            window.scrollTo(0, easeInOutQuad(progress, start, end - start, 1000));
            
            if (progress < 1000) {
                requestAnimationFrame(animateScroll);
            } else {
                currentTime = null;
            }
        };
        
        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        
        requestAnimationFrame(animateScroll);
    }
});
