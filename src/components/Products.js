import React from 'react'

export const Products = ({product,onadd}) => {
    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.img} height="150px" width="150px"></img>
            <h3>
                {product.price} Rs
            </h3>
            <button className="btn btn-success" onClick={()=>onadd(product)}>ADD TO CART</button>
        </div>
    )
}
