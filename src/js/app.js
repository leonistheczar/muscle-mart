// API
import { apiData, popularData, activewearData, reviewsData } from './api.js';
// UI
import { UI } from './ui.js';

const ui = UI();
const uiSelectors = ui.uiSelectors();

// ========== EVENT LISTENERS ========== //
const { sideMenuIcon, sideMenuClose, sideMenu, sideMenuOverlay, applyFilter, resetFilter, plusIcon } = uiSelectors;

// Side menu events
sideMenuIcon?.addEventListener('click', openSideMenu);
sideMenuClose?.addEventListener('click', closeSideMenu);

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  if (path.endsWith('index.html') || path === '/' || path === '/index.html') {
    displayPopularProducts();
    displayActiveWearProducts();
  } else if (path.endsWith('products.html')) {
    displayProducts();
    applyFilter?.addEventListener('click', filterProducts);
    resetFilter?.addEventListener('click', resetFilters);
    plusIcon?.addEventListener('click', toggleFilter);
  } else if (path.endsWith('reviews.html')) {
    displayReviews();
  }
});

// FETCH FUNCTIONS 
async function getAPIData() {
  try {
    const data = await apiData();
    return data.products;
  } catch (error) {
    console.error(`API Fetch failed: ${error}`);
    return [];
  }
}

async function getPopularData() {
  try {
    const data = await popularData();
    return data.popular;
  } catch (error) {
    console.error(`Popular Fetch failed: ${error}`);
    return [];
  }
}

async function getActiveWearData() {
  try {
    const data = await activewearData();
    return data.activewear;
  } catch (error) {
    console.error(`Activewear Fetch failed: ${error}`);
    return [];
  }
}

async function getReviews() {
  try {
    const data = await reviewsData();
    return data.reviews;
  } catch (error) {
    console.error(`Reviews Fetch failed: ${error}`);
    return [];
  }
}

// DISPLAY FUNCTIONS 
async function displayProducts() {
  const container = uiSelectors.productContainer;
  if (!container) return;

  try {
    const products = await getAPIData();
    container.innerHTML = products.map(ui.uiCard).join('');
  } catch {
    container.innerHTML = `<p class="text-center text-red-500 mt-4">Failed to load products.</p>`;
  }
}

async function displayPopularProducts() {
  const container = uiSelectors.popularContainer;
  if (!container) return;

  try {
    const products = await getPopularData();
    container.innerHTML = products.map(ui.uiCard).join('');
  } catch {
    container.innerHTML = `<p class="text-center text-red-500 mt-4">Failed to load popular products.</p>`;
  }
}

async function displayActiveWearProducts() {
  const container = uiSelectors.activeWearContainer;
  if (!container) return;

  try {
    const products = await getActiveWearData();
    container.innerHTML = products.map(ui.uiCard).join('');
  } catch {
    container.innerHTML = `<p class="text-center text-red-500 mt-4">Failed to load activewear products.</p>`;
  }
}

async function displayReviews() {
  const container = uiSelectors.reviewsContainer;
  if (!container) return;

  try {
    const reviews = await getReviews();
    container.innerHTML = reviews.map(ui.reviewUICard).join('');
  } catch {
    container.innerHTML = `<p class="text-center text-red-500 mt-4">Failed to load reviews.</p>`;
  }
}

// FILTER LOGIC 
function filterProducts() { 
  const categories = Array.from(uiSelectors.categoriesFilter)
    .map(el => el.parentElement.textContent.trim());
  
  if (categories.length === 0) { 
    return displayProducts(); 
  } 
  
  const productContainer = uiSelectors.productContainer;
  if (!productContainer) return;
  
  getAPIData().then((data) => { 
    const products = data.filter(product => 
      categories.includes(product.category)
    );
    
    productContainer.innerHTML = products.map(product => 
      UI().uiCard(product)
    ).join('');
  });
}

function resetFilters() {
  document.querySelectorAll('input[name="category"]')
    .forEach(el => el.checked = false);
  displayProducts();
}

// FILTER DROPDOWN TOGGLE (Mobile) 
function toggleFilter() {
  const categories = uiSelectors.categoriesProducts;
  const toggleIcon = uiSelectors.plusIcon;

  if (!categories || !toggleIcon) return;

  const isHidden = categories.classList.contains('hidden');
  toggleIcon.style.transform = isHidden ? 'rotate(45deg)' : 'rotate(0deg)';

  categories.classList.toggle('hidden', !isHidden);
  categories.classList.toggle('opacity-0', !isHidden);
  categories.classList.toggle('opacity-100', isHidden);

  const fullHeight = categories.scrollHeight + 'px';
  categories.style.height = fullHeight;
  window.scrollTo({ top: categories.offsetTop - 50, behavior: 'smooth' });
}

// SIDE MENU LOGIC 
function openSideMenu(e) {
  e.preventDefault();
  sideMenu.classList.remove('-translate-x-full');
  sideMenuOverlay.classList.remove('hidden');
  document.body.classList.add('overflow-y-hidden');

  // Fade in
  setTimeout(() => {
    sideMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
  }, 10);
}

function closeSideMenu() {
  sideMenu.classList.add('-translate-x-full');
  sideMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
  document.body.classList.remove('overflow-y-hidden');

  setTimeout(() => {
    sideMenuOverlay.classList.add('hidden');
  }, 300);
}
