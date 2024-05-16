const UserSchema = require("../models/user.model");

exports.createUser = function(req, res){
    res.json({
        email: "john@gmai.com",
        password: "qwerty1234"
    });
}


//  exports.createUser = function (req, res) {
//   const user =  UserSchema.create(req.body);
//   const { email, password } = req.body;
//       console.log('Welcome to Logihub:', email, password);
//       res.json('Registration succesful!');
//   };