import express, {Request, Response} from 'express';
import cors from 'cors';
import TranslationsRoutes from './modules/translations/routes.translations';

const app = express()
const host = "localhost"
const port = 4000

app.use(express.json({ limit: 1024102420, type: "application/json" }));
app.use(cors());

app.get('/', function (req: Request, res: Response) {
    res.send('Hello Team5')
    console.log(new Date(), ': get "/"')
  })

app.post('/translate', TranslationsRoutes.translateText)

app.listen(
    port, 
    host, 
    () => {
        console.log(`Server runs on ${host}: ${port}`)
    }
);