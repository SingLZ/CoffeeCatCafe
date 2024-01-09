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
            const imageElement = document.createElement('img');
	    const linkElement = document.createElement('a');
	    linkElement.href = `coffee-details.html?id=${coffeeData.id}`;
	    
	
	    imageElement.style.height = '400px';
	    imageElement.style.width = 'auto';
    

            titleElement.innerText = coffeeData.title
            



	    if (coffeeData.image) {
            	imageElement.src = coffeeData.image;
            	imageElement.alt = coffeeData.title || 'Coffee Image';
            } else {
            
            	imageElement.src = 'placeholder-image.jpg';
            	imageElement.alt = 'Placeholder Image';
            }


		linkElement.appendChild(titleElement);
		linkElement.appendChild(imageElement);
           
            
        	coffeeContainer.appendChild(linkElement);
	
        	coffeeContainer.appendChild(separatorElement);

        });
}

renderCoffeeData();