import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes/item'
import db from './config/mongo'

const PORT = process.env.PORT || 4001
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

db().then(() => console.log('MongoDB connected'))

app.listen(PORT, () => console.log(`Server listening for port: ${PORT}`))

