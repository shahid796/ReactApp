import logo from './logo.svg';
import './App.css';
import { Head } from './components/Head';
import { Main } from './components/Main';
import { Cart } from './components/Cart';
import data from './components/Data';
import { useState } from 'react';



function App() {
  const [productlist,setproductlist]=useState(data["products"])
  const [cartitem,setcartitem] = useState([])
  const no_of_items_cart=cartitem.length
  const additem=(product)=>{
    
   let exit=cartitem.find((item)=>item.id==product.id)
   if(exit){
    let updatecart = cartitem.map((x)=>{
       return x.id==product.id?{...exit,qty:exit.qty+1}:{...x}
     });
     setcartitem(updatecart)
   }
   else{
     setcartitem([...cartitem,{...product,qty:1}])
   }
  }
  const onnremove=(product)=>{
   console.log("cart ",product);
   if(product.qty==1){
     let new_cartitem = cartitem.filter((item)=>{
       if(product.qty == 1){
         return item.id != product.id;
       }
     })
     setcartitem(new_cartitem)
   }else{
    const lesscart = cartitem.map((item)=>{
       return item.id == product.id?{...product,qty:product.qty-1}:{...item}
     })
   setcartitem(lesscart)
   }
  }
  return (
    <div>
       <Head></Head>
       <div className="row" >
         <div className="col-sm-8 backp">
         <Main onadd={additem} prodlist={productlist}></Main>
         </div>
         <div  className="col-sm-4 backc">
         <Cart cartitem={cartitem} onnadd={additem} onnremove={onnremove}></Cart>
         </div>
       </div>
    </div>
  );
}

export default App;
