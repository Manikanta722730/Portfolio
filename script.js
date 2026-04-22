// Background Blob mouse tracking
const blob = document.getElementById("blob");

document.body.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    // Add page scroll offsets so the blob position is accurate when scrolled
    // Wait, the blob is set to 'absolute' but is placed inside 'body'. 
    // It's better to animate it smoothly.
    
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
};

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Simple typing effect for the title
const titleElement = document.querySelector('.title');
const textToType = "AI & Data Science Undergrad ";
const typingSpeed = 100;
let charIndex = 0;

// Need to keep the cursor
titleElement.innerHTML = '<span class="cursor">|</span>';

function typeWriter() {
    if (charIndex < textToType.length) {
        titleElement.innerHTML = textToType.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Start typing effect slightly after load
setTimeout(typeWriter, 500);

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const headerOffset = 100; // Adjust for fixed header height + padding
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
