document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Vui lòng điền vào cả hai trường đăng nhập.');
            return;
        }

        console.log("Username: " + username + ", Password: " + password);
    });

    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("registerUsername").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Vui lòng điền vào tất cả các trường đăng ký.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Vui lòng nhập một địa chỉ email hợp lệ.');
            return;
        }

        if (password.length < 6) {
            alert('Mật khẩu phải chứa ít nhất 6 ký tự.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Mật khẩu xác nhận không khớp.');
            return;
        }

        // Perform registration validation (for demo, just log to console)
        console.log("Username: " + username + ", Email: " + email + ", Password: " + password);
    });
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}


const closeBtn = document.querySelector('.modal__header i');
const modal = document.querySelector('.modal');
const signupBtn = document.querySelector('.signup');

signupBtn.onclick = () => {
    modal.style.display = 'flex';
}

closeBtn.onclick = () => {
    modal.style.display = 'none';
}

