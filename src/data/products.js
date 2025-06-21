// Возможные размеры
const sizes = ['XS', 'S', 'M', 'L', 'XL'];

function getRandomSize() {
    return sizes[Math.floor(Math.random() * sizes.length)];
}

// Возможные товары
export const products = [
    {
        id: 1,
        name: 'Gray Hoodie',
        price: 52,
        image: '/img/product1.jpg',
        size: getRandomSize(),
    },
    {
        id: 2,
        name: 'Black Dress',
        price: 52,
        image: '/img/product2.jpg',
        size: getRandomSize(),
    },
    {
        id: 3,
        name: 'Blue Hoodie',
        price: 52,
        image: '/img/product3.jpg',
        size: getRandomSize(),
    },
    {
        id: 4,
        name: 'Blue Jucket',
        price: 52,
        image: '/img/product4.jpg',
        size: getRandomSize(),
    },
    {
        id: 5,
        name: 'White Sneakers',
        price: 52,
        image: '/img/product5.jpg',
        size: getRandomSize(),
    },
    {
        id: 6,
        name: 'Denim Jacket',
        price: 52,
        image: '/img/product6.jpg',
        size: getRandomSize(),
    },
    {
        id: 7,
        name: 'Pink T-Shirt',
        price: 52,
        image: '/img/product7.jpg',
        size: getRandomSize(),
    },
    {
        id: 8,
        name: 'White T-Shirt',
        price: 52,
        image: '/img/product8.jpg',
        size: getRandomSize(),
    },
    {
        id: 9,
        name: 'Black Cap',
        price: 52,
        image: '/img/product8.jpg',
        size: getRandomSize(),
    }
];
