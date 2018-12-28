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
      email: "kerry@gmail.com"
   },
   { 
      id: 3,
      name: "Dany West",
      email: "dany@gmail.com"
   },
];

function findById(user, id) {
    return user.id == id;
}

const app = express();

app.get('/allusers', (req, res) => {
    res.status(200).send({
        success:'true',
    })
});


app.get('/user/', (req, res) => {
    res.status(200).send({
        success:'true',
        users: users.find(findById,req.query.id),
    })
});
const PORT = 4321;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});