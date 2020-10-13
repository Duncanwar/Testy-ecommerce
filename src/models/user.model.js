import mongoose from 'mongoose'

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type: String,
        required: true,
        default: 'user'
    }
})

export default mongoose.model('User', userModel);