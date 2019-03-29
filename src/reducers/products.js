var initialState = [
    {
        id: 1,
        name: 'Iphone X',
        image:'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-silver-400x460.png',
        description: 'Sản phẩm của apple',
        price: 500,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung Galaxy',
        image:'https://cdn.tgdd.vn/Products/Images/42/194327/samsung-galaxy-a7-2018-128gb-black-400x460.png',
        description: 'Sản phẩm của samsung',
        price: 900,
        inventory: 8,
        rating: 5
    },
    {
        id: 3,
        name: 'Oppo F10',
        image:'https://cdn.tgdd.vn/Products/Images/42/165189/oppo-find-x-2-400x460-400x460.png',
        description: 'Sản phẩm của oppo',
        price: 300,
        inventory: 4,
        rating: 2
    }
]
const product = (state = initialState, action) => {
    switch(action.type){
        default: return [...state]
    }
}
export default product;