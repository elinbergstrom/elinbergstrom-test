document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Tack för ditt meddelande, ' + name + '! Vi kommer att kontakta dig snart.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Vänligen fyll i alla fält.');
    }
});
