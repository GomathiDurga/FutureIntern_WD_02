// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800, // Duration of animations
        once: true, // Animation should happen only once
        mirror: false, // Elements should not animate out
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Select the target section
            const offsetTop = targetSection.offsetTop; // Get the offset position of the target section
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Smooth scroll
            });
        });
    });
});

