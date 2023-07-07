const Joi = require('joi')

const schema = Joi.object({
    name : Joi.string(),
    id : Joi.number().min(1).max(100).$_matchrequired(),
});

const writ = {
    name:'sid',
    //age:20
}

const{error, value} = schema.validate(writ);
if(error){
    console.log(error.message);
 
}
else console.log(value);