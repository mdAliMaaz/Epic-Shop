import asyncHandler from "../utils/asyncHandler";
import { Request, Response, NextFunction } from "express";
import ErrorHandelr from "../utils/errorHandler";
import ApiResponse from "../utils/ApiResponse";
import { ProductTypes } from '../types'
import Product from "../model/product.model";


// Get Products
export const getProducts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const products = await Product.find();

    if (!products.length) {
        return next(new ErrorHandelr(404, "Products not found"))
    }
    else {
        res.status(200).json(products)
    }
})


// Create Product
export const createProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const { name, description, price, category, brand, image }: ProductTypes = req.body;


    if (!name || !description || !price || !category || !brand || !image) {
        return next(new ErrorHandelr(400, "All fields are required"))
    }

    const newProduct = await Product.create({ ...req.body })

    if (!newProduct) {
        return next(new ErrorHandelr(401, "Invlaid input"))
    }
    else {
        let response = new ApiResponse(true, "Product created successfully", newProduct)
        res.status(201).json(response)
    }
})

// TODO
//  Update product
//  Get Single product
//  Delete product