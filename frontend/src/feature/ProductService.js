import axios from "axios";

const API_URL = '/api/product'

const createProducts = async(Product)=>{
    const res = await axios.post(API_URL + '/addProducts' , Product)    
    return res.data
}
const getProducts = async()=>{
    const res = await axios.get(API_URL + '/get' )
    return res.data 
}
const getProduct = async(id)=>{
    const res = await axios.post(API_URL + '/getProduct' )
    return res.data 
}
const productService = {
    createProducts,
    getProducts,
}
export default productService