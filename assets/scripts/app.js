const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl: 'https://images.crateandbarrel.com/is/image/Crate/Emi20x20PlwCvrSHS20/?$web_zoom$&191122123350&wid=450&hei=450',
            price: 19.99,
            description: 'A soft pillow!'
        },
     
        {
         title: 'A Carpet',
         imageUrl: 'https://www.carpetandhome.com/wp-content/uploads/2020/05/1-3.jpg',
         price: 199.99,
         description: 'A soft carpet!'
         }
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