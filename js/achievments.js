// on window load
window.addEventListener('load', () => {
    // get the jobs container
    const achievmentsContainer = document.querySelector('.achievments-container');

    // fetch the achievments data from the API
    fetch('./data/achievments.json')
        .then(response => response.json())
        .then(achievments => {
            // create an unordered list for achievments
            const listObj = document.createElement('ul');

            // loop through each achievment and create an achievment card
            achievments.forEach(achievment => {
                const listItem = document.createElement('li');
                listItem.className = 'achievment-item';
                listItem.innerHTML = achievment;

                listObj.appendChild(listItem);
            });
            achievmentsContainer.appendChild(listObj);
        }
    )        
    .catch(error => console.error('Error fetching achievments:', error));
});