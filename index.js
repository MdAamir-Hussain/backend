const express = require('express')
const app = express()




app.get('/',(req, res)=>{
    res.send('hello from server!!!!!!  how are you what are doing')
})


app.listen(3000)