class Product {
 /*    title = 'Default Title';
    imageUrl;
    price;
    description; */

    //adding properties on the fly in the constructor is perfectly fine
    //you dont need to add them as fields beforehand, unless you want 
    //to add a default value or something
    constructor(title, url, desc, price) {
        this.title = title;
        this.imageUrl = url;
        this.description = desc;
        this.price = price;
    }
}
class ProductElement {
    constructor(product) {
        this.product = product;
    }
    getProductLiElement() {
        const productLi = document.createElement('li');
        productLi.className = 'product-item';
        productLi.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price.toFixed(2)}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
        `;
        const addToCartBtn = productLi.querySelector('button');
        addToCartBtn.addEventListener('click', this.addToCart.bind(this));
        return productLi;
    }
    addToCart() {
        Shop.addToCart(this.product);
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://images.crateandbarrel.com/is/image/Crate/Emi20x20PlwCvrSHS20/?$web_zoom$&191122123350&wid=450&hei=450',
            'A soft pillow!',
            19.50),
        new Product(
            'A Carpet',
            'https://www.carpetandhome.com/wp-content/uploads/2020/05/1-3.jpg',
            'A soft carpet!',
            199.50)
        ];
        getProductListUlElement() {
            const productUl = document.createElement('ul');
            productUl.className = 'product-list';
            for (const product of this.products) {
              const prodEl = new ProductElement(product).getProductLiElement();
              productUl.append(prodEl);
            }
            return productUl;
        }    
}

class CartElement {
    productsInCart = [];
    totalOutput = 0;
    totalOutputEl = document.createElement('h2');
    orderBtn = document.createElement('button');

    addProductToCart (product){
        this.productsInCart.push(product);
        console.log(`Added ${product.title} to the cart!`);
        this.totalOutput = this.totalOutput + product.price;
        this.totalOutputEl.innerHTML = `<h2>Total: \$${this.totalOutput.toFixed(2)}</h2>`;
    }

    getCartSectionElement() {
        const cartEl = document.createElement('section');
        this.totalOutputEl.innerHTML = `<h2>Total: \$${this.totalOutput}</h2>`;
        this.orderBtn.innerHTML = `<button>Order Now</button>`;
        cartEl.append(this.totalOutputEl);
        cartEl.append(this.orderBtn);
        cartEl.className = 'cart';
        return cartEl;
    }
}

class Shop {
    cart;

    static init() {
        const appDiv = document.getElementById('app');
        this.cart = new CartElement();
        appDiv.append(this.cart.getCartSectionElement());
        appDiv.append(new ProductList().getProductListUlElement());
    }    

    static addToCart(product) {
        this.cart.addProductToCart(product);
    }
}

Shop.init();

