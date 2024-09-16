const myProducts = [
    { id: "1", name: "Longines Legend Diver", stock: 10, price: 3800, img: "../public/img/legend-diver.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "men" },
    { id: "2", name: "Longines Spirit Flyback", stock: 10, price: 3800, img: "../public/img/spirit-flyback.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "men" },
    { id: "3", name: "Longines Conquest", stock: 10, price: 3800, img: "../public/img/conquest.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "men" },
    { id: "4", name: "Longines Pilot Majetek", stock: 10, price: 3800, img: "../public/img/pilot-majetek.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "woman" },
    { id: "5", name: "Longines Spirit", stock: 10, price: 3800, img: "../public/img/spirit.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "woman" },
    { id: "6", name: "Longines Zulu Time", stock: 10, price: 3800, img: "../public/img/zulu-time.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "woman" },


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

export const getAnItemById = (idItem) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const item = myProducts.filter(item => item.id === idItem)
            resolve(item)
        }, 100)
    })
}