const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

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



