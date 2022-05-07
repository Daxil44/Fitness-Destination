import React,{useEffect,useState} from "react";
import {getProducts} from "../../functions/product"
import ProductCard from "../cards/ProductCard";
import LoadingCard from "../cards/LoadingCard";


const BestSellers = () => {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  
  useEffect(() => {
    loadAllProducts();
  }, [])
  const loadAllProducts = () => {
    setLoading(true);
    getProducts('sold','desc',4)
    .then(res => {
      setProducts(res.data);
      setLoading(false);
    })
  }

  return (
    <>
    <div className="container">
      {loading ? <LoadingCard count={4}/> :  <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product._id}>
              <ProductCard product={product} />
          </div>
        ))}
      </div>}
    </div>
    </>
  );
}

export default BestSellers;
