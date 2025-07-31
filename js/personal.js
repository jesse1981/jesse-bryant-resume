// on window load
window.addEventListener('load', () => {
    // get the jobs container
    const personalContainer = document.querySelector('.personal-interests-container');

    // fetch the personal data from the API
    fetch('./data/personal-interests.json')
        .then(response => response.json())
        .then(personal => {
            // create an unordered list for personal
            const listObj = document.createElement('ul');

            // loop through each achievment and create an achievment card
            personal.forEach(achievment => {
                const listItem = document.createElement('li');
                listItem.className = 'interests-item';
                listItem.innerHTML = achievment;

                listObj.appendChild(listItem);
            });
            personalContainer.appendChild(listObj);
        }
    )        
    .catch(error => console.error('Error fetching personal:', error));
});