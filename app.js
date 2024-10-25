document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const message = document.getElementById('message');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        if (username === "yunus" && password === "123") {
            document.body.classList.remove('error');
            document.body.classList.add('success');

            // Show success message and redirect after 3 seconds
            message.classList.add('visible');
            message.textContent = "Giriş yaptınız!";
            
            setTimeout(() => {
                window.location.href = "https://www.slechi.net.tr"; // Redirect to a new page
            }, 3000);
        } else {
            document.body.classList.remove('success');
            document.body.classList.add('error');
            message.classList.add('visible');
            message.textContent = "Yanlış kullanıcı adı veya şifre!";
            setTimeout(() => message.classList.remove('visible'), 2000); // Hide after 2 seconds
        }
    });
});
