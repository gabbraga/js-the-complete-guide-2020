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
         imageUrl: 'https://images.crateandbarrel.com/is/image/Crate/Emi20x20PlwCvrSHS20/?$web_zoom$&191122123350&wid=450&hei=450',
         price: 199.99,
         description: 'A soft carpet!'
         }
      ],
      render() {
          const renderHook = document.getElementById('app');
          const prodList = document.createElement('ul');
          prodList.className = 'product-list';
          renderHook.append(prodList);
      }
 };