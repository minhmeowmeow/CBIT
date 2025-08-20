function openDocument(docId) {
    // Navigate to document detail page
    window.location.href = `document-detail.html?id=${docId}`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchButton = document.querySelector('button[class*="bg-blue-600"]');
    searchButton.addEventListener('click', function() {
        // Implement search logic here
        console.log('Search clicked');
    });

    // Pagination functionality
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', function() {
            if (!this.querySelector('i')) {
                // Remove active class from all buttons
                document.querySelectorAll('nav button').forEach(btn => {
                    btn.classList.remove('bg-blue-600', 'text-white');
                    btn.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-300');
                });
                
                // Add active class to clicked button
                this.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-300');
                this.classList.add('bg-blue-600', 'text-white');
            }
        });
    });

    // Hover effects for document rows
    // Đã xóa hiệu ứng hover
}); 