const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({

    cartIteams:Array,
    amount:String,
    status:String,
    cratedAt:Date
})

const orderModel=mongoose.model('Order',orderSchema);

module.exports=orderModel;