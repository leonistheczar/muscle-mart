// API
import { apiData, popularData, activewearData, reviewsData } from './api.js';
// UI
import { UI } from "./ui.js";
const uiSelectors = UI().uiSelectors();
// Event Listeners
const sideMenuIcon = uiSelectors.sideMenuIcon
const sideMenuClose = uiSelectors.sideMenuClose
const sideMenu = uiSelectors.sideMenu
const sideMenuOverlay = uiSelectors.sideMenuOverlay
sideMenuIcon.addEventListener('click', openSideMenu);
sideMenuClose.addEventListener('click', closeSideMenu);
if (window.location.href.includes("index.html")) {
  document.addEventListener("DOMContentLoaded", displayPopularProducts);
  document.addEventListener("DOMContentLoaded", displayActiveWearProducts);
}
if (window.location.href.includes("products.html")) {
  document.addEventListener("DOMContentLoaded", displayProducts);
  uiSelectors.applyFilter.addEventListener("click", filterProducts);
  uiSelectors.resetFilter.addEventListener("click", resetFilters);
  uiSelectors.plusIcon.addEventListener("click", toggleFilter);
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
  const productContainer = uiSelectors.productContainer;
  getAPIData().then((data) => {
    let products = data.products;
    products.forEach((product) => {
      productContainer.innerHTML += UI().uiCard(product);
    });
  });
}

// Display Popular Products
function displayPopularProducts() {
  const popularContainer = uiSelectors.popularContainer;
  getPopularData().then((data) => {
    let products = data.popular;
    products.forEach((product) => {
      popularContainer.innerHTML += UI().uiCard(product);
    });
  });
}
// Display Activewear Products
function displayActiveWearProducts() {
  const activeWearContainer = uiSelectors.activeWearContainer;
  getActiveWearData().then((data) => {
    let products = data.activewear;
    products.forEach((product) => {
      activeWearContainer.innerHTML += UI().uiCard(product);
    });
  });
}

// Display User Reviews
function displayReviews() {
  const reviewsContainer = uiSelectors.reviewsContainer;
  // API Review fetching...
  getReviews().then((data) => {
    let reviews = data.reviews;
    console.log(reviews);
    reviews.forEach((review) => {
      reviewsContainer.innerHTML += UI().reviewUICard(review);
    });
  });
}

// Products based on filters
function filterProducts() {
  let categories = Array.from(uiSelectors.categoriesFilter);
  categories = categories.map((el) => el.parentElement.textContent.trim());
  if (categories.length === 0) {
    return displayProducts();
  } else {
    const productContainer = uiSelectors.productContainer;
    productContainer.innerHTML = "";
    // Fetch all products from APi
    getAPIData().then((data) => {
      let products = data.products;
      products = products.filter((product) =>
        categories.includes(product.category)
      );
      products.forEach((product) => {
        productContainer.innerHTML += UI().uiCard(product);
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
  const categories = uiSelectors.categoriesProducts;
  const toggleIcon = uiSelectors.plusIcon;

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

// Open side menu
function openSideMenu(e) {
  e.preventDefault();
  const bodyTag = uiSelectors.body;
  sideMenu.classList.remove('-translate-x-full');
  sideMenuOverlay.classList.remove('hidden');
  document.body.classList.add('overflow-y-hidden')
  // Fade in 
  setTimeout(() => {
    sideMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
  }, 10);
}

// Close side menu
function closeSideMenu() {
  sideMenu.classList.add('-translate-x-full');
  sideMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
  document.body.classList.remove('overflow-y-hidden')
  setTimeout(() => {
    sideMenuOverlay.classList.add('hidden');
  }, 300);
}