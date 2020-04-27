import express from 'express'

const app = express();

app.use(express.json({limit:'50mb', extended:true}));

const port = process.env.PORT || 3000;

app.use(routes);
app.get('/',(req,res)=>{
    res.send('Hello ok');
})
app.listen(port , ()=>{
    console.log('ok');
});

export default app;