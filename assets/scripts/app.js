class Product {
    title = 'Default Title';
    imageUrl;
    price;
    description;

    constructor(title, url, desc, price) {
        this.title = title;
        this.imageUrl = url;
        this.description = desc;
        this.price = price;
    }
}

const productList = {
    products: [
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
    ],
      render() {
          const appDiv = document.getElementById('app');
          const productUl = document.createElement('ul');
          productUl.className = 'product-list';
          for (const product of this.products) {
            const productLi = document.createElement('li');
            productLi.className = 'product-item';
            productLi.innerHTML = `
            <div>
                <img src="${product.imageUrl}" alt="${product.title}">
                <div class="product-item__content">
                    <h2>${product.title}</h2>
                    <h3>\$${product.price}</h3>
                    <p>${product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
            productUl.append(productLi);
          }
          appDiv.append(productUl);
      }
 };

productList.render();