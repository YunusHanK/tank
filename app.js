// Optional: Adding a subtle load animation to make the login box appear smoother
document.addEventListener("DOMContentLoaded", function() {
    const loginContainer = document.querySelector('.login-container');
    loginContainer.style.opacity = 0;
    setTimeout(() => {
        loginContainer.style.opacity = 1;
        loginContainer.style.transform = 'scale(1)';
    }, 300);
});
