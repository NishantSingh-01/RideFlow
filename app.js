import express from 'express'
import morgan from 'morgan'
const app = express() ;


app.get('/',(req,res)=>{
    res.send(`hello Nishant`)
})

app.get('/stress-test',(req,res)=>{
    for(let i=0 ;i<1000000;i++){

    }
    res.send(`hello Nishant`)
})
app.use(morgan('dev'))
app.listen(5000,()=>{
    console.log(`Server is Running at 3000`)
})