document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.seo');
    const bottomNavLinks = document.querySelectorAll('.bottom-link');
    const homeSectionId = 'tit1';
    const mobileBreakpoint = 768; // Based on your CSS media query

    // Helper function to check if the current view is mobile
    const isMobile = () => window.innerWidth <= mobileBreakpoint;

    // Function to initialize or reset section visibility based on mobile state
    const initializeSectionVisibility = () => {
        if (isMobile()) {
            sections.forEach(section => {
                if (section.querySelector('h2').id === homeSectionId) {
                    section.classList.remove('section-hidden');
                } else {
                    section.classList.add('section-hidden');
                }
            });

            // Set 'home' link as active in bottom navigation
            bottomNavLinks.forEach(link => {
                if (link.getAttribute('href') === `#${homeSectionId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        } else {
            // On desktop, ensure all sections are visible
            sections.forEach(section => {
                section.classList.remove('section-hidden');
            });
            // Remove active class from all bottom nav links on desktop
            bottomNavLinks.forEach(link => {
                link.classList.remove('active');
            });
        }
    };

    // Function to handle clicks on bottom navigation links (mobile only)
    const handleBottomNavClick = (event) => {
        if (!isMobile()) return; // Only apply logic on mobile

        event.preventDefault(); // Prevent default anchor behavior

        // Remove active class from all bottom nav links
        bottomNavLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the clicked link
        event.currentTarget.classList.add('active');

        // Get the target section ID from the href
        const targetSectionId = event.currentTarget.getAttribute('href').substring(1); // Remove '#'

                    // Hide all sections and then show the target section
                    sections.forEach(section => {
                        if (section.querySelector('h2').id === targetSectionId) {
                            section.classList.remove('section-hidden');
                            // Set focus on the h2 title for accessibility
                            section.querySelector('h2').focus();
                        } else {
                            section.classList.add('section-hidden');
                        }
                    });    };

    // Add event listeners to bottom navigation links
    bottomNavLinks.forEach(link => {
        link.addEventListener('click', handleBottomNavClick);
    });

    // Initialize visibility on page load
    initializeSectionVisibility();

    // Re-evaluate visibility on window resize (e.g., rotating device or resizing browser)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initializeSectionVisibility, 250); // Debounce for performance
    });
});