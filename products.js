// Products Management - Fetches and displays products from Sanity CMS

// Fetch products from Sanity API
async function fetchProducts(category = null) {
  try {
    // Build GROQ query
    let query = '*[_type == "product" && inStock == true] | order(_createdAt desc)';

    if (category) {
      query = `*[_type == "product" && inStock == true && category->slug.current == "${category}"] | order(_createdAt desc)`;
    }

    // Build API URL
    const url = `https://${SANITY_CONFIG.projectId}.api.sanity.io/${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${encodeURIComponent(query)}`;

    // Fetch data
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.result || [];

  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Display products in the grid
async function displayProducts(category = null) {
  const container = document.getElementById('products-grid');

  if (!container) {
    console.error('Products grid container not found');
    return;
  }

  // Show loading state
  container.innerHTML = '<div class="loading">טוען מוצרים...</div>';

  // Fetch products
  const products = await fetchProducts(category);

  // Clear container
  container.innerHTML = '';

  // Check if any products were returned
  if (products.length === 0) {
    container.innerHTML = '<div class="no-products">אין מוצרים זמינים כרגע</div>';
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

  // Get image URL
  const imageUrl = product.image
    ? getSanityImageUrl(product.image, 300, 300)
    : 'https://via.placeholder.com/300x300?text=No+Image';

  // Build card HTML
  card.innerHTML = `
    <img src="${imageUrl}" alt="${product.nameHe || product.nameEn || 'Product'}" loading="lazy">
    <div class="product-info">
      <h3>${product.nameHe || product.nameEn || 'ללא שם'}</h3>
      <p class="price">₪${product.price ? product.price.toFixed(2) : '0.00'}</p>
      ${product.descriptionHe ? `<p class="description">${product.descriptionHe}</p>` : ''}
      <button class="add-to-cart-btn" data-product-id="${product._id}">
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
  alert(`${product.nameHe || product.nameEn} נוסף לסל!`);
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
  // Check if Sanity config is set
  if (SANITY_CONFIG.projectId === 'YOUR_PROJECT_ID') {
    console.warn('⚠️ Please update SANITY_CONFIG.projectId in sanity-config.js');
    const container = document.getElementById('products-grid');
    if (container) {
      container.innerHTML = '<div class="no-products">אנא הגדר את Project ID של Sanity</div>';
    }
    return;
  }

  // Display products and set up filters
  displayProducts();
  setupFilters();
});
