import express from 'express'

const router = express.Router();

router
.get('/profile', (req,res)=>{
    res.send('My profile');
})

export default router;