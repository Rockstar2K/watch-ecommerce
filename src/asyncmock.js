const myProducts = [
    { id: "1", name: "Longines Legend Diver", stock: 10, price: 3800, img: "../public/img/conquest.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "men" },
    { id: "2", name: "Longines Legend Diver", stock: 10, price: 3800, img: "../public/img/conquest.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "men" },
    { id: "3", name: "Longines Legend Diver", stock: 10, price: 3800, img: "../public/img/conquest.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "men" },
    { id: "4", name: "Longines Legend Diver", stock: 10, price: 3800, img: "../public/img/conquest.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "women" },
    { id: "5", name: "Longines Legend Diver", stock: 10, price: 3800, img: "../public/img/conquest.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "women" },
    { id: "6", name: "Longines Legend Diver", stock: 10, price: 3800, img: "../public/img/conquest.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "women" },


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(myProducts);
        }, 100)
    })
}

export const getProductsByCategory = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const product = myProducts.filter(item => item.idCategory === idCategoria)
            resolve(product)
        }, 100);

    })

}