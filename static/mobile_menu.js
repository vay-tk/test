document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const navItems = document.querySelectorAll('.mobile-nav .nav-item');

    function toggleMenu() {
        mobileMenuOverlay.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        
        // Animate nav items
        navItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = '';
            } else {
                item.style.animation = `fadeInUp 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    }

    hamburgerMenu.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            toggleMenu();
        }
    });
});
