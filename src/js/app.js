import { apiData, popularData, activewearData, reviewsData } from "./api.js";
// Event Listeners
if (window.location.href.includes("index.html")) {
  document.addEventListener("DOMContentLoaded", displayPopularProducts);
  document.addEventListener("DOMContentLoaded", displayActiveWearProducts);
}
if (window.location.href.includes("products.html")) {
  document.addEventListener("DOMContentLoaded", displayProducts);
  document
    .querySelector("#apply-filter")
    .addEventListener("click", filterProducts);
  document
    .querySelector("#reset-filter")
    .addEventListener("click", resetFilters);
  document
    .getElementById("filter-toggle")
    .addEventListener("click", toggleFilter);
}
if (window.location.href.includes("reviews.html")) {
  document.addEventListener("DOMContentLoaded", displayReviews);
}
// Fetch Products
async function getAPIData() {
  try {
    const data = await apiData();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// Fetch Popular Products
async function getPopularData() {
  try {
    const data = await popularData();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// Fetch ActiveWear Products
async function getActiveWearData() {
  try {
    const data = await activewearData();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// Fetch User Reviews
async function getReviews() {
  try {
    const data = await reviewsData();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// Display Products
function displayProducts() {
  const productContainer = document.getElementById("product-cards");
  let productData = getAPIData().then((data) => {
    let products = data.products;
    products.forEach((product) => {
      productContainer.innerHTML += `      
            <!-- Product Card -->
      <a href="#"
        id="card-${product.id}"
        class="group relative flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent">

        <!-- Image -->
        <div class="h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
            <img src="${product.image_url}" 
                  alt="${product.name}" 
                  loading="lazy"
                  class="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>

        <!-- Content -->
        <div class="p-4 flex flex-col space-y-2 text-main flex-grow">
            <h3 class="text-lg font-semibold ">${product.name}</h3>
            <p class="text-sm text-gray-500 font-medium">${product.category}</p>
            <p class="text-sm text-gray-600 line-clamp-2">${product.description}</p>

            <div class="flex items-center gap-1 text-sm text-accent">
                <i class="fa-solid fa-star"></i>
                <span class="font-medium">${product.rating}</span>
                <span class="text-gray-500">(${product.reviews_count})</span>
            </div>

            <p class="text-lg font-bold text-primary mt-auto">$${product.price}</p>
        </div>

        <!-- Add to Cart Button -->
        <button
            class="absolute bottom-0 left-0 w-full bg-primary text-white font-medium py-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-main">
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
      </a>
    `;
    });
  });
}

// Display Popular Products
function displayPopularProducts() {
  const popularContainer = document.getElementById("popular-cards");
  let popularData = getPopularData().then((data) => {
    let products = data.popular;
    products.forEach((product) => {
      popularContainer.innerHTML += `      
            <!-- Product Card -->
      <a href="#"
        id="card-${product.id}"
        class="group relative flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent">

        <!-- Image -->
        <div class="h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
            <img src="${product.image_url}" 
                  alt="${product.name}" 
                  loading="lazy"
                  class="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>

        <!-- Content -->
        <div class="p-4 flex flex-col space-y-2 text-main flex-grow">
            <h3 class="text-lg font-semibold ">${product.name}</h3>
            <p class="text-sm text-gray-500 font-medium">${product.category}</p>
            <p class="text-sm text-gray-600 line-clamp-2">${product.description}</p>

            <div class="flex items-center gap-1 text-sm text-accent">
                <i class="fa-solid fa-star"></i>
                <span class="font-medium">${product.rating}</span>
                <span class="text-gray-500">(${product.reviews_count})</span>
            </div>

            <p class="text-lg font-bold text-primary mt-auto">$${product.price}</p>
        </div>

        <!-- Add to Cart Button -->
        <button
            class="absolute bottom-0 left-0 w-full bg-primary text-white font-medium py-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-main">
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
      </a>
    `;
    });
  });
}
// Display Popular Products
function displayActiveWearProducts() {
  const activeWearContainer = document.getElementById("activewear-cards");
  let popularData = getActiveWearData().then((data) => {
    let products = data.activewear;
    products.forEach((product) => {
      activeWearContainer.innerHTML += `      
            <!-- Product Card -->
      <a href="#"
        id="card-${product.id}"
        class="group relative flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent">

        <!-- Image -->
        <div class="h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
            <img src="${product.image_url}" 
                  alt="${product.name}" 
                  loading="lazy"
                  class="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>

        <!-- Content -->
        <div class="p-4 flex flex-col space-y-2 text-main flex-grow">
            <h3 class="text-lg font-semibold ">${product.name}</h3>
            <p class="text-sm text-gray-500 font-medium">${product.category}</p>
            <p class="text-sm text-gray-600 line-clamp-2">${product.description}</p>

            <div class="flex items-center gap-1 text-sm text-accent">
                <i class="fa-solid fa-star"></i>
                <span class="font-medium">${product.rating}</span>
                <span class="text-gray-500">(${product.reviews_count})</span>
            </div>

            <p class="text-lg font-bold text-primary mt-auto">$${product.price}</p>
        </div>

        <!-- Add to Cart Button -->
        <button
            class="absolute bottom-0 left-0 w-full bg-primary text-white font-medium py-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-main">
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
      </a>
    `;
    });
  });
}

// Display User Reviews
function displayReviews() {
  const reviewsContainer = document.getElementById("reviews-container");
  console.log("Working")
  let reviewsData = getReviews().then((data) => {
    let reviews = data.reviews;
    console.log(reviews);
    reviews.forEach((review) => {
      reviewsContainer.innerHTML += `<div class="max-w-md bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300">
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
    </div>
    `;
    });
  });
}

// Products based on filters
function filterProducts() {
  let categories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  );
  categories = categories.map((el) => el.parentElement.textContent.trim());
  if (categories.length === 0) {
    return displayProducts();
  } else {
    const productContainer = document.getElementById("product-cards");
    productContainer.innerHTML = "";
    let productData = getAPIData().then((data) => {
      let products = data.products;
      products = products.filter((product) =>
        categories.includes(product.category)
      );
      products.forEach((product) => {
        productContainer.innerHTML += `      
                      <!-- Product Card -->
      <a href="#"
        id="card-${product.id}"
        class="group relative flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent">

        <!-- Image -->
        <div class="h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
            <img src="${product.image_url}" 
                  alt="${product.name}" 
                  loading="lazy"
                  class="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>

        <!-- Content -->
        <div class="p-4 flex flex-col space-y-2 text-main flex-grow">
            <h3 class="text-lg font-semibold ">${product.name}</h3>
            <p class="text-sm text-gray-500 font-medium">${product.category}</p>
            <p class="text-sm text-gray-600 line-clamp-2">${product.description}</p>

            <div class="flex items-center gap-1 text-sm text-accent">
                <i class="fa-solid fa-star"></i>
                <span class="font-medium">${product.rating}</span>
                <span class="text-gray-500">(${product.reviews_count})</span>
            </div>

            <p class="text-lg font-bold text-primary mt-auto">$${product.price}</p>
        </div>

        <!-- Add to Cart Button -->
        <button
            class="absolute bottom-0 left-0 w-full bg-primary text-white font-medium py-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-main">
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
      </a>
      `;
      });
    });
  }
}
// Reset Filters
function resetFilters() {
  let categories = [];
  if (categories.length === 0) {
    alert("Filters are going to be reset. Are you sure?");
    window.location.reload();
    return displayProducts();
  }
}
// Drpdown filter toggle on smaller screens
function toggleFilter() {
  const categories = document.getElementById("categories");
  const toggleIcon = document.getElementById("filter-toggle");

  if (categories.classList.contains("hidden")) {
    toggleIcon.style.transform = "rotate(45deg)";
    categories.classList.remove("hidden");
    categories.classList.replace("opacity-0", "opacity-100");
    const fullHeight = categories.scrollHeight + "px";
    categories.style.height = fullHeight;
    window.scrollTo({ top: categories.offsetTop - 50, behavior: "smooth" });
  } else {
    toggleIcon.style.transform = "rotate(0deg)";
    categories.classList.add("hidden");
    categories.classList.replace("opacity-100", "opacity-0");
    const fullHeight = categories.scrollHeight + "px";
    categories.style.height = fullHeight;
    window.scrollTo({ top: categories.offsetTop, behavior: "smooth" });
  }
}
