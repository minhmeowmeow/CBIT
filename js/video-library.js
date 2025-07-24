document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const videoTab = document.getElementById('videoTab');
    const photoTab = document.getElementById('photoTab');
    const videoContent = document.getElementById('videoContent');
    const photoContent = document.getElementById('photoContent');
    const loadMoreSection = document.getElementById('loadMoreSection');

    function switchTab(activeTab, inactiveTab, activeContent, inactiveContent, showLoadMore = true) {
        // Update tab styles
        activeTab.classList.add('border-blue-600', 'text-blue-600');
        activeTab.classList.remove('border-transparent', 'text-gray-500');
        
        inactiveTab.classList.remove('border-blue-600', 'text-blue-600');
        inactiveTab.classList.add('border-transparent', 'text-gray-500');

        // Update content visibility
        activeContent.classList.remove('hidden');
        inactiveContent.classList.add('hidden');

        // Show/hide load more section
        if (showLoadMore) {
            loadMoreSection.classList.remove('hidden');
        } else {
            loadMoreSection.classList.add('hidden');
        }
    }

    videoTab.addEventListener('click', function() {
        switchTab(videoTab, photoTab, videoContent, photoContent, true);
    });

    photoTab.addEventListener('click', function() {
        switchTab(photoTab, videoTab, photoContent, videoContent, false);
    });

    // Video play functionality
    const playButtons = document.querySelectorAll('.fa-play');
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const videoTitle = this.closest('.bg-white').querySelector('h3')?.textContent || 'Video';
            window.location.href = `video-detail.html?title=${encodeURIComponent(videoTitle)}`;
        });
    });

    // Featured video play
    const featuredPlayButton = document.querySelector('.bg-white.bg-opacity-20');
    if (featuredPlayButton) {
        featuredPlayButton.addEventListener('click', function() {
            window.location.href = 'video-detail.html?featured=true';
        });
    }

    // Load more functionality
    const loadMoreBtn = document.querySelector('#loadMoreSection button');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulate loading more videos
            this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Đang tải...';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-plus mr-2"></i>Xem thêm video';
                alert('Đã tải thêm video mới!');
            }, 1500);
        });
    }

    // Search functionality
    const searchIcon = document.querySelector('.fa-search');
    searchIcon.addEventListener('click', function() {
        const searchTerm = prompt('Tìm kiếm trong thư viện:');
        if (searchTerm) {
            // Filter content based on search term
            const currentContent = videoContent.classList.contains('hidden') ? photoContent : videoContent;
            const items = currentContent.querySelectorAll('h3');
            
            items.forEach(title => {
                const container = title.closest('.bg-white') || title.closest('.relative');
                if (title.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
                    container.style.display = 'block';
                } else {
                    container.style.display = 'none';
                }
            });
        }
    });

    // Hover effects for video cards
    // Đã xóa hiệu ứng hover

    // Hover effects for photo albums
    // Đã xóa hiệu ứng hover
}); 