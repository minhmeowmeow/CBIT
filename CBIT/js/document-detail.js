document.addEventListener('DOMContentLoaded', function() {
    // Get document ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const docId = urlParams.get('id');
    
    // Load document details based on ID (in a real app, this would fetch from API)
    if (docId) {
        console.log('Loading document:', docId);
    }

    // Download functionality
    document.querySelector('button[class*="text-blue-600"]').addEventListener('click', function() {
        // In a real application, this would trigger file download
        alert('Tải xuống văn bản...');
    });

    // Related documents click handlers
    document.querySelectorAll('.border.rounded-lg.p-4').forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            console.log('Clicked on related document:', title);
            // In a real application, this would navigate to the related document
        });
    });

    // Search functionality in sidebar
    document.querySelector('.bg-blue-600.text-white.px-4.py-2').addEventListener('click', function() {
        // Implement search logic
        console.log('Search clicked from sidebar');
        window.location.href = 'documents.html';
    });

}); 