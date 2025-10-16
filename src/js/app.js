import { apiData } from "./api.js";
// Fetch Products
const getAPIData = async () => {
  try {
    const data = await apiData();
    return data;
  } catch (error) {
    console.log(error);
  }
};
// Display Products
const displayProducts = () => {
  const productContainer = document.getElementById("product-cards");
  let productData = getAPIData().then((data) => {
    let products = data.products;
    products.forEach((product) => {
      productContainer.innerHTML += `      
        <!-- Card-${product.id} -->
        <a href="#"
            id="card-${product.id}"
            class="group relative flex flex-col justify-between bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

            <!-- Image -->
            <div class="h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
                <img src="${product.image_url}" alt="${product.name}"
                    class="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
            </div>

            <!-- Content -->
            <div class="p-4 space-y-2 text-main flex-grow">
                <h3 class="text-lg font-semibold">${product.name}</h3>
                <p class="text-sm text-gray-600">${product.description}</p>
                <span class="text-sm font-medium text-accent">
                    <i class="fa fa-solid fa-star"></i> ${product.rating}
                    <span class="text-gray-500">(${product.reviews_count})</span>
                </span>
                <p class="text-lg font-bold text-primary">$${product.price}</p>
            </div>

            <!-- Add to Cart -->
            <button
                class="absolute bottom-0 left-0 w-full bg-primary text-white font-medium py-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-main">
                <i class="fa-solid fa-bag-shopping"></i> Add to Cart
            </button>
        </a>
    `;
    });
  });
  console.log(productData);
};
displayProducts();
