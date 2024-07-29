var nameError = document.getElementById('name_error');
var emailError = document.getElementById('email_error');
var messageError = document.getElementById('message_error');
var submitError = document.getElementById('submit_error');

function validateName() {
    var name = document.getElementById('contact_name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required.";
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Write Your Full Name.";
        return false;
    }
    nameError.innerHTML = "Valid";
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact_email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required.';
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = 'Valid';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact_message').value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = 'Valid';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill out the form correctly.';
        setTimeout(function() {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
    return true;
}
