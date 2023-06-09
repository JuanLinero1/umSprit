const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true, 
    unique: true, 
    max: 50, 
  },
  password: {
    type: String,
    required: true, 
    min: 8,
    max: 30
  },
  isAvatarImage: {
    type: Boolean, 
    default: false
  },
  avatarImage: {
    type: String, 
    default: "",
  }
})

module.exports = mongoose.model('Users', userSchema)