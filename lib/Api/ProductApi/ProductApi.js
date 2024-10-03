import instance from "../BaseApi/BaseApi";
console.log(instance,"test")

// Fetching Products
export const getProducts = async () => {
    try {
        const response = await instance.get(`/product/get`);
        return response.data; // Axios automatically parses JSON
    } catch (error) {
        console.error("Error fetching products", error);
        throw error;
    }
}

// Creating a New Product
export const createProduct = async (product) => {
    try {
        const response = await instance.post(`/product/create`, product); 
        return response.data;
    } catch (error) {
        console.error("Error creating product", error);
        throw error;
    }
}

