const closeBtn = document.querySelector('.modal__header i');
const modal = document.querySelector('.modal');
const signupBtn = document.querySelector('.signup');

signupBtn.onclick = () => {
    modal.style.display = 'flex';
}

closeBtn.onclick = () => {
    modal.style.display = 'none';
}

