
import toast from "react-hot-toast"

// get all product from local storage 2nd
const getAllProduct = () => {
    const all = localStorage.getItem('favorites')

    if (all) {
        const products = JSON.parse(all)
        return products
    } else {
        return []
    }
}


// add to product to local storage  1st

const addFavorite = (product) => {
    // get all product from local storage pervious
    const favorites = getAllProduct()
    const isExist = favorites.find(item => item.product_id == product.product_id)
    if (isExist) return toast.error('Gadget Already Exit!');
    favorites.push(product)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Successfully Added!');
}


// Remove product from local storage 3rd

const removeFavorite = id => {
    const favorites = getAllProduct()
    const remaining = favorites.filter(product => product.product_id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success('Successfully Removed!');
}




export { addFavorite, getAllProduct, removeFavorite }

