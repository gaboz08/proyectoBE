class ProductManager {
    constructor() {
        this.products = [];
        this.id = 1;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error("Todos los campos son obligatorios");
            return null;
        }

        const existingProduct = this.products.find(prod => prod.code === product.code);
        if (existingProduct) {
            console.error("Ya existe un producto con el mismo código");
            return null;
        }

        const newProduct = { ...product, id: this.id++ };
        this.products.push(newProduct);
        return newProduct;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(prod => prod.id === id);
        if (!product) {
            console.log("Not found");
            return null;
        }
        return product;
    }
}

console.log("Iniciando pruebas...");

// Crear instancia de ProductManager
const productManager = new ProductManager();

// Test 1: Llamada a getProducts recién creada la instancia
console.log("Test 1: getProducts debe devolver un arreglo vacío");
console.log(productManager.getProducts()); // Debe mostrar []

// Test 2: Agregar un producto
console.log("Test 2: Agregar un producto y verificar que se agrega correctamente");
productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});

// Test 3: Verificar que getProducts devuelve el producto agregado
console.log("Test 3: Llamar a getProducts para verificar que el producto se ha agregado");
console.log(productManager.getProducts()); // Debe mostrar el producto agregado

// Test 4: Intentar agregar un producto con el mismo código para verificar el manejo de errores
console.log("Test 4: Agregar un producto con el mismo código debe mostrar un error");
productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});

// Test 5: Verificar getProductById con un ID que existe y uno que no existe
console.log("Test 5: getProductById con un ID que existe y uno que no existe");
console.log(productManager.getProductById(1)); // Debe mostrar el producto
console.log(productManager.getProductById(999)); // Debe mostrar "Not found"

console.log("Pruebas finalizadas.");

console.error("Fin del script con error");