// Theme and Layout Switcher Functionality

$(document).ready(function(){
    
    // Initialize theme and layout switchers
    initializeThemeSwitcher();
    initializeLayoutSwitcher();
    initializeFadeInAnimations();
    
    // Load saved preferences
    loadSavedPreferences();
    
    function initializeThemeSwitcher() {
        const themeSwitcherHTML = `
            <div class="theme-switcher">
                <h4>Themes</h4>
                <button class="theme-option default" data-theme="default">Default</button>
                <button class="theme-option dark" data-theme="dark">Dark</button>
                <button class="theme-option light" data-theme="light">Light</button>
                <button class="theme-option modern" data-theme="modern">Modern</button>
                <button class="theme-option nature" data-theme="nature">Nature</button>
            </div>
        `;
        
        $('body').append(themeSwitcherHTML);
        
        // Theme switching functionality
        $('.theme-option').click(function() {
            const theme = $(this).data('theme');
            switchTheme(theme);
            
            // Update active state
            $('.theme-option').removeClass('active');
            $(this).addClass('active');
            
            // Save preference
            localStorage.setItem('selectedTheme', theme);
        });
    }
    
    function initializeLayoutSwitcher() {
        const layoutSwitcherHTML = `
            <div class="layout-switcher">
                <h4>Layouts</h4>
                <button class="layout-option active" data-layout="default">Default</button>
                <button class="layout-option" data-layout="grid">Grid</button>
                <button class="layout-option" data-layout="list">List</button>
                <button class="layout-option" data-layout="masonry">Masonry</button>
            </div>
        `;
        
        $('body').append(layoutSwitcherHTML);
        
        // Layout switching functionality
        $('.layout-option').click(function() {
            const layout = $(this).data('layout');
            switchLayout(layout);
            
            // Update active state
            $('.layout-option').removeClass('active');
            $(this).addClass('active');
            
            // Save preference
            localStorage.setItem('selectedLayout', layout);
        });
    }
    
    function switchTheme(theme) {
        // Remove all theme classes
        $('body').removeClass('dark-theme light-theme modern-theme nature-theme');
        
        // Add new theme class
        if (theme !== 'default') {
            $('body').addClass(theme + '-theme');
        }
        
        // Add transition effect
        $('body').css('transition', 'all 0.5s ease');
        setTimeout(() => {
            $('body').css('transition', '');
        }, 500);
    }
    
    function switchLayout(layout) {
        // Remove all layout classes from services section
        const servicesSection = $('.pt-5').first();
        servicesSection.removeClass('layout-grid layout-list layout-masonry');
        
        // Add new layout class
        if (layout !== 'default') {
            servicesSection.addClass('layout-' + layout);
        }
        
        // Special handling for list layout content structure
        if (layout === 'list') {
            $('.item').each(function() {
                const $item = $(this);
                const $icon = $item.find('.icon');
                const $title = $item.find('h6');
                const $description = $item.find('p');
                
                // Restructure for list layout
                if (!$item.find('.content').length) {
                    $title.add($description).wrapAll('<div class="content"></div>');
                }
            });
        } else {
            // Restore default structure
            $('.item .content').each(function() {
                $(this).children().unwrap();
            });
        }
        
        // Reinitialize masonry if needed
        if (layout === 'masonry') {
            setTimeout(() => {
                initializeFadeInAnimations();
            }, 100);
        }
    }
    
    function initializeFadeInAnimations() {
        // Add fade-in class to all service items
        $('.item').addClass('fade-in');
        
        // Intersection Observer for fade-in animations
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            $('.fade-in').each(function() {
                observer.observe(this);
            });
        } else {
            // Fallback for older browsers
            $('.fade-in').addClass('visible');
        }
    }
    
    function loadSavedPreferences() {
        // Load saved theme
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            switchTheme(savedTheme);
            $(`.theme-option[data-theme="${savedTheme}"]`).addClass('active');
        } else {
            $('.theme-option[data-theme="default"]').addClass('active');
        }
        
        // Load saved layout
        const savedLayout = localStorage.getItem('selectedLayout');
        if (savedLayout) {
            switchLayout(savedLayout);
            $('.layout-option').removeClass('active');
            $(`.layout-option[data-layout="${savedLayout}"]`).addClass('active');
        }
    }
    
    // Add smooth scrolling enhancement
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 800, 'easeInOutCubic');
        }
    });
    
    // Enhanced counter animation with different speeds for visual appeal
    function enhancedCounterAnimation() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach((counter, index) => {
            const target = +counter.getAttribute('data-target');
            const speed = 100 + (index * 20); // Different speed for each counter
            let count = 0;
            
            const updateCount = () => {
                const inc = target / speed;
                if (count < target) {
                    count += inc;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            // Start animation when element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        updateCount();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }
    
    // Replace the original counter animation
    enhancedCounterAnimation();
    
    // Add responsive menu toggle enhancement
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
        
        // Add body scroll lock when menu is open
        if ($(this).hasClass('fa-times')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    });
    
    // Close menu when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.header').length) {
            $('.fa-bars').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
            $('body').css('overflow', 'auto');
        }
    });
    
    // Add loading animation
    $(window).on('load', function() {
        $('body').addClass('loaded');
        setTimeout(() => {
            initializeFadeInAnimations();
        }, 500);
    });
});

// CSS for loading animation (to be added to themes.css)
const loadingCSS = `
body {
    opacity: 0;
    transition: opacity 0.5s ease;
}

body.loaded {
    opacity: 1;
}

.nav-toggle {
    transform: translateX(0) !important;
}

@media (max-width: 768px) {
    .navbar {
        position: fixed;
        top: 70px;
        right: 0;
        width: 100%;
        height: calc(100vh - 70px);
        background: rgba(0, 46, 95, 0.95);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
    }
    
    .navbar ul {
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding: 0;
    }
    
    .navbar ul li {
        margin: 20px 0;
    }
    
    .navbar ul li a {
        font-size: 2.5rem !important;
    }
}
`;