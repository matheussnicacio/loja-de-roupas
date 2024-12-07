const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

function loadProductDetails() {
    const product = products.find(p => p.id == productId);
    if (product) {
        document.getElementById('product-details').innerHTML = `
      
    
        <div class="image-container">
            <img src="${product.image}" class="main-image" alt="${product.name}"/>
            <div class="secondary-images">
                ${product.secondaryImages.map(img => `<img src="${img}" class="img-thumbnail" alt="Imagem secundária"/>`).join('')}
            </div>
        </div>
        <div class="container" style="padding: 0">
            <h2>${product.name}</h2>
            <div class="values">
                <p class="price">R$${product.price.toFixed(2)}</p>
                <p class="price-sm">a vista</p>
            </div>
            <p class="price-sm" style="margin-top: -10px">ou R$${product.fullPrice.toFixed(2)} em até 4x</p>
            <div class="description-card">
                <p style="margin: 0">${product.description}</p>
            </div>
            <div class="sizeAndCep">
                <div id="size-selector" class="size-selector">
                    <div class="size-option" id="size-P" onclick="selectSize('P')">P</div>
                    <div class="size-option" id="size-M" onclick="selectSize('M')">M</div>
                    <div class="size-option" id="size-G" onclick="selectSize('G')">G</div>
                </div>
                <div class="cep-card">
                    <p style="margin: 0; font-weight: bold">CEP</p>
                    <input style="width: 100%">
                    <button class="btn btn-secundary" type="button" style="border: none">
                        <span>CALCULAR</span>
                    </button>                    
                </div>
            </div>
        </div>
    `;
    } else {
        document.getElementById('product-details').innerHTML = '<p>Produto não encontrado!</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProductDetails);

// Função para selecionar o tamanho
function selectSize(size) {
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.classList.remove('selected');
    });

    const selectedSize = document.getElementById(`size-${size}`);
    selectedSize.classList.add('selected');
}



// Referências aos elementos
const openCartButton = document.getElementById('open-cart');
const closeCartButton = document.getElementById('close-cart');
const sideMenu = document.getElementById('side-menu');

// Abre o menu lateral
openCartButton.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

// Fecha o menu lateral
closeCartButton.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});
