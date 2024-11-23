// 1.importing
const express = require("express")
// 2.intialize
const app= new express()
app.use(express.json());

const dbArray=[
    {name:"Tiya",age:12},
    {name:"Maya",age:42},
];
// 3.api creation
app.get('/',(req,res)=>{
    res.send("Message from the server")
})
app.get('/trial',(req,res)=>{
    res.send("trial message")
})
app.get('/arr',(req,res)=>{
    res.send(dbArray)
})
// update method
app.put('/edit',(req,res)=>{
    dbArray.splice(1,1,req.body);
    res.send("Updated successfully!")
})
// delete method
app.delete('/remove',(req,res)=>{
    dbArray.pop();
    res.send("Deleted successfully!")
})
app.post('/add',(req,res)=>{
    console.log(req.body)
    dbArray.push(req.body)
    res.send("Data added")
})
// 4.port
app.listen(8080,()=>{
    console.log("port is running")
})