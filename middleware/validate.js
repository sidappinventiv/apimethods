const joi = require('joi');

const schema = joi.object({
  id: joi.number().required(),
  namee: joi.string().min(3).max(10).required(),
  age: joi.number().min(18).max(80).required(),
});

const validateStudent = (newStudent) => {
  return schema.validate(newStudent);
};

module.exports = {
  validateStudent,
};