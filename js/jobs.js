// on window load
window.addEventListener('load', () => {
    // get the jobs container
    const jobsContainer = document.querySelector('.jobs-container');

    // fetch the jobs data from the API
    fetch('./data/job-history.json')
        .then(response => response.json())
        .then(jobs => {
            // loop through each job and create a job card
            jobs.forEach(job => {
                const jobCard = document.createElement('div');
                jobCard.className = 'job-container';

                const imageDiv = document.createElement('div');
                imageDiv.className = 'job-image';
                imageDiv.innerHTML = `
                    <img src="${job.url}" alt="${job.company}">
                `;

                const contentDiv = document.createElement('div');
                contentDiv.className = 'job-details';
                contentDiv.innerHTML = `
                    <h3>${job.title}</h3>
                    <p><strong>Company:</strong> ${job.company} | ${job.location}</p>
                    <p>${job.dates}</p>
                    <p>${job.description}</p>
                `;

                const techDiv = document.createElement('div');
                techDiv.className = 'tech-stack';

                job.techStack.forEach(tech => {
                    const techItem = document.createElement('div');
                    techItem.className = 'tech-item';
                    techItem.textContent = tech;
                    techDiv.appendChild(techItem);
                });

                jobCard.appendChild(imageDiv);
                jobCard.appendChild(contentDiv);
                jobCard.appendChild(techDiv);

                jobsContainer.appendChild(jobCard);
            });


        })
        .catch(error => console.error('Error fetching jobs:', error));
});