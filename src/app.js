document.getElementById('searchButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }
    
    fetchDogWashers(location);
});

function fetchDogWashers(location) {
    const apiUrl = `https://api.example.com/dog-washers?location=${encodeURIComponent(location)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (data.length === 0) {
        resultsDiv.innerHTML = '<p>No dog washers found.</p>';
        return;
    }

    const list = document.createElement('ul');
    data.forEach(dogWasher => {
        const listItem = document.createElement('li');
        listItem.textContent = `${dogWasher.name} - ${dogWasher.address} - ${dogWasher.phone}`;
        list.appendChild(listItem);
    });

    resultsDiv.appendChild(list);
}