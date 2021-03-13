class Item {
    constructor(iname, iprice) {
        this.iname = iname;
        this.iprice = iprice;
    }
}

module.exports = Item;

// let mongoose = require('mongoose');
// let validator = require('validator');

// let userSchema = new mongoose.Schema({
//     username: String,
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         validate: (value)=>{
//             return validator.isEmail(value)
//         }
//     }
// });

// module.exports = mongoose.model('User', userSchema);