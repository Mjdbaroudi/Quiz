function validateForm(event) {
    // Prevent form from actually submitting
    event.preventDefault();

    // Clear previous error messages and success message
    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');
    document.getElementById('successMessage').textContent = '';
    let isValid = true;

    // Validate first name
    const firstName = document.getElementById('firstName').value;
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById('firstNameError').textContent = "First name must contain only letters.";
        document.getElementById('firstNameError').style.display = 'inline';
        isValid = false;
    }

    // Validate last name
    const lastName = document.getElementById('lastName').value;
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        document.getElementById('lastNameError').textContent = "Last name must contain only letters.";
        document.getElementById('lastNameError').style.display = 'inline';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    }

    // Validate required questions
    if (!document.querySelector('input[name="question1"]:checked')) {
        document.getElementById('question1Error').textContent = "This question is required.";
        document.getElementById('question1Error').style.display = 'inline';
        isValid = false;
    }

    if (!document.querySelector('input[name="question4"]:checked')) {
        document.getElementById('question4Error').textContent = "This question is required.";
        document.getElementById('question4Error').style.display = 'inline';
        isValid = false;
    }

    // Show success message if all fields are valid
    if (isValid) {
        document.getElementById('successMessage').textContent = "Information entered successfully!";
        document.getElementById('successMessage').style.display = 'block';
    }
}

// Attach the validateForm function to the form's submit event
document.getElementById('quizForm').addEventListener('submit', validateForm);
