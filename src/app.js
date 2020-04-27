import express from 'express'
import routes from './routes/routes'
import ejs from 'ejs'

const app = express();

app.use(express.json({limit:'50mb' }));
app.use(express.urlencoded({ limit:'50mb' , extended:true }));
app.use(express.static(`${__dirname}/public`));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.use(routes);
app.get('/', (req,res)=>{
    res.render('indexView')
})
app.listen(port , () => {
    console.log('ok');
});

export default app;