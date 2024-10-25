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
            // Başarılı giriş sonrası animasyonu etkinleştir
            loginContainer.classList.add('success');
            
            // 3 saniye sonra kaybolma animasyonu
            setTimeout(() => {
                loginContainer.classList.add('disappear');
                setTimeout(() => {
                    window.location.href = "https://www.slechi.net.tr";
                }, 1000);
            }, 3000);
        } else {
            alert("Yanlış kullanıcı adı veya şifre!");
        }
    });
});
