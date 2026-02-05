// Initialize AOS (Animate On Scroll) library
AOS.init({
    // Global settings for AOS (optional)
    duration: 800, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.seo');
    const navLinks = document.querySelectorAll('.nav-link, .bottom-link');

    // Function to hide all sections
    const hideAllSections = () => {
        sections.forEach(section => {
            section.classList.add('section-hidden');
            section.setAttribute('aria-hidden', 'true');
        });
    };

    // Function to show a specific section
    const showSection = (targetId) => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('section-hidden');
            targetSection.setAttribute('aria-hidden', 'false');
            // Ensure focus is managed for accessibility, especially for keyboard users
            targetSection.focus(); 
            // Also reset scroll position for the section
            window.scrollTo(0, 0); 
        }
    };

    // Function to set active navigation link
    const setActiveLink = (targetId) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Check both nav-link and bottom-link for href
            if (link.getAttribute('href') === `#${targetId}`) {
                link.classList.add('active');
            }
        });
    };

    // Initial state: hide all and show home
    // 'tit1' is the ID for the home section as per index.html
    hideAllSections();
    showSection('tit1'); 
    setActiveLink('tit1');

    // Add event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor link behavior (page jump/scroll)
            const href = event.target.closest('a').getAttribute('href');
            if (href) {
                const targetId = href.substring(1); // Get ID without '#'
                
                hideAllSections();
                showSection(targetId);
                setActiveLink(targetId);
            }
        });
    });
});