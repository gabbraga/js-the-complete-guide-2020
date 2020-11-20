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
    render() {
        const productLi = document.createElement('li');
        productLi.className = 'product-item';
        productLi.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
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
        console.log(`Added ${this.product.title} to the cart!`);
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://images.crateandbarrel.com/is/image/Crate/Emi20x20PlwCvrSHS20/?$web_zoom$&191122123350&wid=450&hei=450',
            'A soft pillow!',
            19.99),
        new Product(
            'A Carpet',
            'https://www.carpetandhome.com/wp-content/uploads/2020/05/1-3.jpg',
            'A soft carpet!',
            199.99)
        ];
        render() {
            const appDiv = document.getElementById('app');
            const productUl = document.createElement('ul');
            productUl.className = 'product-list';
            for (const product of this.products) {
              const prodEl = new ProductElement(product).render();
              productUl.append(prodEl);
            }
            appDiv.append(productUl);
        }    
}

const prodList = new ProductList();
prodList.render();