// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Select elements to animate
const elements = document.querySelectorAll('.text-block, .stat-card, .t-item, .card, .step');

// Initial styling for animation
elements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
});

// Trigger the animation
document.addEventListener('scroll', () => {
    elements.forEach((el) => {
        if(el.classList.contains('visible')) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

console.log("STS Project loaded successfully.");