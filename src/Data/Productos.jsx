export const products = [
    {
        id: 1,
        name: "producto uno",
        precio: 200,
        descripcion: "descripcion del producto uno",
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-1.jpg',

    },

    {
        id: 2,
        name: "prducto dos",
        precio: 350,
        descripcion: "descripcion del producto dos",
        stock: 15,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-2.jpg',
    },

    {
        id: 3,
        name: "producto tres",
        precio: 100,
        descripcion: "descripcion del producto tres",
        stock: 8,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-3.jpg',
    },

    {
        id: 4,
        name:'producto cuatro',
        precio: 499,
        descripcion: "descripcion del producto cuatro",
        stock: 26,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-4.jpg'

    }




]

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products);
        }, 2000);
    })
}