import React from 'react'
import './Main.css';
import { Products } from './Products';


export const Main = ({prodlist,onadd}) => {
    return (
        <div>
            <h1 className="h1">Products</h1>
            <div className="row">
            {
                prodlist.map((product)=>{
                    return(
                        <div className="col-sm-4">
                    <Products key={product.id} product={product}  onadd={onadd}></Products>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}
