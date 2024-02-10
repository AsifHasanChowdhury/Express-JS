
import  express from 'express'
import  * as dbModule from './index.js'


const app = express()
const port = 8000

app.use(express.json());


app.get('/getAllNotes', async (req,res)=>{
   const notes =  await dbModule.getDetails()
    res.send(notes)
})


//query param Approach
app.get('/getNotesbyId' , async (req,res)=>{
    const id = req.params.id
    const note = await dbModule.getDetailsbyId(id)
    res.send(note)
})

//json body Approach
app.post('/getNotesbyId' , async (req,res)=>{
    const id = req.body.id
    const note = await dbModule.getDetailsbyId(id)
    res.send(note)
})


app.post('/AddDetails' , async (req,res)=>{
    const id = req.body.key
    const note = await dbModule.AddInformation(req.body.title,req.body.content)
    res.send(note)
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.get("/helloworld", (req, res) => {
    res.send('Hello World!')
  })
  

app.post("/jelloworld", (req, res) => {
      res.send('Hello World!')
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })