const Product = require("../Schema/ProductSchema");


const getProductsController = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createProductController = async (req, res) => {
    try {
        // rest data remove id 
        const { id, ...rest } = req.body;
        const product = await (await Product.create(rest)).save()
        res.status(200).json({
            message: "Product created successfully",
            product
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getProductsController, createProductController };
