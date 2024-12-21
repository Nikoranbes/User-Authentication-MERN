import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.js'
import dotenv from 'dotenv';
dotenv.config();

connectDB();

const app = express()
app.use(express.json())
app.use(cors())


app.use('/api/auth', authRoutes)

export default app;