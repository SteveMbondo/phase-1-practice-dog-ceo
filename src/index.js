console.log('%c HI', 'color: firebrick')
// Add JavaScript that:
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.querySelector('#dog-image-container');
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                dogImageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching dog images:', error));

    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const dogBreedsList = document.querySelector('#dog-breeds');
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                dogBreedsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching dog breeds:', error));

    dogBreedsList.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; 
        }
    });

    const breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', event => {
        const selectedLetter = event.target.value;
        const allBreeds = dogBreedsList.querySelectorAll('li');
        allBreeds.forEach(breed => {
            if (breed.textContent.startsWith(selectedLetter)) {
                breed.style.display = 'list-item';
            } else {
                breed.style.display = 'none';
            }
        });
    });
});

// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array
