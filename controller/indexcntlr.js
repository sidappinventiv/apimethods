const validation = require('../middleware/validate');

const createStudent = (req, res) => {
  const { id, namee, age } = req.body;
  const newStudent = { id, namee, age };

  const { error, value } = validation.validateStudent(newStudent);
  if (error) return res.status(400).send(error.details);

  console.log(value);
  res.send({ mes: 'Successfully sent' });

  students.push(newStudent);
  res.json(newStudent);
};

module.exports = {
  createStudent,
};

