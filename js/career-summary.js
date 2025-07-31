// on window load
window.addEventListener('load', () => {
    // get the contact container
    const summaryContainer = document.querySelector('.career-summary-container');

    // fetch the contact data from the API
    fetch('./data/career-summary.json')
        .then(response => response.json())
        .then(summary => {
            // create a summary card
            const summaryCard = document.createElement('div');
            summaryCard.className = 'summary-card';
            const p = document.createElement('p');
            p.innerHTML = summary.careerSummary;
            summaryCard.appendChild(p);
            summaryContainer.appendChild(summaryCard);
        })
        .catch(error => console.error('Error fetching summary information:', error));
});