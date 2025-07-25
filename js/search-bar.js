// js/search-bar.js
// Toggle search bar visibility and handle search logic for the header search bar

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('globalSearchBtn');
    const searchBarWrapper = document.getElementById('search-bar-wrapper');

    // Toggle search bar visibility
    if (searchBtn && searchBarWrapper) {
        searchBtn.addEventListener('click', function() {
            searchBarWrapper.classList.toggle('hidden');
            // Optional: focus input when shown
            if (!searchBarWrapper.classList.contains('hidden')) {
                const input = searchBarWrapper.querySelector('input[type="text"]');
                if (input) input.focus();
            }
        });
    }

    // Search logic
    function initSearchLogic() {
        const bar = searchBarWrapper.querySelector('.search-bar-component');
        if (!bar) return;
        const input = bar.querySelector('input[type="text"]');
        const button = bar.querySelector('button');
        const select = bar.querySelector('select');
        if (button && input && select) {
            button.addEventListener('click', function() {
                const keyword = input.value.trim();
                const category = select.value;
                if (keyword) {
                    alert(`Tìm kiếm: "${keyword}" trong danh mục: "${category || 'Tất cả'}"`);
                } else {
                    alert('Vui lòng nhập từ khóa tìm kiếm');
                }
            });
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    button.click();
                }
            });
        }
    }

    // Initialize search logic on load (in case search bar is present in DOM)
    initSearchLogic();

    // If you ever dynamically load the search bar, call initSearchLogic() after loading
}); 