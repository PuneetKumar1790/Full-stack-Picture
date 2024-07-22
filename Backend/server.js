import express from 'express'
const app= express()
app.get('/',(req,res)=>{
    res.send('server is ready')
})
//Get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    let jokes = [
        {
            id: 1,
            joke: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            joke: "I told my wife she should embrace her mistakes. She gave me a hug."
        },
        {
            id: 3,
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 4,
            joke: "Parallel lines have so much in common. It’s a shame they’ll never meet."
        },
        {
            id: 5,
            joke: "What's orange and sounds like a parrot? A carrot!"
        }
    ];
    res.send(jokes)
    
    

})

const port=process.env.PORT||3000 //using hard coded and environment port

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
})