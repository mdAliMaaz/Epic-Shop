import { Router } from "express";
import { getProducts, createProduct } from "../controller/product.controller";

const router = Router()

router.route("/").get(getProducts)

router.route("/add").post(createProduct)

export default router