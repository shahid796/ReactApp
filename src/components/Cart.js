import React from 'react';
import './Cart.css';

export const Cart = ({cartitem,onnadd,onnremove}) => {
    const itemprice = cartitem.reduce((x,item)=>item.qty*item.price+x,0)
    const shipping=itemprice<200?50:0
    const totalprice=itemprice+shipping
    return (
        <div>
           <h1 className="h">Cart ({cartitem.length})
               </h1> 
               {cartitem.length==0?"cart is empty":""}
            
            {
                cartitem.map((item)=>{
                    return (
                        <>
                        <div>
                           item name = {item.name}<br/>
                           price:{item.price}
                            <p>quntity:{item.qty}
                            </p>
                            
                            
                            <button onClick={()=>{onnadd(item)}}> +</button>
                            <button onClick={()=>{onnremove(item)}}>-</button>
                           
                        </div>
                        
                        </>
                    
                    )
                })
            }
            {cartitem.length>0? (
            <div>
            
            <div>
                <h6>total price : {totalprice.toFixed(3)}</h6>
            </div></div>):(<></>
            )}
        </div>
    )
}
