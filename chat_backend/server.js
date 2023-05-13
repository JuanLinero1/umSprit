const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', userRoutes)  

const conn = async () => {
  try{
    const response = await mongoose.connect(process.env.MONGO_URL);
    if(response){
      [console.log("connection successfull")]
    } else{
      console.log("conn failed")
    }
  }
  catch(err){
    console.log(err)
  }
}
conn()

const server = app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT)
  
})



