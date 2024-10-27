const Product = require('../models/productModel');

// Create a new product
exports.createProduct = async (req, res) => {
    const { name, description, price, category, countInStock, imageUrl } = req.body;

    try {
        const product = new Product({
            name,
            description,
            price,
            category,
            countInStock,
            imageUrl,
        });

        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single product
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {

    try {
        const product = await Product.findByIdAndUpdate(req.params.id , req.body);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(() => res.json({ message: 'Product removed' }))
        .catch((err) => res.json({ error: err }));

};
