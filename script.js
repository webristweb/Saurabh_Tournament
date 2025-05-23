// Mobile Navigation
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Countdown Timer
function updateCountdown() {
    // Set the date we're counting down to (3 months from now)
    const countdownDate = new Date();
    countdownDate.setMonth(countdownDate.getMonth() + 3);

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update countdown every second
if (document.getElementById('days')) {
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 14, 19, 0.98)';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 14, 19, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Video Popup Functionality
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
    card.addEventListener('click', () => {
        // In a real implementation, this would open a video modal
        // For demonstration, we'll just show an alert
        const videoTitle = card.querySelector('.video-info h3').textContent;
        alert(`Video "${videoTitle}" would play in a modal. This is a placeholder for video functionality.`);
    });
});

// Animation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
});

// Past tournaments horizontal scroll with buttons
const scrollContainer = document.querySelector('.scrolling-container');

if (scrollContainer) {
    // Create scroll buttons if they don't exist
    if (!document.querySelector('.scroll-btn-container')) {
        const btnContainer = document.createElement('div');
        btnContainer.className = 'scroll-btn-container';
        
        const leftBtn = document.createElement('button');
        leftBtn.className = 'scroll-btn left-btn';
        leftBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        
        const rightBtn = document.createElement('button');
        rightBtn.className = 'scroll-btn right-btn';
        rightBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        
        btnContainer.appendChild(leftBtn);
        btnContainer.appendChild(rightBtn);
        
        scrollContainer.parentNode.insertBefore(btnContainer, scrollContainer.nextSibling);
        
        // Add scroll functionality
        leftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        rightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
}

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Make hero section active by default
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('active');
    }
    
    // Initial check for sections in viewport
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
}); 