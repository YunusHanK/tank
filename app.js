document.addEventListener("DOMContentLoaded", function() {
    const entryScreen = document.getElementById('entry-screen');
    const mainContent = document.getElementById('main-content');

    // Simulate loading and transition from entry screen to main content
    setTimeout(() => {
        entryScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000);  // 3 seconds delay before showing the main content
});
