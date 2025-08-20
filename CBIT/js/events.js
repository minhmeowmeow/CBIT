document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects for event cards
    // Đã xóa hiệu ứng hover

    // Search functionality
    const searchIcon = document.querySelector('.fa-search');
    searchIcon.addEventListener('click', function() {
        const searchTerm = prompt('Tìm kiếm sự kiện:');
        if (searchTerm) {
            // Filter events based on search term
            const eventTitles = document.querySelectorAll('h3');
            eventTitles.forEach(title => {
                const card = title.closest('.bg-white');
                if (title.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });
}); 