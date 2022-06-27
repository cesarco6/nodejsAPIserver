import express from "express";
import cors from 'cors'
// Importamos la conexion a la BD
import db from "./database/db.js"

import blogRoutes from './routes/routes.js'

const app = express()
app.use( cors() )
app.use(express.json())
app.use('/blogs', blogRoutes)


try {
    await db.authenticate()
    console.log('Conección exitosa con la BD')
} catch (error) {
    console.log(`Error en la conección a BD: ${error}`)
}

app.get('/', (req, res) => {
    res.send('Hola weyes del nodejs')
})

app.listen(8000, () => {
    console.log('Server is Up and Running in http://localhost:8000/')
})