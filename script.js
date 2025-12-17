// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to watch
const scrollElements = document.querySelectorAll('.text-block, .t-item, .card, .sol-card');

// Set initial style via JS
scrollElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Trigger animation class
document.addEventListener('scroll', () => {
    scrollElements.forEach((el) => {
        if (el.classList.contains('visible')) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

console.log("STS Project: Full Content Expansion Loaded.");