const { getProducts } = require("../controllers/product.controller");

const router = require("express").Router();

router.get("/products", getProducts);

module.exports = router;
