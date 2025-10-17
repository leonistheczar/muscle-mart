(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const l=async e=>{const r=await fetch(e);if(!r.ok)throw new Error(`Failed to load ${e}`);return await r.json()},g=()=>l("/api/api.json"),y=()=>l("/api/popular.json"),h=()=>l("/api/activewear.json"),v=()=>l("/api/reviews.json"),m=()=>({uiSelectors:()=>({body:document.getElementById("bodyTag"),popularContainer:document.getElementById("popular-cards"),activeWearContainer:document.getElementById("activewear-cards"),productContainer:document.getElementById("product-cards"),get categoriesFilter(){return document.querySelectorAll('input[name="category"]:checked')},categoriesProducts:document.getElementById("categories"),plusIcon:document.getElementById("filter-toggle"),applyFilter:document.querySelector("#apply-filter"),resetFilter:document.querySelector("#reset-filter"),reviewsContainer:document.getElementById("reviews-container"),sideMenuIcon:document.getElementById("side-menu-icon"),sideMenuOverlay:document.getElementById("side-menu-overlay"),sideMenu:document.getElementById("side-menu"),sideMenuClose:document.getElementById("side-menu-close")}),uiCard:t=>` 
      <a href="#"
        id="card-${t.id}"
        class="group relative flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent">

        <!-- Image -->
        <div class="h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
            <img src="${t.image_url}" 
                  alt="${t.name}" 
                  loading="lazy"
                  class="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>

        <!-- Content -->
        <div class="p-4 flex flex-col space-y-2 text-main flex-grow">
            <h3 class="text-lg font-semibold ">${t.name}</h3>
            <p class="text-sm text-gray-500 font-medium">${t.category}</p>
            <p class="text-sm text-gray-600 line-clamp-2">${t.description}</p>

            <div class="flex items-center gap-1 text-sm text-accent">
                <i class="fa-solid fa-star"></i>
                <span class="font-medium">${t.rating}</span>
                <span class="text-gray-500">(${t.reviews_count})</span>
            </div>

            <p class="text-lg font-bold text-primary mt-auto">$${t.price}</p>
        </div>

        <!-- Add to Cart Button -->
        <button
            class="absolute bottom-0 left-0 w-full bg-primary text-white font-medium py-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-main">
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
      </a>`,reviewUICard:t=>`
        <div class="max-w-md bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300">
      <!-- Product Info -->
      <div class="flex justify-between items-start mb-4">
        <div>
          <h2 class="text-lg font-semibold text-gray-900">${t.productName}</h2>
          <p class="text-sm text-gray-500">Category: <span class="font-medium text-gray-700">${t.productCategory}</span></p>
        </div>
        <p class="text-xs bg-blue-100 text-blue-700 p-1.5 rounded-md font-semibold md:px-2 md:py-1 md:rounded-full">Verified Purchase</p>
      </div>

      <!-- User Info -->
      <div class="flex items-center space-x-3 mb-3">
        <img src="${t.image_url}" alt="User" class="w-16 h-16 rounded-full border">
        <h3 class="text-gray-800 font-semibold">${t.userName}</h3>
      </div>

      <!-- Rating -->
      <div class="flex items-center">
        <div id="stars" class="">${t.stars}</div>
        <span class="ml-2 mt-1 text-sm text-gray-700 font-semibold">${t.rating} / 5</span>
      </div>

      <!-- Title -->
      <h4 class="text-md font-semibold text-gray-900 mt-2">${t.title}</h4>

      <!-- Comment -->
      <p class="mt-2 text-gray-700 leading-relaxed">${t.comment}</p>
    </div>`}),i=m(),s=i.uiSelectors(),{sideMenuIcon:x,sideMenuClose:w,sideMenu:p,sideMenuOverlay:c,applyFilter:b,resetFilter:L,plusIcon:C}=s;x?.addEventListener("click",S);w?.addEventListener("click",A);document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname;e.endsWith("index.html")||e==="/"||e==="/index.html"?(M(),F()):e.endsWith("products.html")?(u(),b?.addEventListener("click",j),L?.addEventListener("click",B),C?.addEventListener("click",H)):e.endsWith("reviews.html")&&P()});async function f(){try{return(await g()).products}catch(e){return console.error(`API Fetch failed: ${e}`),[]}}async function I(){try{return(await y()).popular}catch(e){return console.error(`Popular Fetch failed: ${e}`),[]}}async function $(){try{return(await h()).activewear}catch(e){return console.error(`Activewear Fetch failed: ${e}`),[]}}async function E(){try{return(await v()).reviews}catch(e){return console.error(`Reviews Fetch failed: ${e}`),[]}}async function u(){const e=s.productContainer;if(e)try{const r=await f();e.innerHTML=r.map(i.uiCard).join("")}catch{e.innerHTML='<p class="text-center text-red-500 mt-4">Failed to load products.</p>'}}async function M(){const e=s.popularContainer;if(e)try{const r=await I();e.innerHTML=r.map(i.uiCard).join("")}catch{e.innerHTML='<p class="text-center text-red-500 mt-4">Failed to load popular products.</p>'}}async function F(){const e=s.activeWearContainer;if(e)try{const r=await $();e.innerHTML=r.map(i.uiCard).join("")}catch{e.innerHTML='<p class="text-center text-red-500 mt-4">Failed to load activewear products.</p>'}}async function P(){const e=s.reviewsContainer;if(e)try{const r=await E();e.innerHTML=r.map(i.reviewUICard).join("")}catch{e.innerHTML='<p class="text-center text-red-500 mt-4">Failed to load reviews.</p>'}}function j(){const e=Array.from(s.categoriesFilter).map(o=>o.parentElement.textContent.trim());if(e.length===0)return u();const r=s.productContainer;r&&f().then(o=>{const t=o.filter(n=>e.includes(n.category));r.innerHTML=t.map(n=>m().uiCard(n)).join("")})}function B(){document.querySelectorAll('input[name="category"]').forEach(e=>e.checked=!1),u()}function H(){const e=s.categoriesProducts,r=s.plusIcon;if(!e||!r)return;const o=e.classList.contains("hidden");r.style.transform=o?"rotate(45deg)":"rotate(0deg)",e.classList.toggle("hidden",!o),e.classList.toggle("opacity-0",!o),e.classList.toggle("opacity-100",o);const t=e.scrollHeight+"px";e.style.height=t,window.scrollTo({top:e.offsetTop-50,behavior:"smooth"})}function S(e){e.preventDefault(),p.classList.remove("-translate-x-full"),c.classList.remove("hidden"),document.body.classList.add("overflow-y-hidden"),setTimeout(()=>{c.classList.remove("opacity-0","pointer-events-none")},10)}function A(){p.classList.add("-translate-x-full"),c.classList.add("opacity-0","pointer-events-none"),document.body.classList.remove("overflow-y-hidden"),setTimeout(()=>{c.classList.add("hidden")},300)}
