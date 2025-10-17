export const UI = () => {
    const uiSelectors = () => {
        return{
        body: document.getElementById('bodyTag'),
            // index.html
        popularContainer: document.getElementById("popular-cards"),
        activeWearContainer: document.getElementById("activewear-cards"),
        // products.html
        productContainer : document.getElementById("product-cards"),
        // Filter category checkboxes (products.html)
        get categoriesFilter() {
            return document.querySelectorAll('input[name="category"]:checked')
        },
        categoriesProducts: document.getElementById("categories"),
        plusIcon: document.getElementById("filter-toggle"),
        applyFilter: document.querySelector("#apply-filter"),
        resetFilter: document.querySelector("#reset-filter"),
        // reviews.html
        reviewsContainer: document.getElementById("reviews-container"),

        // Side Menu Icons (all htmls)
        sideMenuIcon: document.getElementById('side-menu-icon'),
        sideMenuOverlay: document.getElementById('side-menu-overlay'),
        sideMenu: document.getElementById('side-menu'),
        sideMenuClose: document.getElementById('side-menu-close'),
        }
    }
    const uiCard = (cardType) => {
        return ` 
      <a href="#"
        id="card-${cardType.id}"
        class="group relative flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent">

        <!-- Image -->
        <div class="h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
            <img src="${cardType.image_url}" 
                  alt="${cardType.name}" 
                  loading="lazy"
                  class="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>

        <!-- Content -->
        <div class="p-4 flex flex-col space-y-2 text-main flex-grow">
            <h3 class="text-lg font-semibold ">${cardType.name}</h3>
            <p class="text-sm text-gray-500 font-medium">${cardType.category}</p>
            <p class="text-sm text-gray-600 line-clamp-2">${cardType.description}</p>

            <div class="flex items-center gap-1 text-sm text-accent">
                <i class="fa-solid fa-star"></i>
                <span class="font-medium">${cardType.rating}</span>
                <span class="text-gray-500">(${cardType.reviews_count})</span>
            </div>

            <p class="text-lg font-bold text-primary mt-auto">$${cardType.price}</p>
        </div>

        <!-- Add to Cart Button -->
        <button
            class="absolute bottom-0 left-0 w-full bg-primary text-white font-medium py-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-main">
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
      </a>`
    }
    const reviewUICard = (review) => {
        return `
        <div class="max-w-md bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300">
      <!-- Product Info -->
      <div class="flex justify-between items-start mb-4">
        <div>
          <h2 class="text-lg font-semibold text-gray-900">${review.productName}</h2>
          <p class="text-sm text-gray-500">Category: <span class="font-medium text-gray-700">${review.productCategory}</span></p>
        </div>
        <p class="text-xs bg-blue-100 text-blue-700 p-1.5 rounded-md font-semibold md:px-2 md:py-1 md:rounded-full">Verified Purchase</p>
      </div>

      <!-- User Info -->
      <div class="flex items-center space-x-3 mb-3">
        <img src="${review.image_url}" alt="User" class="w-16 h-16 rounded-full border">
        <h3 class="text-gray-800 font-semibold">${review.userName}</h3>
      </div>

      <!-- Rating -->
      <div class="flex items-center">
        <div id="stars" class="">${review.stars}</div>
        <span class="ml-2 mt-1 text-sm text-gray-700 font-semibold">${review.rating} / 5</span>
      </div>

      <!-- Title -->
      <h4 class="text-md font-semibold text-gray-900 mt-2">${review.title}</h4>

      <!-- Comment -->
      <p class="mt-2 text-gray-700 leading-relaxed">${review.comment}</p>
    </div>`
    }
    return {
        uiSelectors,
        uiCard,
        reviewUICard,
    }
}