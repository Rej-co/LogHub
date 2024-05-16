const mongoose = require("mongoose");

const uri = 
"mongodb+srv://chinaogbuagu:onyedikachi@reggie.tow65aw.mongodb.net/Loghub?retryWrites=true&w=majority&appName=Reggie";

exports.dbconnect = async () => await mongoose.connect(uri);
 