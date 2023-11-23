export interface ProductTypes {
    name: string,
    image: { url: string, public_id: string }
    description: string
    brand: string
    category: string
    price: number
    countInStock?: number
    rating?: number
    numReviews?: number
}