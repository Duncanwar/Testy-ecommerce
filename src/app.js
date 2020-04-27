import express from 'express'
import routes from './routes/routes'
const app = express();

app.use(express.json({limit:'50mb' }));
app.use(express.urlencoded({ limit:'50mb' , extended:true }));

const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port , () => {
    console.log('ok');
});

export default app;