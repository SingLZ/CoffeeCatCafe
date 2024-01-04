console.log('JavaScript file linked successfully!');


async function renderCoffeeData() {
            try {
               
                const response = await fetch('https://api.sampleapis.com/coffee/iced');
		if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                
                const coffeeData = await response.json();
		displayCoffeeData(coffeeData);
                
        } catch (error) {
		console.error('Error fetching coffee data:', error.message);
            }
}

function displayCoffeeData(coffeeData) {
           
            const coffeeContainer = document.getElementById('coffee-container');
	    const separatorElement = document.createElement('hr');
	    separatorElement.style.border = '2px solid white';
	    coffeeContainer.appendChild(separatorElement);

	    coffeeData.forEach(coffeeData => {

            const titleElement = document.createElement('h2');
            const descriptionElement = document.createElement('p');
            const ingredientsListElement = document.createElement('ul');
            const imageElement = document.createElement('img');
	    imageElement.style.height = '400px';
	    imageElement.style.width = 'auto';
    

            titleElement.innerText = coffeeData.title
            descriptionElement.innerText = coffeeData.description;

            if (Array.isArray(coffeeData.ingredients)) {
            coffeeData.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.innerText = ingredient;
                ingredientsListElement.appendChild(listItem);
		listItem.style.marginLeft = '40%';
		listItem.style.marginRight = '40%';
            });

		
         
	    

        } else {
            // Handle the case where ingredients is not an array
            const listItem = document.createElement('li');
            listItem.innerText = 'Ingredients Not Available';
            ingredientsListElement.appendChild(listItem);
        }



	if (coffeeData.image) {
            imageElement.src = coffeeData.image;
            imageElement.alt = coffeeData.title || 'Coffee Image';
        } else {
            // Provide a placeholder image URL if coffeeData.image is not defined
            imageElement.src = 'placeholder-image.jpg';
            imageElement.alt = 'Placeholder Image';
        }



            // Append elements to the container
            coffeeContainer.appendChild(titleElement);
            coffeeContainer.appendChild(descriptionElement);
            coffeeContainer.appendChild(ingredientsListElement);
            coffeeContainer.appendChild(imageElement);
	
	const separatorElement = document.createElement('hr');
	separatorElement.style.border = '2px solid white';
        coffeeContainer.appendChild(separatorElement);

        });
}

renderCoffeeData();