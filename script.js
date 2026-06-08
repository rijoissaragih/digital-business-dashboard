// Select dashboard elements
let dashboardTitle = document.getElementById("dashboardTitle");
let summaryText = document.getElementById("summaryText");

let totalProducts = document.getElementById("totalProducts");
let totalOrders = document.getElementById("totalOrders");
let storeStatus = document.getElementById("storeStatus");

let featuredTitle = document.getElementById("featuredTitle");
let featuredName = document.getElementById("featuredName");
let featuredPrice = document.getElementById("featuredPrice");

let refreshBtn = document.getElementById("refreshBtn");
let statusMessage = document.getElementById("statusMessage");

let productList = document.getElementById("productList");

let apiProductTitle = document.getElementById("apiProductTitle");
let apiProductPrice = document.getElementById("apiProductPrice");

// Dashboard title and summary
dashboardTitle.textContent = "Digital Business Dashboard";
summaryText.textContent = "Welcome to the simple store monitoring dashboard.";

// Summary cards
totalProducts.textContent = "Total Products: 4";
totalOrders.textContent = "Total Orders: 12";
storeStatus.textContent = "Store Status: Active";

// Featured product
featuredTitle.textContent = "Featured Product";
featuredName.textContent = "Laptop ASUS Vivobook";
featuredPrice.textContent = "Price: Rp 7,000,000";

// Product list
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");
    li.textContent = products[i];
    productList.appendChild(li);
}

// Button interaction
refreshBtn.addEventListener("click", function () {
    statusMessage.textContent = "Dashboard updated successfully.";
    statusMessage.style.color = "green";

    dashboardTitle.style.color = "darkblue";
    dashboardTitle.style.fontSize = "38px";
});

// API-based panel
fetch("https://dummyjson.com/products/1")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        apiProductTitle.textContent = "API Product: " + data.title;
        apiProductPrice.textContent = "Price: $" + data.price;
    })
    .catch(function () {
        apiProductTitle.textContent = "Failed to load API product.";
        apiProductPrice.textContent = "";
    });