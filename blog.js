function showMore(postId) {
    const moreContent = document.getElementById(`more-${postId}`);
    if (moreContent.style.display === 'block') {
        moreContent.style.display = 'none';
    } else {
        moreContent.style.display = 'block';
    }
}
var button = document.querySelector('#' + postId + ' .read-more');
button.classList.toggle('clicked');

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    formMessage.textContent = '';

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill out all fields.';
        return false;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    formMessage.textContent = 'Your message has been sent!';
    return false; // Prevent form submission for demonstration
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
