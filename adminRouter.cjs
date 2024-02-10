import  express from 'express'
import  * as dbModule from './index.js'

const app = express()

const adminRouter = express.Router()

adminRouter.get('/getDetails',async ()=>{
    const notes =  await dbModule.getDetails()
    res.send(notes)
})


module.exports = adminRouter

