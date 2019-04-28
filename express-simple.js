
const express = require('express')
const lodash = require('lodash')
const app = express()
const bodyParser = require('body-parser')
const {users, createUser, updateUser} = require('./models/user.js')
const port = 3000
//---------------------------------------------------------------------

app.use(bodyParser.json());


//---------- Get users---(orginal array)----------------------------------- 
app.get('/users', (req, res) => {
  res.send(users)
})

//-----------------  user with ID-------------------------------------
app.get('/users/:id', (req, res) => {

  const user = users.find( elem => elem.id == req.params.id );

  if(!user) res.status(404)
	    res.send( 'The User with the given Id is NOT found... :(' );	

  res.send(user);
  res.end();
  
})



//---------------------- Create a new user--------------------------

app.post('/users/', (req, res) => {
  
  const user1= users.find( elem => elem.email === req.body.email )
  
  if(user1) {

    res.status(403)
    res.send( 'It is NOT allowed to create a user with an existing Email..' );
	
  } else {

    const users = createUser(req.body);
    res.send(users)
  }  
  
  
})


//----------------------- Update a user1 with  the ID----------------------------

app.put('/users/:id', (req, res) => {

  const user1= users.find( elem => elem.email === req.body.email )
  
  if(user1){

    res.status(403)
    res.send( 'It is NOT allowed to enter an existing Email..' );

  } else {

    const users = updateUser( req.params.id, req.body )
    res.send(users)
  }

})



//-------------------- Delete a user ---------------------

app.delete('/users/:id', (req, res) => {

  const user = users.find( elem => elem.id == req.params.id );

     if(!user) res.status(404)
	    res.send( 'The User with the given Id is NOT found...:(' );	

      const index = users.indexOf(user);
      users.splice(index, 1);
  
  res.send(user);
  res.end();

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
