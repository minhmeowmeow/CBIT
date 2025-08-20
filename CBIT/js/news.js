document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for news items
    document.querySelectorAll('.bg-white.rounded-lg.shadow-sm').forEach(item => {
        item.addEventListener('click', function() {
            // In a real application, this would navigate to the full article
            const title = this.querySelector('h3').textContent;
            console.log('Clicked on article:', title);
        });
    });

    // Add hover effects for news items
    // Đã xóa hiệu ứng hover

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
}); 