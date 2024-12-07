

const products = [
  { 
    id: 1,
    name: "VESTIDO STELLA",
    description: "Vestido longo listrado de malha Rib Stripe - 96% poliéster - 4% elastano",
    price: 119.90,
    fullPrice: 139.90,
    image: "../images/fall_1.jpeg",
    secondaryImages: ["../images/fall_2.jpeg", "../images/fall_3.jpeg"]
  },
  {
    id: 2,
    name: "VESTIDO LAURA",
    description: "Vestido curto Rayon Sensorialle - 91% viscose - 9% poliéster",
    price: 155.90,
    fullPrice: 175.90,
    image: "../images/summer_1.jpeg",
    secondaryImages: ["../images/summer_2.jpeg", "../images/summer_3.jpeg"]
  },
  {
    id: 3,
    name: "CONJUNTO BIANCA",
    description: "Conjunto de Malha Tricot",
    price: 149.90,
    fullPrice: 169.90,
    image: "../images/spring_1.jpeg",
    secondaryImages: ["../images/spring_2.jpeg", "../images/spring_3.jpeg"]
  },  
  { 
    id: 4,
    name: "CARDIGAN NATHALIA",
    description: "Cardigan de Malha Tricot",
    price: 119.90,
    fullPrice: 139.90,
    image: "../images/winter_1.jpeg",
    secondaryImages: ["../images/winter_2.jpeg", "../images/winter_3.jpeg"]
  },
  { 
    id: 5,
    name: "VESTIDO STELLA",
    description: "Vestido longo listrado de malha Rib Stripe - 96% poliéster - 4% elastano",
    price: 119.90,
    fullPrice: 129.90,
    image: "../images/fall_1.jpeg",
    secondaryImages: ["../images/fall_2.jpeg", "../images/fall_3.jpeg"]
  },
  {
    id: 6,
    name: "VESTIDO LAURA",
    description: "Vestido curto Rayon Sensorialle - 91% viscose - 9% poliéster",
    price: 155.90,
    fullPrice: 175.90,
    image: "../images/summer_1.jpeg",
    secondaryImages: ["../images/summer_2.jpeg", "../images/summer_3.jpeg"]
  },
  {
    id: 7,
    name: "CONJUNTO BIANCA",
    description: "Conjunto de Malha Tricot",
    price: 149.90,
    fullPrice: 169.90,
    image: "../images/spring_1.jpeg",
    secondaryImages: ["../images/spring_2.jpeg", "../images/spring_3.jpeg"]
  },  
  { 
    id: 8,
    name: "CARDIGAN NATHALIA",
    description: "Cardigan de Malha Tricot",
    price: 119.90,
    fullPrice: 139.90,
    image: "../images/winter_1.jpeg",
    secondaryImages: ["../images/winter_2.jpeg", "../images/winter_3.jpeg"]
  },

];

function loadProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
      const productCard = `      
        <div class="col-md-3">
          <a href="product-details.html?id=${product.id}" style="text-decoration:none";>
            <div class="card mb-4">
              <div class="card-body" style="margin: auto">
                <div class="product-image">
                  <img src="${product.image}"/>
                </div>
                <h5 class="card-title">${product.name}</h5>
                <div class="card-values">
                  <p class="card-price">R$${product.price.toFixed(2)}</p>
                  <p class="card-price-sm">a vista</p>
                </div>
                <p class="card-price-sm" style="margin-left:10px">ou R$${product.fullPrice.toFixed(2)} em até 4x</p>
              </div>
            </div>
          </a>
        </div>
      `;
      productList.innerHTML += productCard;
  });
}

document.addEventListener('DOMContentLoaded', loadProducts);
