// Mostrar formulario de producto a todos los usuarios
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar el botón al cargar la página
    document.getElementById('showFormButton').style.display = 'block';

    document.getElementById('showFormButton').addEventListener('click', function() {
        document.getElementById('productForm').style.display = 'block';
        this.style.display = 'none';
    });

    document.getElementById('cancelButton').addEventListener('click', function() {
        document.getElementById('productForm').style.display = 'none';
        document.getElementById('showFormButton').style.display = 'block';
    });

    document.getElementById('productForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtener los valores del formulario
        const name = document.getElementById('productName').value;
        const description = document.getElementById('productDescription').value;
        const imageUrl = document.getElementById('productImage').value;

        // Crear una nueva tarjeta de producto
        const newProduct = { name, description, imageUrl };
        addCardToDOM(newProduct);
        saveProduct(newProduct);

        // Ocultar el formulario y mostrar el botón de agregar
        document.getElementById('productForm').style.display = 'none';
        document.getElementById('showFormButton').style.display = 'block';
        
        // Limpiar el formulario
        document.getElementById('productForm').reset();
    });

    // Cargar productos al iniciar la página
    loadProducts();
});

function addCardToDOM(product) {
    const cardContainer = document.querySelector('.card-container');
    if (!cardContainer) {
        console.error('El elemento card-container no se encontró.');
        return;
    }
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    
    newCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" class="card-img">
        <div class="card-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button>Ver Más</button>
        </div>
    `;
    
    cardContainer.appendChild(newCard);
}

function saveProduct(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(product => addCardToDOM(product));
}
