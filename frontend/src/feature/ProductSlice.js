import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./ProductService";

const initialState = {
    isError : false,
    isSuccess : false,
    isLoading : false,
    Products : [{}]
}

const productsSlice = createSlice({
    name : "products" , 
    initialState,
    reducers: {

    },
    extraReducers:  (builder)=> {
        builder
        .addCase(createProduct.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(createProduct.fulfilled , (state )=>{
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(createProduct.rejected , (state)=>{
            state.isLoading = false
            state.isError = true
        })
        .addCase(getProducts.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(getProducts.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.Products = action.payload
        })
        .addCase(getProducts.rejected , (state)=>{
            state.isLoading = false
            state.isError = true
        })
        .addCase(filterData.fulfilled , (state , action)=>{
            state.Products = action.payload
        })

    }

})

export const createProduct = createAsyncThunk('create/product', async (Product, thunkAPI) => {
    try {
        return await productService.createProducts(Product)
    } catch (error) {
        const massage = error.response.data.message
        return thunkAPI.rejectWithValue(massage)
    }
})

export const getProducts = createAsyncThunk('create/get', async ( thunkAPI) => {
    try {
        return  await productService.getProducts()
    } catch (error) {
        const massage = error.response.data.message
        return thunkAPI.rejectWithValue(massage)
    }
})

export const filterData = createAsyncThunk('filter/f',  ( data) => {
    return data
})


export default productsSlice.reducer