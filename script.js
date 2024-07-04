document.addEventListener('DOMContentLoaded', () => {
    const productData = {
        "product": {
            "id": 6937548554342,
            "title": "Embrace Sideboard",
            "description": "The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and reliability.",
            "vendor": "Marmeto",
            "product_type": "Cloth",
            "price": "$12999",
            "compare_at_price": "$19999",
            "options": [
                {
                    "name": "Color",
                    "position": 1,
                    "values": [
                        { "Yellow": "#ECDECC" },
                        { "Green": "#BBD278" },
                        { "Blue": "#BBC1F8" },
                        { "Pink": "#FFD3F8" }
                    ]
                },
                {
                    "name": "Size",
                    "position": 2,
                    "values": [
                        "Small",
                        "Medium",
                        "Large",
                        "Extra large",
                        "XXL"
                    ]
                }
            ],
            "images": [
                { "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-6Y2XstWtDvM-unsplash.jpg?v=1701946731" },
                { "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-HVlOLCHlzJs-unsplash.jpg?v=1701946732" },
                { "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-om8qxMDlGfI-unsplash.jpg?v=1701946732" },
                { "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-WQgvRkmqRrg-unsplash.jpg?v=1701946731" }
            ]
        }
    };

    const thumbnails = document.querySelector('#thumbnailImages');
    const mainImage = document.querySelector('#mainImage');
    const productVendor = document.querySelector('#productVendor');
    const productTitle = document.querySelector('#productTitle');
    const newPrice = document.querySelector('#newPrice');
    const discount = document.querySelector('#discount');
    const oldPrice = document.querySelector('#oldPrice');
    const colorOptions = document.querySelector('#colorOptions');
    const sizeOptions = document.querySelector('#sizeOptions');
    const quantityDecrease = document.querySelector('.quantity-decrease');
    const quantityIncrease = document.querySelector('.quantity-increase');
    const quantityNumber = document.querySelector('.quantity-number');
    const productDescription = document.querySelector('#productDescription');

    const product = productData.product;
    const colors = product.options.find(option => option.name === 'Color').values;
    const sizes = product.options.find(option => option.name === 'Size').values;
    const images = product.images;

    mainImage.src = images[0].src;
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = 'Thumbnail';
        img.addEventListener('click', () => {
            mainImage.src = image.src;
        });
        thumbnails.appendChild(img);
    });

    productVendor.textContent = product.vendor;
    productTitle.textContent = product.title;
    newPrice.textContent = product.price;
    discount.textContent = '35% Off';
    oldPrice.textContent = product.compare_at_price;
    productDescription.textContent = product.description;

    colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = Object.values(color)[0];
        colorOptions.appendChild(colorDiv);
    });

    sizes.forEach(size => {
        const sizeBtn = document.createElement('button');
        sizeBtn.classList.add('size');
        sizeBtn.textContent = size;
        sizeOptions.appendChild(sizeBtn);
    });

    quantityDecrease.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityNumber.textContent);
        if (currentQuantity > 1) {
            quantityNumber.textContent = currentQuantity - 1;
        }
    });

    quantityIncrease.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityNumber.textContent);
        quantityNumber.textContent = currentQuantity + 1;
    });
});
