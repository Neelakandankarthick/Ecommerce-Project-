import { Fragment, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export default function Cart({cardItems,setCardItems}) {
    const[complete,setComplete]=useState(false);
 

    function increaseQty(item){
        if(item.product.stock==item.qty){
            return;
        }
        const updatedItems=cardItems.map((i)=>{
            if(i.product._id==item.product._id){
                i.qty++
            }
            return i;
        })
        setCardItems(updatedItems)
       }
       function decreaseQty(item){
        if(item.qty>1){
            const updatedItems=cardItems.map((i)=>{
                if(i.product._id==item.product._id){
                    i.qty--
                }
                return i;
            })
            setCardItems(updatedItems)
    }
}
function removeItem(item){
    const updatedItems=cardItems.filter((i)=>{
        if(i.product._id !==item.product._id){
            return true;
           
        }
      })
    setCardItems(updatedItems)

}

function PlaceOrderHandler(){
    fetch(process.env.REACT_APP_API_URL+'/order',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(cardItems)
    })
    .then(()=>{
        setCardItems([]);
        setComplete(true);
        toast.success("Oder Success")
    })
     }
    
   

    return  cardItems.length> 0 ? <Fragment> 
        <div class="container container-fluid">
        <h2 class="mt-5">Your Cart: <b>{cardItems.length} items</b></h2>
        <div class="row d-flex justify-content-between">
            <div class="col-12 col-lg-8">
                {cardItems.map((item)=>
                <Fragment>
                <hr />
                <div class="cart-item">
                    <div class="row">
                        <div class="col-4 col-lg-3">
                            <img src={item.product.images[0].image} alt="{item.product.name}" height="90" width="115" />
                        </div>

                        <div class="col-5 col-lg-3">
                        <Link  to={"/product/"+item.product._id}>{item.product.name}</Link>
                        </div>


                        <div class="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">${item.product.price}</p>
                        </div>

                        <div class="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div class="stockCounter d-inline">
                                <span class="btn btn-danger minus" onClick={()=>decreaseQty(item)}>-</span>
                                <input type="number" class="form-control count d-inline" value={item.qty} readOnly />

                                <span class="btn btn-primary plus" onClick={()=>increaseQty(item)}>+</span>
                            </div>
                        </div>

                        <div class="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item"  onClick={()=>removeItem(item)} class="fa fa-trash btn btn-danger"></i>
                        </div>

                    </div>
                </div>
                </Fragment>
                )}
               
            </div>

            <div class="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span class="order-summary-values">{cardItems.reduce((acc,item)=>(acc+item.qty),0)} (Units)</span></p>
                    <p>Est. total: <span class="order-summary-values">{cardItems.reduce((acc,item)=>(acc+item.product.price * item.qty),0).toFixed(2)}</span></p>

                    <hr />
                    <button id="checkout_btn"  onClick={PlaceOrderHandler}  class="btn btn-primary btn-block">Place Order</button>
                </div>
            </div>
        </div>
    </div>

    </Fragment>:(!complete ? <div>
      <img className="mx-auto d-block" width="400px" src="\images\products\giphy.gif" alt="Empty Animation" />
      <h2 className='text-center'>Your Card is Empty!</h2>
    </div>
    :
    <Fragment>
       <img className="mx-auto d-block" width="400px" src="\images\products\success.gif" alt="Success Animation" />
          <h2 className='text-center'>Order SuccessFully </h2>
          </Fragment>)
}