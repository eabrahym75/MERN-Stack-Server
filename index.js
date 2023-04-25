import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import postRoutes from './routes/posts.js'
const app = express()


app.use(bodyParser.json({limit:"30mb", extended: true}))// we are sending some images so size is specified here 30mb
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())

app.use('/posts',postRoutes)

const CONNECTION_URL = "mongodb+srv://saintUser:mrsaint04@cluster0.vdyu9.mongodb.net/memories?authSource=admin&replicaSet=atlas-e1hd0u-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
const PORT = process.env.PORT || 5000


mongoose.connect(CONNECTION_URL).then(()=>console.log('Connected to DB')).catch((err)=>console.log(err.message))


app.listen(PORT ,()=>{
    console.log(`Server running on port ${PORT}`);
    
})