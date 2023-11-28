import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, PRODUCTS } from '../../constants'
import { Product } from '../../types'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({/*<ReturnType,parameter>*/
            query: () => PRODUCTS
        }),
        getProductById: builder.query<Product, string>({ /*<ReturnType,parameter>*/
            query: (id) => `${PRODUCTS}/${id}`
        })
    })
})


export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;