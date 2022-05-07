import React, { useEffect, useState } from "react";
import { getProduct,productStar } from "../functions/product";
import SingleProduct from "../components/cards/SingleProduct";
import {Tabs} from 'antd';
import {CheckOutlined} from '@ant-design/icons';
import {useSelector} from 'react-redux';
import {getRelated} from "../functions/product";
import ProductCard from "../components/cards/ProductCard";
const {TabPane} = Tabs;

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const [star,setStar] = useState(0);
  const { slug } = match.params;
  const [related,setRelated] = useState([]);
  const {user} = useSelector((state) => ({...state}));
  useEffect(() => {
    loadSingleProduct();
  }, [slug]);
  useEffect(() => {
    if (product.ratings && user) {
      let existingRatingObject = product.ratings.find(
        (ele) => ele.postedBy.toString() === user._id.toString()
      );
      existingRatingObject && setStar(existingRatingObject.star); // current user's star
    }
  });
 
  const onStarClick = (newRating, name) => {
    setStar(newRating);
    console.table(newRating, name);
    productStar(name, newRating, user.token).then((res) => {
      console.log("rating clicked", res.data);
      loadSingleProduct(); // if you want to show updated rating in real time
    });
  };
  
  const loadSingleProduct = () => {
    getProduct(slug).then((res) => {
      setProduct(res.data)
      //load related product
      getRelated(res.data._id).then(res => setRelated(res.data));
    });
  }
    
    

  return (
    <div className="container-fluid">
      <div className="row pt-4">
      <SingleProduct
          product={product}
          onStarClick={onStarClick}
          star={star}
        />
        </div>
      <hr />
      
      <div className="row ml-35">
        <div className="col-md-7" style={{marginLeft:'auto',marginRight:'auto'}}>
        <Tabs type="card">
          <TabPane  tab="Description" key="1">
            <p style={{fontSize:16}}>{product.description && product.description}</p>
          </TabPane>
          <TabPane tab="Authenticity" key="2">
            <p className="text-danger mb-3" style={{fontSize:18}}>HOW CAN YOU BE SURE OF AUTHENTICITY OF YOUR PURCHASE?</p>
            <p><CheckOutlined className="text-danger mr-2"/>Imported Products have either an Importer Sticker or Importer details printed in the label</p>
            <p><CheckOutlined className="text-danger mr-2"/>All products should have Expiry Date and Batch Number printed on the label</p>
            <p><CheckOutlined className="text-danger mr-2"/>Tax Paid retail Invoice is provided in all orders</p>
            <p><CheckOutlined className="text-danger mr-2"/>We are certified & authorised by the Brands or their official Importers</p>
          </TabPane>
        </Tabs>  
        </div>       
        
      </div>
      <div className="row">
        <div className="col text-center pt-5 pb-5">
          <hr />
          Related Products
          <hr />
        </div>
      </div>
      <div className="row pb-5">
      {related.length ? related.map((r) => (
        <div className="col-md-3" key={r._id}><ProductCard product={r}/></div> 
      )):<div className="text-center col">No Product Found</div>}
      </div>
    </div>
  );
};

export default Product;
