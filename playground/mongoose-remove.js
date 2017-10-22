const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


// Todo.remove({}).then((result) => {
//   console.log(result)
// })
//
// Todo.findOneAndRemove

//Todo.findByIdAndRemove

Todo.findByIdAndRemove("59ebac15c6e7aebf6d24373c").then((todo) => {
  console.log(todo);
}
