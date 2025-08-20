function playRelatedVideo(videoId) {
    // Navigate to related video detail page
    window.location.href = `video-detail.html?id=${videoId}`;
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Thủ tướng Phạm Minh Chính phát biểu tại COP26');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Thủ tướng Phạm Minh Chính phát biểu tại COP26');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

document.addEventListener('DOMContentLoaded', function() {
    // Get video ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');
    
    if (videoId) {
        console.log('Loading video:', videoId);
        // In a real application, load specific video content based on ID
    }

    // Video player functionality
    const mainVideo = document.getElementById('mainVideo');
    if (mainVideo) {
        mainVideo.addEventListener('loadstart', function() {
            console.log('Video loading started');
        });
        
        mainVideo.addEventListener('error', function() {
            console.log('Video loading error - showing placeholder');
        });

        // Auto-play functionality (if needed)
        mainVideo.addEventListener('canplay', function() {
            console.log('Video can start playing');
        });
    }

    // Related video hover effects
    // Đã xóa hiệu ứng hover

    // Close button functionality
    document.querySelector('.fa-times').addEventListener('click', function() {
        window.location.href = 'video-library.html';
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.location.href = 'video-library.html';
        }
        
        if (e.key === ' ' && mainVideo) {
            e.preventDefault();
            if (mainVideo.paused) {
                mainVideo.play();
            } else {
                mainVideo.pause();
            }
        }
    });
}); 