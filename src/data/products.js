// Возможные размеры
const sizes = ['XS', 'S', 'M', 'L'];

function getRandomSize() {
    return sizes[Math.floor(Math.random() * sizes.length)];
}

// Возможные товары
export const products = [
    {
        id: 1,
        name: 'Black T-Shirt',
        price: 100,
        image: '/img/product1.jpg',
        size: getRandomSize(),
    },
    {
        id: 2,
        name: 'Red Dress',
        price: 120,
        image: '/img/product2.jpg',
        size: getRandomSize(),
    },
    {
        id: 3,
        name: 'Blue Jeans',
        price: 150,
        image: '/img/product3.jpg',
        size: getRandomSize(),
    },
    {
        id: 4,
        name: 'Gray Hoodie',
        price: 130,
        image: '/img/product4.jpg',
        size: getRandomSize(),
    },
    {
        id: 5,
        name: 'White Sneakers',
        price: 200,
        image: '/img/product5.jpg',
        size: getRandomSize(),
    },
    {
        id: 6,
        name: 'Denim Jacket',
        price: 170,
        image: '/img/product6.jpg',
        size: getRandomSize(),
    },
    {
        id: 7,
        name: 'Green Shorts',
        price: 90,
        image: '/img/product7.jpg',
        size: getRandomSize(),
    },
    {
        id: 8,
        name: 'Yellow Cap',
        price: 50,
        image: '/img/product8.jpg',
        size: getRandomSize(),
    }
];
