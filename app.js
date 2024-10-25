document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginContainer = document.querySelector('.login-container');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        if (username === "yunus" && password === "123") {
            // Trigger circle transformation and rotation with scaling
            loginContainer.classList.add('success');
            
            // Redirect after 3 seconds
            setTimeout(() => {
                window.location.href = "https://www.slechi.net.tr";
            }, 3000);
        } else {
            alert("Yanlış kullanıcı adı veya şifre!");
        }
    });
});
