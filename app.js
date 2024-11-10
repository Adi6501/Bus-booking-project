// List of bus operators
const busOperators = [
    'VRL Travelers',
    'Laxman Travelers',
    'SRS Travels',
    'KPN Travels',
    'Orange Tours and Travels',
    'KSRTC',
    'Neeta Tours and Travels'
];

// Function to filter bus operators based on search input
function searchBus() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; // Clear previous results

    // Filter and display matching bus operators
    const filteredOperators = busOperators.filter(operator =>
        operator.toLowerCase().includes(searchInput)
    );

    if (filteredOperators.length > 0) {
        const ul = document.createElement('ul');
        filteredOperators.forEach(operator => {
            const li = document.createElement('li');
            li.textContent = operator;
            li.addEventListener('click', function() {
                selectBus(operator); // Call the selectBus function on click
            });
            ul.appendChild(li);
        });
        searchResults.appendChild(ul);
    } else if (searchInput !== '') {
        searchResults.innerHTML = '<p>No results found</p>';
    }
}

// Function to handle redirection after selecting a bus (in a new tab)
function selectBus(operator) {
    // Open the bus details page in a new tab
    window.open('busDetails.html?bus=' + encodeURIComponent(operator), '_blank');
}


// Function to show search results box when clicking the search bar
function showSearchResults() {
    const searchResults = document.getElementById('search-results');
    searchResults.style.display = 'block'; // Show search results
}

// Function to hide search results box when clicking outside the search bar
function hideSearchResults() {
    const searchResults = document.getElementById('search-results');
    searchResults.style.display = 'none'; // Hide search results
}

// Event listeners to show/hide search results
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('click', showSearchResults);
searchBar.addEventListener('keyup', searchBus);

// Hide the search results when clicking outside the search bar
document.addEventListener('click', function(event) {
    if (!searchBar.contains(event.target) && !document.getElementById('search-results').contains(event.target)) {
        hideSearchResults();
    }
});
