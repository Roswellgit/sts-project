// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Select elements to animate
const animatedElements = document.querySelectorAll('.content, .card, .impact-box, .solution-card');

// Set initial state and observe
animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
});

// Glitch effect trigger for the title (optional visual flair)
const title = document.querySelector('.glitch');
if(title) {
    title.addEventListener('mouseover', () => {
        title.style.color = '#00d2ff';
    });
    title.addEventListener('mouseout', () => {
        title.style.color = 'white';
    });
}