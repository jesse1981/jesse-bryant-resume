// on window load
window.addEventListener('load', () => {
    // get the contact container
    const contactContainer = document.querySelector('.contact-info');

    // fetch the contact data from the API
    fetch('./data/contact.json')
        .then(response => response.json())
        .then(contact => {
            // create a contact card
            const contactCard = document.createElement('div');
            contactCard.className = 'contact-card';
            for (const key in contact) {
                if (contact.hasOwnProperty(key)) {
                    const value = contact[key];
                    const p = document.createElement('p');
                    p.innerHTML = `<strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}`;
                    contactCard.appendChild(p);
                }
            }
            contactContainer.appendChild(contactCard);
        })
        .catch(error => console.error('Error fetching contact information:', error));
});