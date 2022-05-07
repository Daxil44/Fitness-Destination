import React, { useState, useEffect } from "react";
import {
  getProductByCount,
  fetchProductsByFilter,
} from "../functions/product";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/cards/ProductCard";
import {Menu,Slider,Checkbox, Button} from 'antd';
import { DollarOutlined ,DownSquareOutlined,StarOutlined} from "@ant-design/icons";
import {getCategories} from "../functions/category";
import Star from "../components/forms/Star";
const { SubMenu, ItemGroup } = Menu;
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price,setPrice] = useState([0,0]);
  let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;
  const [ok, setOk] = useState(false);
  const [categories, setCategories] = useState([]);
  let dispatch = useDispatch();
  const [categoryIds, setCategoryIds] = useState([]);
  const [star,setStar] = useState("");
  useEffect(() => {
    loadAllProducts();
    //fetch categoires
    getCategories().then((res) => setCategories(res.data));
  }, []);

  // 1. load products by default on page load
  const loadAllProducts = () => {
    getProductByCount(12).then((p) => {
      setProducts(p.data);
      setLoading(false);
    });
  };
  // 3. load products based on price range
  useEffect(() => {
    if(price[0]!==0 || price[1]!==0) {
      fetchProducts({ price });
    }
    else if(text==''){
      loadAllProducts();
    }    
  }, [ok]);
  // 2. load products on user search input
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text });
    }, 300);
    if(text=='') {
      loadAllProducts();
    }
    return () => clearTimeout(delayed);
    
  }, [text]);

  const fetchProducts = (arg) => {
    fetchProductsByFilter(arg).then((res) => {
      setProducts(res.data);
    });
  };

  
  //load products based on cateogry
  //show category in list of checkBox

  const showCategories = () => categories.map((c) => (
    <div className="mt-3" key={c._id}>
      <Checkbox 
      onChange={handleCheck} 
      value={c._id} 
      name="category" 
      className="pb-2 pl-3 pr-4"
      checked={categoryIds.includes(c._id)}
      >
        {c.name}
      </Checkbox>
      <hr/>
    </div>
  ))
  const handleCheck = (e) => {
        dispatch({
          type: "SEARCH_QUERY",
          payload: { text: "" },
        });
        setPrice([0, 0]);
        setStar("");
        let inTheState = [...categoryIds];
        let justChecked = e.target.value;
        let foundInTheState = inTheState.indexOf(justChecked);
        
        if(foundInTheState === -1) {
          inTheState.push(justChecked);
        } else {
          inTheState.splice(foundInTheState,1);          
        } 
        if(inTheState.length == 0){
          loadAllProducts();
        }
        setCategoryIds(inTheState);
        fetchProducts({category : inTheState});
  }
  const handleSlider = (value) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice(value);
    setCategoryIds([]);
    setStar("");
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };

  //show product by star rating
  const handleStarClick = (num) => {
    // console.log(num);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar(num);
    fetchProducts({ stars: num });
  };
  const removeStar = () => {
    loadAllProducts();
  }
  const showStars = () => (
    <div className="pr-4 pl-4 pb-2">
      <Star starClick={handleStarClick} numberOfStars={5} />
      <Star starClick={handleStarClick} numberOfStars={4} />
      <Star starClick={handleStarClick} numberOfStars={3} />
      <Star starClick={handleStarClick} numberOfStars={2} />
      <Star starClick={handleStarClick} numberOfStars={1} />
      <Button className="pt-1" onClick={removeStar}>Remove Star Filter</Button>
    </div>
  );
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
        <h4>Search/Filter</h4>
          <hr />

          <Menu defaultOpenKeys={["1", "2","3"]} mode="inline">
            <SubMenu
              key="1"
              title={
                <span className="h6">
                  <DollarOutlined /> Price
                </span>
              }
            >
              <div>
                <Slider
                  className="ml-4 mr-4"
                  tipFormatter={(v) => `₹${v}`}
                  range
                  value={price}
                  onChange={handleSlider}
                  max="10000"
                />
              </div>
            </SubMenu>
            <SubMenu
              key="2"
              title={
                <span className="h6-mb-3">
                  <DownSquareOutlined /> Categories
                </span>
              }
            >
              
              <div style={{overflow:"scroll",height:250 }}>{showCategories()}</div>
            </SubMenu>
            <SubMenu
              key="3"
              title={
                <span className="h6">
                  <StarOutlined /> Rating
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }}>{showStars()}</div>
            </SubMenu>
          </Menu>
        </div>

        <div className="col-md-9">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="text-danger">Products</h4>
          )}

          {products.length < 1 && <p>No products found</p>}

          <div className="row pb-5">
            {products.map((p) => (
              <div key={p._id} className="col-md-4 mt-3">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
