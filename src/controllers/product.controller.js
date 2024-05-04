const ProductModel = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getProducts };
