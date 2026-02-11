import express from 'express'
import config from './config.js';
import voluntariosRoutes from './routes/voluntariosRoutes.js'
import accesoRoutes from './routes/accesosRoutes.js'
import activitiesRoutes from './routes/activitiesRoutes.js'
import visitasRoutes from './routes/visitasRoutes.js'
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express()
const options = {
    origin: "*",
    methods: ["OPTIONS, POST, GET, DELETE, PUT"],
    allowedHeaders: "Content-Type",
    optionsSuccessStatus: 204
}

//settings
app.use(cors(options))
app.set('port', config.port)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(voluntariosRoutes)
app.use(accesoRoutes)
app.use(activitiesRoutes)
app.use(visitasRoutes)

export default app