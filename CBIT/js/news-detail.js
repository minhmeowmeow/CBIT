function shareArticle() {
    if (navigator.share) {
        navigator.share({
            title: 'Toàn văn phát biểu của Trưởng đoàn Việt Nam tại Hội nghị COP29 về biến đổi khí hậu',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(window.location.href);
        alert('Đã sao chép liên kết vào clipboard!');
    }
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Toàn văn phát biểu của Trưởng đoàn Việt Nam tại Hội nghị COP29 về biến đổi khí hậu');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Toàn văn phát biểu của Trưởng đoàn Việt Nam tại Hội nghị COP29 về biến đổi khí hậu');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
}

document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for related articles
    document.querySelectorAll('.cursor-pointer').forEach(item => {
        item.addEventListener('click', function() {
            // In a real application, this would navigate to the related article
            const title = this.querySelector('h4').textContent;
            console.log('Clicked on related article:', title);
        });
    });

    // Add smooth scrolling for anchor links
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

    // Add reading progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-300';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}); 