import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { notFound, errorMiddleware } from './middleware/error.middleware'
import productRouter from './routes/product.routes'
import morgan from 'morgan'


const app = express();

// Configuration
dotenv.config()
app.use(express.json({ limit: "20kb" }))
app.use(express.urlencoded({ limit: "20kb", extended: true }))
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))
app.use(cookieParser())
app.use(morgan("dev"))


// Routes
app.use("/api/v1/product", productRouter)


// Error handling
app.use(notFound)
app.use(errorMiddleware)
export default app