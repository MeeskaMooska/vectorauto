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

    try {
        const response = await fetch('/.netlify/functions/emailContact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formInfo),
        });

        const data = await response.json();
        console.log('Response:', data);
    } catch (error) {
        console.error('Error:', error);
    }
});