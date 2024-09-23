document.querySelector('.foot-panel1').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cart functionality with LocalStorage
let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
document.querySelector('#nav-cart').addEventListener('click', function() {
    alert('You have ' + cartCount + ' items in your cart.');
});

// Add to cart functionality for product boxes
document.querySelectorAll('.box').forEach(function(box) {
    box.addEventListener('click', function() {
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        alert('Item added to cart! Total items: ' + cartCount);
    });
});

// Search bar suggestions
const suggestions = ["Clothes", "Health & Personal Care", "Furniture", "Electronics", "Beauty picks", "Pet Care", "Toys", "Fashion Trends"];
const searchInput = document.querySelector('#search-input');
const searchIcon = document.querySelector('#search-icon');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query));

    if (filteredSuggestions.length > 0) {
        alert('Suggestions: ' + filteredSuggestions.join(', '));
    } else if (query.length > 0) {
        alert('No suggestions found.');
    }
});

// Hover effect on product boxes
document.querySelectorAll('.box').forEach(function(box) {
    box.addEventListener('mouseover', function() {
        box.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.2)';
        box.style.transform = 'scale(1.05)';
        box.querySelector('.box-content p').innerHTML += ' | Great Deals!';
    });
    box.addEventListener('mouseout', function() {
        box.style.boxShadow = 'none';
        box.style.transform = 'scale(1)';
        // Reset the additional content added on hover
        box.querySelector('.box-content p').innerHTML = box.querySelector('.box-content p').innerHTML.replace(' | Great Deals!', '');
    });
});

// Toggle button functionality
document.getElementById('toggle-btn').addEventListener('click', function() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    document.getElementById('hero-msg').classList.toggle('dark-mode');
    document.querySelectorAll('.shopsection').forEach(function(shopsection) {
        shopsection.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.box').forEach(function(box) {
        box.classList.toggle('dark-mode');
    });
    
    // Change button text based on mode
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('toggle-btn').textContent = 'Light Mode';
    } else {
        document.getElementById('toggle-btn').textContent = 'Dark Mode';
    }
});

// Show suggestions when the search box is clicked
function showSuggestions() {
    document.getElementById('suggestions').style.display = 'block'; // Show suggestions
}

// Hide suggestions when clicking outside the search box
document.addEventListener('click', function(event) {
    const searchBox = document.getElementById('search-input');
    const suggestions = document.getElementById('suggestions');
    
    // Check if the click is outside the search box and suggestions
    if (!searchBox.contains(event.target) && !suggestions.contains(event.target)) {
        suggestions.style.display = 'none'; // Hide suggestions
    }
});

// Get the "Deliver to India" element
const deliverToIndia = document.getElementById('nav-add'); // The "Deliver to India" element

// Show a prompt when "Deliver to India" is clicked
deliverToIndia.addEventListener('click', function() {
    const pinCode = prompt('Enter Your PIN:');
    if (pinCode) {
        alert('You entered PIN: ' + pinCode);
    } else {
        alert('No PIN entered.');
    }
});

// Get the "Returns & Orders" element
const returnsOrders = document.getElementById('nav-returns'); // The "Returns & Orders" element

// Show an alert when "Returns & Orders" is clicked
returnsOrders.addEventListener('click', function() {
    alert('Please sign in to continue. Sign in using Email or mobile phone number');
});


