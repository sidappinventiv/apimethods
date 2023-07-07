const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexcntlr');

router.post('/students', indexController.createStudent);

module.exports = router;




















// const router = express.Router();
// const indexcntlr = require('../controller/indexcntlr');


// router.post('/students', (req, res) => {
//     const { id, namee, age } = req.body;
//     const newStudent = { id, namee, age };
  
//     // const {error,value}= schema.validate(newStudent)
//     // if(error) return res.status(400).send(error.details);
//     // //res.send(response)
//     // console.log(value);
//     res.send({mes:"suscefully send"})

//     // students.push(newStudent);
//     // res.json(newStudent);
//   });









// module.exports = Route;