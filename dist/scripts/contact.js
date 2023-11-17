const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone').value;
    let preferredDate = document.getElementById('preferred-date').value;
    let contactTime = document.getElementById('contact-time').value;
    let desiredService = document.getElementById('desired-service').value;
    let message = document.getElementById('message').value;
    let submit = document.getElementById('submit');

    const formInfo = {
        firstName,
        lastName,
        email,
        phoneNumber,
        preferredDate,
        contactTime,
        desiredService,
        message,
    };

    for (const field in formInfo) {
        if (formInfo[field].trim() === '') {
            formInfo[field] = "N/A";
        }
    }

    submit.disabled = true;
    submit.value = 'Sending...';

    try {
        const response = await fetch('/.netlify/functions/emailContact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formInfo),
        });

        const data = await response.json();
        alert(data.message);
        submit.value = 'Submit';
    } catch (error) {
        alert('An error occurred. Please try again.');
        submit.value = 'Submit';
    }
});