import products from "../models/products.model.js";
import users from "../models/users.model.js";
//finding all products
const get_all_Products = async (req, res) => {
  try {
    const allproducts = await products.find({});
    res.status(200).json({
      success: true,
      message: "all products",
      products: allproducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "product not found",
      error: error.messages,
    });
  }
};

//get product by user id
const getProductsByAdmin = async (req, res) => {
  try {
    const adminUserId = req.params.adminUserId;
    const products = await products.find({ adminUser: adminUserId });
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//finding product by id
const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await products.findById(id);
    res.status(200).json({
      succes: true,
      message: " product found",
      product,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "requested product not found",
      error: error.message,
    });
  }
};

//updating
const productUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedproduct = await products.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      succes: true,
      message: " product updated!",
      product: updatedproduct,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "product not updated",
      error: error.message,
    });
  }
};

//find by id and delete
const productDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedproduct = await products.findByIdAndDelete(id, req.body);
    res.status(200).json({
      succes: true,
      message: " product deleted",
      product: deletedproduct,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "product not deleted",
      error: error.message,
    });
  }
};

//sending data to the database:
const AdminproductPost = async (req, res) => {
  try {
    const adminUserId = req.params.adminUserId;
    const adminUser = await users.find({ adminUser: adminUserId });

    if (!adminUser) {
      res.status(404).json({
        success: false,
        message: "unauthorized",
      });
    }

    const adminProductData = { ...req.body, adminUser: adminUserId };
    const created_product = await products.create(adminProductData);
    res.status(201).json({
      success: true,
      message: "admin product created",
      products: created_product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: " product not created",
      error: error.message,
    });
  }
};
//admin product post
const productPost = async (req, res) => {
  try {
    const created_product = await products.create(req.body);
    res.status(201).json({
      success: true,
      message: "product created",
      products: created_product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: " product not created",
      error: error.message,
    });
  }
};

export {
  get_all_Products,
  productDelete,
  productPost,
  productUpdate,
  singleProduct,
  getProductsByAdmin,
  AdminproductPost,
};
