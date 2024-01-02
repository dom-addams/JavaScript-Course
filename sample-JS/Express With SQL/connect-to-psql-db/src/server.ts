import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
// import People 

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

// Cors for cross origin allowance
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions)) // use cors middleware
app.use(bodyParser.json()) // support json encoded bodies

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
