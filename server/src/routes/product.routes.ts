import { Router } from "express";
import { getProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } from "../controller/product.controller";

const router = Router()

router.route("/").get(getProducts)

router.route("/add").post(createProduct)

router.route("/:id").get(getSingleProduct)

router.route("/:id").patch(updateProduct)

router.route("/:id").delete(deleteProduct)



export default router