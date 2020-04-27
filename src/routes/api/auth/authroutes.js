import express from 'express'

const router = express.Router();

router
.post('/auth/signup' , (req,res)=>{
res.send("Sign up here");
})
.post('/auth/login' , (req,res)=>{
    res.send('This is for login here');
})

export default router ;