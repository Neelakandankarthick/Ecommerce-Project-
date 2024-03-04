const mongoose=require('mongoose');

const productSchema =new mongoose.Schema({

    name:String,
    price:String,
    description:String,
    ratings:String,
    Image :[
        {
            Image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numReviews:String,
    createdAt:Date
});

const ProductModel= mongoose.model('Product',productSchema);

module.exports=ProductModel;