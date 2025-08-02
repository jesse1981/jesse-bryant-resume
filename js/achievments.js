// on window load
window.addEventListener('load', () => {
    // get the jobs container
    const achievementsContainer = document.querySelector('.achievements-container');

    // fetch the achievements data from the API
    fetch('./data/achievements.json')
        .then(response => response.json())
        .then(achievements => {
            // create an unordered list for achievements
            const listObj = document.createElement('ul');

            // loop through each achievment and create an achievment card
            achievements.forEach(achievment => {
                const listItem = document.createElement('li');
                listItem.className = 'achievment-item';
                listItem.innerHTML = achievment;

                listObj.appendChild(listItem);
            });
            achievementsContainer.appendChild(listObj);
        }
    )        
    .catch(error => console.error('Error fetching achievements:', error));
});