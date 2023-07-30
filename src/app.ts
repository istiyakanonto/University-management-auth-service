import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRoutes from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users/', usersRoutes)
//Testing purpose
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
