const express = require('express')
const mongoose =require('mongoose')
const cors=require('cors')
const authRouter=require('./routes/authRoute')
const productRouter=require('./routes/productRoute')
const adminRouter = require('./routes/adminRoute')


const app = express()
app.use(cors())
app.use(express.json())

app.use('/users',authRouter)
app.use('', productRouter);
app.use('', adminRouter);


mongoose.connect('mongodb+srv://bd7l6ka24:fidan123@cluster0.vknliuk.mongodb.net/')
  .then(() => console.log('Connected!'));


app.use((err, req, res, next)=>{
    err.statuCode=err.statuCode || 500
    err.status=err.status || 'error'
    res.status(err.statuCode).json({
        status: err.statuCode,
        message: err.message,
    })
})

const PORT=8080
app.listen(PORT,()=>console.log(` Port Update ${PORT}`))