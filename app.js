var express = require("express");
const users = [
   { 
      id: 1,
      name: "John Smith",
      email: "john@gmail.com"
   },
   { 
      id: 2,
      name: "Kerry Packer",
      email: "kerrypacker@gmail.com"
   },
   { 
      id: 3,
      name: "Dany West",
      email: "dany@gmail.com"
   },
];

function findById(user, id,arr, param) {
    return user.id == userId ;
}

const app = express();

/*
app.get('/users', (req, res) => {
    res.status(200).send({
        success:'true',
    })
});
*/

app.get('/user/', (req, res) => {
    userId = req.query.id;
    res.status(200).send({
        success:'true',
        users: users.find(findById)
    })
});
const PORT = 4321;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});