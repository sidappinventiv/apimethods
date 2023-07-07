const express = require('express');
const app = express();
//const port = 3500;
require('dotenv').config();
app.use(express.json());


const joi=require('joi')
const schema =joi.object({
    id : joi.number().required(),
    namee: joi.string().min(3).max(10).required(),
    age :joi.number().min(18).max(80).required(),
    
});

app.post('/students', (req, res) => {
    const { id, namee, age } = req.body;
    const newStudent = { id, namee, age };
   
    const {error,value}= schema.validate(newStudent)
    if(error) return res.status(400).send(error.details);
    //res.send(response)
    console.log(value);
    res.send({mes:"suscefully send"})

    students.push(newStudent);
    res.json(newStudent);
  });



  app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
});