import React from "react";
import ModalImage from "react-modal-image";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {CloseOutlined} from "@ant-design/icons";
const ProductCardInCheckout = ({ p }) => {  
  let dispatch = useDispatch(); 
  const flavor = p.flavor;
  
  
  //console.log(flavor);
  const handleFlavorChange = (e) => {
   

    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].flavor1 = e.target.value;
        }
      });

      //  console.log('cart udpate color', cart)
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };
  const handleRemove = () => {
    // console.log(p._id, "to remove");
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };
  const handleQuantityChange = (e) => {
    
   // console.log("available quantity", p.quantity);
    let count = e.target.value < 1 ? 1 : e.target.value;
    // console.log(count);
    if (count > p.quantity) {
      toast.error(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == p._id && product.flavor1 == p.flavor1) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };
  return (
    <tbody>
      <tr>
        <td>
          <div style={{width:'100px',height:"auto"}}>
            {p.images.length ? (<ModalImage small={p.images[0].url}
            large={p.images[0].url}/>) : 
            (<ModalImage small="https://res.cloudinary.com/gymproject/image/upload/v1615737190/catalog-default-img_vllzfn.gif"
              large="https://res.cloudinary.com/gymproject/image/upload/v1615737190/catalog-default-img_vllzfn.gif"/>)}
          </div>
        </td>
        <td>{p.title}</td>
        <td>₹{p.price}</td> 
        <td>{p.weight1}</td> 
             
        <td> <select
            onChange={handleFlavorChange}
            name="flavor"
            className="form-control"
          >
            {p.flavor1 ? (
              <option value={p.flavor1}>{p.flavor1}</option>
            ) : (
              <option>Select</option>
            )}
              {flavor
              .filter((c) => c !== p.flavor1)           
              .map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
          </select></td>
          <td className="text-center">
          <input
            type="number"
            className="form-control"
            value={p.count}
            onChange={handleQuantityChange}
          />
        </td>      
        <td className="text-center"><CloseOutlined onClick={handleRemove} className="text-danger pointer"/></td>
      </tr>
    </tbody>
  );
};

export default ProductCardInCheckout;
