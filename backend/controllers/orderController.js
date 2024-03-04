const orderModel=require('../models/orderModel');
const ProductModel=require('../models/productModel');

exports.createOrder= async(req,res,next)=>{
    const cartIteams=req.body;
    const amount=Number(cartIteams.reduce((acc,item)=>(acc+item.product.price * item.qty),0)).toFixed(2);
    const status='Pending';
    const order=await orderModel.create({cartIteams,amount,status})
    //Updatin prodct stock

    cartIteams.forEach(async (item) => {
        const product=await ProductModel.findById(item.product._id);
        product.stock=product.stock -item.qty;
        await product.save();
        
    })
 
    res.json(
        {
            success:true,
            order
        }
    )
}