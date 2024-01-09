function getParameterByName(name) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(name);
}

const coffeeId = getParameterByName('id');
const coffeeContainer = document.getElementById('coffee-detail-container');

fetch('https://api.sampleapis.com/coffee/iced')
    .then(response => response.json())
    .then(coffeeDataArray => {
	const desiredCoffee = coffeeDataArray.find(coffee => coffee.id === parseInt(coffeeId));
        
    if(desiredCoffee) {
	const titleElement = document.createElement('h1');
        const imageElement = document.createElement('img');
	const descriptionElement = document.createElement('p');
        const ingredientsListElement = document.createElement('ul');

	imageElement.style.height = '400px';
	imageElement.style.width = 'auto';

	titleElement.innerText = desiredCoffee.title
	descriptionElement.innerText = desiredCoffee.description;
	desiredCoffee.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.innerText = ingredient;
                ingredientsListElement.appendChild(listItem);
		listItem.style.marginLeft = '40%';
		listItem.style.marginRight = '40%';
	})	

	if (desiredCoffee.image) {
            imageElement.src = desiredCoffee.image;
            imageElement.alt = desiredCoffee.title || 'Coffee Image';
        } else {
            
            imageElement.src = 'placeholder-image.jpg';
            imageElement.alt = 'Placeholder Image';
        }

	coffeeContainer.appendChild(titleElement);
        coffeeContainer.appendChild(descriptionElement);
        coffeeContainer.appendChild(ingredientsListElement);
        coffeeContainer.appendChild(imageElement);
	

	}
    })
    .catch(error => {
        console.error('Error fetching coffee details:', error.message);
    });



document.getElementById('backButton').addEventListener('click', function() {
	history.back();
	
	});
