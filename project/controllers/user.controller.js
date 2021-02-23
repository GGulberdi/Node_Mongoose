const User = require('../models/user.model');


exports.create = (req, res) => {
    const user = new User({
        
            email:req.body.email,
            password:req.body.password,
            name:req.body.name,
            age:req.body.age,
            gender:req.body.gender,
            isActive:req.body.isActive,
            userType:req.body.userType
                    
    })
    user.save(user)//user??????
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
      });
    });
 }



 exports.findAll = (req, res) => {
    const user = req.query.users;
 
    User.find(user)//user??????
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      });
  };
 

  
  exports.findOne = (req, res) => {
    const id = req.params.id;
      User.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Users with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Users with id=" + id });
      });
  };
  
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete User with id=${id}. Maybe user Item was not found!`
          });
        } else {
          res.send({
            message: "User was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete user with id=" + id
        });
      });
  };


  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    User.findByIdAndUpdate(id, req.body, { new: true })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update user with id=${id}. Maybe user was not found!`
          });
        } else res.send({ message: "User was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating user with id=" + id
        });
      });
  };