import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {createProduct} from "../../../functions/product";
import { LoadingOutlined} from "@ant-design/icons";
import ProductCreateForm from "../../../components/forms/ProductCreateForm"
import {    
    getCategories,getCategorySubs,   
  } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
const initialState = {
    title:'',
    description:'',
    categories:[],
    price:'',
    category:'',
    subs:[],
    shipping:'',
    images:[],
    flavors:["Chocolate","Vanilla","Strawberry","Plain","None"],
    weights:["250gm","500gm","1kg","50caps","100caps","Fixed"],
    flavor:[],
    weight:[],
    quantity:'',

};

const ProductCreate = () => {
    const [values,setValues] = useState(initialState);
    const [subOptions,setSubOptions] = useState([]);
    const [showSub,setshowSub] = useState(false);
    const [loading,setLoading] = useState(false);
    const {user} = useSelector((state) => ({...state}));
    useEffect(() => {
        loadCategories();
      }, []);
      const loadCategories = () =>
    getCategories().then((c) => setValues({...values,categories:c.data}));
    //destructure of values

     const handleSubmit = (e) => {  
      e.preventDefault();
      createProduct(values,user.token)
      .then(res => {
        window.alert(`${res.data.title} is created`);
        window.location.reload();
      })
      .catch(err => {        
       // if(err.response.status === 400) toast.error(err.response.data);
          toast.error(err.response.data.err);
      })
  };
  const handleCategoryChange = (e) => {
      e.preventDefault();
      setValues({...values,subs:[],category : e.target.value});
      getCategorySubs(e.target.value).then((res) => {
          setSubOptions(res.data)
      });
      setshowSub(true);
  };
  const handleChange = (e) => {
    setValues({...values,[e.target.name] : e.target.value});  
  };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav/>
                </div>
                <div className="col-md-10">Product Create Form
                 {loading ? <LoadingOutlined className="text-danger h1"/> : <h4>Product Create</h4> }
                <hr/>     
                <FileUpload values={values} setValues={setValues} setLoading={setLoading} />          
                <ProductCreateForm 
                      handleSubmit={handleSubmit}
                      handleChange={handleChange}
                      handleCategoryChange={handleCategoryChange}
                      values={values}
                      subOptions={subOptions}
                      showSub={showSub}
                      setValues={setValues}

                />            
                </div>
            </div>
        </div>
    )
}
export default ProductCreate;