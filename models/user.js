const shortid = require('shortid');
const users = [
  {id: 1, name: 'John Doe', email: 'john@hyf.com'},
  {id: 2, name: 'Jane Doe', email: 'jane@hyf.com'}
]
//-------------------------------new user-----------------------
const createUser = data => {
  
  const newUser = {
    id : shortid.generate(),
    name : data.name,
    email : data.email
  }

  users.push(newUser);

  return users;
}

//--------------------------------------update user---------------------
const updateUser = (id, data) => {
  const index = users.findIndex(user => user.id === id);

  users[index].name = data.name;
  users[index].email = data.email;

  return users;
}

//--------------------------------------export files--------------------------
module.exports = {
  users,
  createUser,
  updateUser
}

