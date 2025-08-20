document.addEventListener('DOMContentLoaded', function() {
    // Registration modal functionality
    const modal = document.getElementById('registrationModal');
    const registerBtn = document.querySelector('button:has(.fa-user-plus)');
    const closeModal = document.getElementById('closeModal');
    const cancelModal = document.getElementById('cancelModal');
    const registrationForm = document.getElementById('registrationForm');

    // Open modal
    registerBtn.addEventListener('click', function() {
        modal.classList.remove('hidden');
    });

    // Close modal
    function closeRegistrationModal() {
        modal.classList.add('hidden');
    }

    closeModal.addEventListener('click', closeRegistrationModal);
    cancelModal.addEventListener('click', closeRegistrationModal);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeRegistrationModal();
        }
    });

    // Handle form submission
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
        closeRegistrationModal();
        registrationForm.reset();
    });

    // Video play functionality
    const playBtn = document.querySelector('.fa-play');
    if (playBtn) {
        playBtn.closest('button').addEventListener('click', function() {
            alert('Video player sẽ được mở tại đây');
        });
    }

    // Social sharing
    const facebookBtn = document.querySelector('.fab.fa-facebook-f').closest('button');
    const youtubeBtn = document.querySelector('.fab.fa-youtube').closest('button');

    facebookBtn.addEventListener('click', function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`, '_blank', 'width=600,height=400');
    });

    youtubeBtn.addEventListener('click', function() {
        alert('Chia sẻ lên YouTube');
    });

    // Smooth scrolling for related events
    const relatedLinks = document.querySelectorAll('a[href*="event-detail.html"]');
    relatedLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add loading animation or transition here if needed
        });
    });
}); 