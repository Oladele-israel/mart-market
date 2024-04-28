import {
  get_all_Products,
  productDelete,
  productPost,
  productUpdate,
  singleProduct,
  AdminproductPost,
  getProductsByAdmin,
} from "../controller/products.controller.js";
import express from "express";
import { checkAndRenewToken } from "../middleware/validatoken.js";
const router = express.Router();

router.get("/all", get_all_Products);
router.get("/admin/:id", checkAndRenewToken, getProductsByAdmin);
router.get("/:id", singleProduct);
router.post("/", checkAndRenewToken, productPost);
router.post("/adminProduct", checkAndRenewToken, AdminproductPost);
router.put("/:id", checkAndRenewToken, productUpdate);
router.delete("/:id", checkAndRenewToken, productDelete);

export default router;
