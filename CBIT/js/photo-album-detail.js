// Photo data for lightbox
const photos = [
    {
        src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trang%20chi%20tiet%20album.jpg-Z7vHdsLKpS9bIUr1ic7Y0drOO7c0Xi.jpeg',
        caption: 'Thủ tướng Chính phủ Phạm Minh Chính dự sự kiện Ngày hội Khởi nghiệp quốc gia của học sinh, sinh viên lần thứ 4 tại tỉnh Vĩnh Phúc. Ảnh: VGP/Nhật Bắc'
    },
    {
        src: '/placeholder.svg?height=400&width=600',
        caption: 'Thủ tướng Chính phủ Phạm Minh Chính dự sự kiện Ngày hội Khởi nghiệp quốc gia của học sinh, sinh viên lần thứ 4 tại tỉnh Vĩnh Phúc. Ảnh: VGP/Nhật Bắc'
    },
    {
        src: '/placeholder.svg?height=400&width=600',
        caption: 'Thủ tướng Chính phủ Phạm Minh Chính dự sự kiện Ngày hội Khởi nghiệp quốc gia của học sinh, sinh viên lần thứ 4 tại tỉnh Vĩnh Phúc. Ảnh: VGP/Nhật Bắc'
    },
    {
        src: '/placeholder.svg?height=400&width=600',
        caption: 'Thủ tướng Chính phủ Phạm Minh Chính dự sự kiện Ngày hội Khởi nghiệp quốc gia của học sinh, sinh viên lần thứ 4 tại tỉnh Vĩnh Phúc. Ảnh: VGP/Nhật Bắc'
    },
    {
        src: '/placeholder.svg?height=400&width=600',
        caption: 'Thủ tướng Chính phủ Phạm Minh Chính dự sự kiện Ngày hội Khởi nghiệp quốc gia của học sinh, sinh viên lần thứ 4 tại tỉnh Vĩnh Phúc. Ảnh: VGP/Nhật Bắc'
    }
];

let currentPhotoIndex = 0;

// Lightbox functionality
function openLightbox(index) {
    currentPhotoIndex = index;
    updateLightboxContent();
    document.getElementById('lightbox').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function updateLightboxContent() {
    const lightboxImage = document.getElementById('lightboxImage');
    const imageCounter = document.getElementById('imageCounter');
    const imageCaption = document.getElementById('imageCaption');

    lightboxImage.src = photos[currentPhotoIndex].src;
    lightboxImage.alt = photos[currentPhotoIndex].caption;
    imageCounter.textContent = `${currentPhotoIndex + 1} / ${photos.length}`;
    imageCaption.textContent = photos[currentPhotoIndex].caption;
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updateLightboxContent();
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updateLightboxContent();
}

// Social sharing functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`, '_blank', 'width=600,height=400');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank', 'width=600,height=400');
}

document.addEventListener('DOMContentLoaded', function() {
    // Lightbox controls
    document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
    document.getElementById('nextPhoto').addEventListener('click', nextPhoto);
    document.getElementById('prevPhoto').addEventListener('click', prevPhoto);

    // Close lightbox when clicking outside image
    document.getElementById('lightbox').addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!document.getElementById('lightbox').classList.contains('hidden')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevPhoto();
                    break;
                case 'ArrowRight':
                    nextPhoto();
                    break;
            }
        }
    });
}); 