import express from 'express'
const app= express()
app.get('/',(req,res)=>{
    res.send('server is ready')
})

const port=process.env.PORT||3000 //using hard coded and environment port

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
})