const products = [

{
id:1,
name:"Laptop",
price:45000,
category:"electronics",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},

{
id:2,
name:"Smartphone",
price:25000,
category:"electronics",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
},

{
id:3,
name:"Headphones",
price:3000,
category:"accessories",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
},

{
id:4,
name:"Smart Watch",
price:5000,
category:"electronics",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
},

{
id:5,
name:"Keyboard",
price:1200,
category:"accessories",
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600"
},

{
id:6,
name:"Mouse",
price:700,
category:"accessories",
image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600"
}

];

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

displayProducts(products);
updateCart();

/* LOGIN */

function loginUser(){

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

if(
username === "harika" &&
password === "ecommerce123"
){

localStorage.setItem("loggedIn","true");

document.getElementById("loginModal").style.display = "none";

alert("Login Successful!");

}else{

alert("Invalid Username or Password");

}

}
/* DISPLAY PRODUCTS */

function displayProducts(items){

const container =
document.getElementById(
"productContainer"
);

container.innerHTML="";

items.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<p>⭐⭐⭐⭐⭐</p>

<button onclick="addToCart(${product.id})">

Add to Cart

</button>

</div>

`;

});
}

/* SEARCH */

function searchProducts(){

const value =
document.getElementById(
"searchInput"
).value.toLowerCase();

const filtered =
products.filter(product=>

product.name
.toLowerCase()
.includes(value)

);

displayProducts(filtered);
}

/* FILTER */

function filterProducts(category){

if(category==="all"){

displayProducts(products);

}else{

const filtered =
products.filter(product=>

product.category===category

);

displayProducts(filtered);
}
}

/* ADD TO CART */

function addToCart(id){

const product =
products.find(product=>

product.id===id
);

cart.push(product);

saveCart();

alert(
product.name +
" added to cart!"
);
}

/* REMOVE */

function removeFromCart(index){

cart.splice(index,1);

saveCart();
}

/* SAVE */

function saveCart(){

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();
}

/* UPDATE CART */

function updateCart(){

const cartItems =
document.getElementById(
"cartItems"
);

cartItems.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-item">

<div>

${item.name}

<br>

₹${item.price}

</div>

<button
class="remove-btn"
onclick="removeFromCart(${index})">

🗑

</button>

</div>

`;

});

document.getElementById(
"cartCount"
).innerText=cart.length;

document.getElementById(
"totalPrice"
).innerText=total;
}

/* TOGGLE CART */

function toggleCart(){

document
.getElementById("cart")
.classList.toggle("active");
}

/* CHECKOUT */

function checkout(){

if(cart.length===0){

alert(
"Cart is empty!"
);

return;
}

alert(
"Order Placed Successfully!"
);

cart=[];

saveCart();
}

window.onload = function(){

if(localStorage.getItem("loggedIn") === "true"){

document.getElementById("loginModal").style.display = "none";

}

}