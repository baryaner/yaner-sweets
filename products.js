// Products Management - Displays products from local data file

// Get products based on category filter
function getProducts(category = null) {
  let filteredProducts = PRODUCTS.filter(p => p.inStock);

  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  return filteredProducts;
}

// Display products in the grid
function displayProducts(category = null) {
  const container = document.getElementById('products-grid');

  if (!container) {
    console.error('Products grid container not found');
    return;
  }

  // Get products (filtered by category if specified)
  const products = getProducts(category);

  // Clear container
  container.innerHTML = '';

  // Check if any products were returned
  if (products.length === 0) {
    container.innerHTML = '<div class="no-products">אין מוצרים זמינים בקטגוריה זו</div>';
    return;
  }

  // Create and append product cards
  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

// Create a product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('dir', 'rtl');
  card.setAttribute('data-product-id', product.id);

  // Build card HTML
  card.innerHTML = `
    <img src="${product.image}" alt="${product.nameHe}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400?text=No+Image'">
    <div class="product-info">
      <h3>${product.nameHe}</h3>
      <p class="price">₪${product.price.toFixed(2)}</p>
      ${product.descriptionHe ? `<p class="description">${product.descriptionHe}</p>` : ''}
      <button class="add-to-cart-btn" data-product-id="${product.id}">
        הוסף לסל
      </button>
    </div>
  `;

  // Add click handler for "Add to Cart" button
  const addToCartBtn = card.querySelector('.add-to-cart-btn');
  addToCartBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    handleAddToCart(product);
  });

  return card;
}

// Handle add to cart action (placeholder for now)
function handleAddToCart(product) {
  // This will be implemented when we add shopping cart functionality
  console.log('Adding to cart:', product);

  // Show feedback to user
  const feedback = `${product.nameHe} נוסף לסל!`;
  alert(feedback);

  // TODO: In the future, this will:
  // - Add product to cart state
  // - Update cart icon count
  // - Show visual feedback (toast notification)
  // - Save to localStorage
}

// Set up category filter buttons
function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));

      // Add active class to clicked button
      e.target.classList.add('active');

      // Get category from data attribute
      const category = e.target.dataset.category;

      // Display filtered products
      displayProducts(category || null);
    });
  });
}

// Initialize products when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Check if products data is loaded
  if (typeof PRODUCTS === 'undefined') {
    console.error('Products data not loaded. Make sure products-data.js is included before products.js');
    const container = document.getElementById('products-grid');
    if (container) {
      container.innerHTML = '<div class="no-products">שגיאה בטעינת המוצרים</div>';
    }
    return;
  }

  // Display products and set up filters
  displayProducts();
  setupFilters();

  console.log(`Loaded ${PRODUCTS.length} products across ${Object.keys(CATEGORIES).length} categories`);
});
