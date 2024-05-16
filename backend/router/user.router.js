const express = require('express');
const {createUser} = require('../controller/user.controller');
const { UserSchema } = require('../models/user.model');

const route = express.Router();


route.get('/login', createUser);
// route.get('/login', async (req, res) => {
//     try {
//     const {email, password} = req.body
//     const user = await userModel.findOne ({email: email})
//     if (user) {
//         if (user.password === password) {
//             res.json('Success');
//         } else {
//             res.json('The password is incorrect');
//         }
//     } else {
//         res.json('Please sign up');
//     }
// } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
// }
// });


module.exports = route;
