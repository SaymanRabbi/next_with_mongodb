export const getProducts = async () => {
    const response = await fetch('http://localhost:5000/api/product');
    const data = await response.json();
    return data;
}


export const createProduct = async (product) => {
   
    const response = await fetch('http://localhost:5000/api/product/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
        
    });
    
}

