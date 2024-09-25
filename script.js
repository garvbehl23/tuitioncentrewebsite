
document.addEventListener('DOMContentLoaded', function() {


    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Payment successful!');
            paymentForm.reset();
        });
    }

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
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            sessionStorage.setItem('signedIn', 'true');
            alert('Registration successful!');
            window.location.href = 'index.html';
        });
    }


    const homePage = document.querySelector('.home-container');
    if (homePage) {
        homePage.classList.add('fade-in');
    }

    
    const exploreButtons = document.querySelectorAll('.explore-btn');
    exploreButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Explore courses functionality coming soon!');
        });
    });
});
