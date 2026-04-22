// Background Blob mouse tracking
const blob = document.getElementById("blob");

document.body.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    // Add page scroll offsets so the blob position is accurate when scrolled
    // Wait, the blob is set to 'absolute' but is placed inside 'body'. 
    // It's better to animate it smoothly.
    
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY + window.scrollY}px`
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
