const mongoose= require('mongoose');

const trans_schema =new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'please enter text'],

    },
    amount:{
        type:Number,
        required:[true,'please enter amount in number'],
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('transact',trans_schema);