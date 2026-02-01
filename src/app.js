// Sample list of dogwashers for demonstration
const dogwashers = [
    { name: 'Doggie Cleaners', location: 'New York', rating: 4.5 },
    { name: 'Paws & Claws', location: 'Los Angeles', rating: 4.7 },
    { name: 'Furry Friends Wash', location: 'San Francisco', rating: 4.6 }
];

// Function to find dogwashers based on input location
function findDogwashers() {
    const locationInput = document.getElementById('locationInput').value.trim().toLowerCase();
    const resultList = dogwashers.filter(dw => dw.location.toLowerCase().includes(locationInput));

    displayDogwashers(resultList);
}

// Function to display the list of dogwashers
function displayDogwashers(dogwashers) {
    const dogwasherList = document.getElementById('dogwasherList');
    dogwasherList.innerHTML = '';

    if (dogwashers.length === 0) {
        dogwasherList.innerHTML = '<p>No dogwashers found.</p>';
        return;
    }

    dogwashers.forEach(dw => {
        const dogwasherElement = document.createElement('div');
        dogwasherElement.innerHTML = `
            <h3>${dw.name}</h3>
            <p>Location: ${dw.location}</p>
            <p>Rating: ${dw.rating}</p>
        `;
        dogwasherList.appendChild(dogwasherElement);
    });
}