import asyncHandler from "../utils/asyncHandler";
import { Request, Response, NextFunction } from "express";
import ErrorHandelr from "../utils/errorHandler";
import ApiResponse from "../utils/ApiResponse";
import { ProductTypes } from '../types'
import Product from "../model/product.model";


// Get Products
export const getProducts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const products = await Product.find().lean();

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

export const getSingleProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;

    console.log(id)

    const product = await Product.findById(id);

    if (!product) {
        return next(new ErrorHandelr(404, `Product with Id ${id} not found`))
    }
    else {
        res.status(200).json(product)
    }
})


export const updateProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;

    const updateProduct = await Product.findByIdAndUpdate(id, { ...req.body }, { new: true })

    if (!updateProduct) {
        return next(new ErrorHandelr(401, "Invalid Input"))
    } else {

        res.status(200).json(new ApiResponse(true, "Product Updated Successful", updateProduct))
    }

})


export const deleteProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deleteProduct) {
        return next(new ErrorHandelr(401, "Invalid Input"))
    }
    else {
        res.status(200).json(new ApiResponse(true, "Product deleted Succssfullly"))
    }

})

// TODO
//  Delete product