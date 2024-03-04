const ProductModel=require('../models/productModel');

exports.getProducts= async (req,res,next)=>{
    const query=req.query.keyword?{ name :{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}
   const Products= await ProductModel.find(query);

    res.json({
        success:true,
        Products
    })

}
exports.getSingleProducts=async (req,res,next)=>{
    
        try{
           const product= await ProductModel.findById(req.params.id);
           res.json({
            success:true,
            product
        })
        }catch(error) {
            res.status(404).json({
                success:false,
                message:'Unable to get Product With that ID'
            })
           
        }
  
}