// Mobile menu toggle
// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
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

    // Add hover effects for video thumbnails
    // Đã xóa hiệu ứng hover

    // Add click handlers for video thumbnails
    document.querySelectorAll('.fa-play-circle').forEach(playBtn => {
        playBtn.addEventListener('click', function() {
            alert('Video player would open here');
        });
    });
}); 