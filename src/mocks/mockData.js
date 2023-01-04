import laptop from '../mocks/images/laptop.png'

const data = {
    products: [
        {
            id: 1,
            productName: 'Laptop',
            image: laptop,
            variants: [
                {
                    price: 80000,
                    image: laptop,
                    availableProduct: 20,
                    type: '6GB',
                },
                {
                    price: 90000,
                    image: laptop,
                    availableProduct: 20,
                    type: '12GB',
                },
            ],
        },
        {
            id: 2,
            productName: 'Tablet',
            image: laptop,
            variants: [
                {
                    price: 20000,
                    image: laptop,
                    availableProduct: 6,
                    type: '12GB',
                },
                {
                    price: 30000,
                    image: laptop,
                    availableProduct: 4,
                    type: '32GB',
                }
            ],
        },
        {
            id: 3,
            productName: 'Mobile',
            image: laptop,
            variants: [
                {
                    price: 40000,
                    image: laptop,
                    availableProduct: 20,
                    type: '12GB',
                },
                {
                    price: 50000,
                    image: laptop,
                    availableProduct: 9,
                    type: '32GB',
                }
            ],
        },
        {
            id: 4,
            productName: 'Fridge',
            image: laptop,
            variants: [
                {
                    price: 30000,
                    image: laptop,
                    availableProduct: 6,
                    type: 'red',
                },
                {
                    price: 50000,
                    image: laptop,
                    availableProduct: 4,
                    type: 'blue',
                }
            ],
        },
        {
            id: 5,
            productName: 'AC',
            image: laptop,
            variants: [
                {
                    price: 33000,
                    image: laptop,
                    availableProduct: 12,
                    type: '12GB',
                },
                {
                    price: 40000,
                    image: laptop,
                    availableProduct: 4,
                    type: '32GB',
                }
            ],
        },
        {
            id: 6,
            productName: 'TV',
            image: laptop,
            variants: [
                {
                    price: 22000,
                    image: laptop,
                    availableProduct: 6,
                    type: '24inc',
                },
                {
                    price: 30000,
                    image: laptop,
                    availableProduct: 4,
                    type: '42inc',
                }
            ],
        },
    ],
};

export default data;