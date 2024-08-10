// JavaScript for smooth scroll (optional)

// Ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Navigation Bar Highlight
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }

    // Form Validation for Contact Page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    // Payment Form Handling
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Payment successful!');
            paymentForm.reset();
        });
    }

    // Lock Pages Until Signed In
    const protectedLinks = document.querySelectorAll('.protected');
    if (sessionStorage.getItem('signedIn') !== 'true') {
        protectedLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                alert('Please sign in or register to access this page.');
                window.location.href = 'register.html';
            });
        });
    }

    // Registration Form Handling
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            sessionStorage.setItem('signedIn', 'true');
            alert('Registration successful!');
            window.location.href = 'index.html';
        });
    }

    // Animations on Home Page
    const homePage = document.querySelector('.home-container');
    if (homePage) {
        homePage.classList.add('fade-in');
    }

    // Course Exploration Handling
    const exploreButtons = document.querySelectorAll('.explore-btn');
    exploreButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Explore courses functionality coming soon!');
        });
    });
});