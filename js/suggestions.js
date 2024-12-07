const container = document.getElementById('suggestions-container');

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card'); 
    card.innerHTML = `
    <div >
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
    container.appendChild(card);
});

  document.addEventListener('DOMContentLoaded', loadProducts);
