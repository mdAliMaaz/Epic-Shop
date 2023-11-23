import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    image: {
        url: String,
        public_id: String,
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        default: 1
    },
    rating: {
        type: Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    },


}, { timestamps: true })

const Product = mongoose.model("Product", productSchema);

export default Product