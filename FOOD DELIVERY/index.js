// Biryani Menu Data
const foodItems = [
    { id: 1, name: 'Ambur Biryani', rating: 4.3, price: 130 },
    { id: 2, name: 'Hyderabadi Biryani', rating: 4.3, price: 250 },
    { id: 3, name: 'Egg Biryani', rating: 4.3, price: 100 },
    { id: 4, name: 'Goan Fish Biryani', rating: 4.3, price: 300 },
    { id: 5, name: 'Mutton Biryani', rating: 4.3, price: 250 },
    { id: 6, name: 'Kamrupi Biryani', rating: 4.3, price: 250 },
    { id: 7, name: 'Kashmiri Biryani', rating: 4.3, price: 350 },
    { id: 8, name: 'Memoni Biryani', rating: 4.3, price: 200 },
    { id: 9, name: 'Mughlai Biryani', rating: 4.3, price: 350 }
];

// Display Food Items Function
function displayFoodItems() {
    const foodContainer = document.getElementById('food-container');
    
    foodItems.forEach((item, index) => {
        // Create food item div
        const foodDiv = document.createElement('div');
        foodDiv.className = `food-item food-item-${index + 1}`;
        
        // Populate the food item with details
        foodDiv.innerHTML = `
            <div class="food-details">
                <h3>${item.name}</h3>
                <p>Rating: ${item.rating}</p>
                <p class="price">Price: ₹${item.price}</p>
            </div>
        `;
        
        // Append to container
        foodContainer.appendChild(foodDiv);
    });
}

// Load food items when the document is ready
document.addEventListener('DOMContentLoaded', displayFoodItems);
