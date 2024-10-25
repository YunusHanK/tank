document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        if (username === "yunus" && password === "123") {
            document.body.classList.remove('error');
            document.body.classList.add('success');
            
            setTimeout(() => {
                alert("Giriş yaptınız");
            }, 3000); // 3 seconds delay for the success message
        } else {
            document.body.classList.remove('success');
            document.body.classList.add('error');
        }
    });
});
