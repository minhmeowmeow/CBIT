document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.bg-white.rounded-lg.shadow-sm').forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            console.log('Clicked on activity:', title);

        });
    });
    // Add click handlers for popular activities in sidebar
    document.querySelectorAll('.cursor-pointer').forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            console.log('Clicked on popular activity:', title);
        });
    });

    // Pagination functionality
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('nav button').forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-300');
            });
            
            // Add active class to clicked button
            if (!this.querySelector('i')) { // Don't style the arrow button
                this.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-300');
                this.classList.add('bg-blue-600', 'text-white');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add fade-in animation for activity items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to activity items
    document.querySelectorAll('.space-y-6 > div').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}); 