const products = [

  {
    name: "Fresh Tomatoes",
    price: 40,
    quantity: "1kg"
  },

  {
    name: "Wheat",
    price: 30,
    quantity: "1kg"
  },

  {
    name: "Rice",
    price: 60,
    quantity: "1kg"
  }

];

const productsContainer =
document.getElementById("products");


// LOAD PRODUCTS

function loadProducts() {

  productsContainer.innerHTML = "";

  products.forEach(product => {

    productsContainer.innerHTML += `

    <div class="product-card">

      <h2>${product.name}</h2>

      <p>Price: ₹${product.price}</p>

      <p>Quantity: ${product.quantity}</p>

      <button onclick="addToCart('${product.name}')">
        Add To Cart
      </button>

    </div>

    `;

  });

}


// SEARCH PRODUCTS

function searchProduct() {

  const input =
  document.getElementById("search")
  .value
  .toLowerCase();

  const cards =
  document.querySelectorAll(".product-card");

  let translatedInput = input;

  // HINDI TO ENGLISH

  if(
    input === "tamatar" ||
    input === "टमाटर"
  ){
      translatedInput = "tomatoes";
  }

  if(
    input === "gehun" ||
    input === "गेहूं"
  ){
      translatedInput = "wheat";
  }

  if(
    input === "chawal" ||
    input === "चावल"
  ){
      translatedInput = "rice";
  }

  cards.forEach(card => {

    const title =
    card.querySelector("h2")
    .innerText
    .toLowerCase();

    if(
      title.includes(translatedInput)
    ){
        card.style.display = "block";
    }

    else{
        card.style.display = "none";
    }

  });

}


// VOICE SEARCH

function startVoiceSearch() {

  if (
    !('webkitSpeechRecognition' in window)
  ) {

    alert(
      "Voice Search Not Supported In This Browser"
    );

    return;
  }

  const recognition =
  new webkitSpeechRecognition();

  recognition.lang = "hi-IN";

  recognition.onresult =
  function(event) {

    const transcript =
    event.results[0][0].transcript;

    document.getElementById("search")
    .value = transcript;

    searchProduct();
  };

  recognition.start();

}


// ADD TO CART

function addToCart(productName) {

  alert(productName + " Added To Cart ✅");

}


// LANGUAGE SWITCH

function switchLanguage() {

  const heading =
  document.getElementById("main-heading");

  if(
    heading.innerText ===
    "Fresh Products From Farmers 🌱"
  ){

    heading.innerText =
    "किसानों से ताजे उत्पाद 🌱";

  }

  else{

    heading.innerText =
    "Fresh Products From Farmers 🌱";

  }

}


// LOAD PRODUCTS

loadProducts();
