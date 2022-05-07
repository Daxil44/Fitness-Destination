import React,{useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {createOrder,getUserCart,emptyUserCart,saveUserAddress,applyCoupon} from "../functions/user";
import {toast} from "react-toastify";
import ReactQuill from "react-quill";
import validator from 'validator'
import "react-quill/dist/quill.snow.css";
const Checkout = ({ history }) => {
    const [products,setProducts] = useState([]);
    const [total,setTotal] = useState(0);
    const [address,setAddress] = useState("");
    const [coupon,setCoupon] = useState("");
    const [totalAfterDiscount,setTotalAfterDiscount] = useState(0);
    const [discountError,setDiscountError] = useState("");
    const [addressSaved, setAddressSaved] = useState(false);
    const {user} = useSelector((state) => ({...state}));
    const dispatch = useDispatch();
    
    useEffect(() => {
        getUserCart(user.token)
        .then((res) => {
            setProducts(res.data.products);
            setTotal(res.data.cartTotal);
            
        });
    },[]);
  const saveAddressToDb = () => {
     
    if(validator.trim(address).length===0) {
      toast.error("Please Fill Address");
      
      return;
    }
    saveUserAddress(user.token, address).then((res) => {
      if (res.data.ok) {
        setAddressSaved(true); 
        history.push("/payment");       
      }
    });
  };
  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      setProducts([]);
      setTotal(0);
      setTotalAfterDiscount(0);
      setCoupon("");
      toast.success("Cart is Empty, Continue Shopping!.");
    });
  };
  const applyDiscountCoupon = () => {
  
    applyCoupon(user.token, coupon).then((res) => {
      
      if (res.data) {
        setTotalAfterDiscount(res.data);
        // update redux coupon applied true/false
        dispatch({
          type: "COUPON_APPLIED",
          payload: true,
        });
      }
      // error
      if (res.data.err) {
        setDiscountError(res.data.err);
        // update redux coupon applied true/false
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
      }
    });
  };
  const showAddress = () => 
    <>
        <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} />
        
    </>
  
  const showProductSummary = () => 
    products.map((p, i) => (
      <div key={i}>
        <p>
          {p.product.title} ({p.flavor}) x {p.count} ={" "}
          ₹{p.product.price * p.count}
        </p>
      </div>
    ))
    const showApplyCoupon = () => (
      <>
        <input
          onChange={(e) => {
            setCoupon(e.target.value);
            setDiscountError("");
          }}
          value={coupon}
          type="text"
          className="form-control"
        />
        <button onClick={applyDiscountCoupon} className="btn btn-primary mt-2">
          Apply
        </button>
      </>
    );
  

  return (
    <div className="row">
      <div className="col-md-6">
        <h4>Delivery Address</h4>
        <br />
        <br />
        {showAddress()}
        <hr />
        <h4>Got Coupon?</h4>
        <br />
        {showApplyCoupon()}
        <br />
        {discountError && <p className="bg-danger p-2">{discountError}</p>}
      </div>

      <div className="col-md-6">
        <h4>Order Summary</h4>
        <hr />
        <p>Products {products.length}</p>
        <hr />
        {showProductSummary()}
        <hr />
        <p>Cart Total: ₹{total}</p>
        {totalAfterDiscount > 0 && (
          <p className="bg-success p-2">
            Discount Applied: Total Payable: ₹{totalAfterDiscount}
          </p>
        )}

        <div className="row">
          <div className="col-md-6">
            <button 
            className="btn btn-primary" 
            disabled={!products.length}
            onClick={saveAddressToDb}>
              Place Order
              </button>
          </div>

          <div className="col-md-6">
            <button
              disabled={!products.length}
              onClick={emptyCart}
              className="btn btn-primary"
            >
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
