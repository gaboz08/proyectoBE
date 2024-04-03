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
    updateProduct(id, { title, description, price, thumbnail, code, stock }) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            console.error('Producto no encontrado');
            return;
        }
        this.products[index] = { ...this.products[index], title, description, price, thumbnail, stock };
    }

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            console.error('Producto no encontrado');
            return;
        }
        this.products.splice(index, 1);
    }
}

console.log("Iniciando pruebas extendidas...");

const manager = new ProductManager();


console.log(manager.getProducts()); // []


manager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});


console.log(manager.getProducts());


console.log(manager.getProductById(1)); 


manager.updateProduct(1, {
    title: "producto prueba actualizado",
    description: "Descripción actualizada",
    price: 250,
    thumbnail: "Imagen actualizada",
    stock: 30
});

console.log(manager.getProductById(1)); 

manager.deleteProduct(1);
console.log(manager.getProducts()); // []


manager.deleteProduct(999); 

console.log("Pruebas extendidas finalizadas.");
