import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, PRODUCTS } from '../../constants'
import { Product } from '../../types'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => PRODUCTS
        })
    })
})


export const { useGetProductsQuery } = productApi;