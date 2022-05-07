import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm"
import {    
    getCategories,getCategorySubs,   
  } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import {getProduct,updateProduct} from "../../../functions/product";


const initialState = {
    title:'',
    description:'',    
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

const ProductUpdate = ({match,history}) => {    
    const {user} = useSelector((state) => ({...state}));
    const {slug} = match.params;
    const [values,setValues] = useState(initialState);
    const [showSub,setshowSub] = useState(false);
    const [subOptions,setSubOptions] = useState([]);
    const [categories,setCategories] = useState("");
    const [arrayOfSubs,setArrayOfSubs] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState("");
    const [loading,setLoading] = useState("");
    const [arrayOfWeight,setArrayOfWeight] = useState([]);
    const [arrayOfFlavor,setArrayOfFlavor] = useState([]);
    useEffect(() => {
        loadProduct();
        loadCategories();
    },[]);

    const loadProduct = () => {
        getProduct(slug)
        .then((p) => {           
            setValues({...values,...p.data});
            // load category subs
            getCategorySubs(p.data.category._id)
            .then(res => {
                setSubOptions(res.data); // on first load we show default subs 
            });
            //prepare array of sub ids to show default sub value in ant desgin

            let arr = [];
            let arr1 = [];
            let arr2 = [];
            p.data.flavor.map(y => {
                arr2.push(y);
            })
            setArrayOfFlavor((pre) => arr2);
            p.data.weight.map(x => {
                arr1.push(x);
            });
            setArrayOfWeight((pre) => arr1);
            p.data.subs.map(s => {
                arr.push(s._id);
            });
            setArrayOfSubs((prev) => arr); // required for ant design slelect to work

        });
    };
    const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));
    
    const handleChange = (e) => {
        setValues({...values,[e.target.name] : e.target.value});  
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        values.subs = arrayOfSubs;
        values.category = selectedCategory ? selectedCategory : values.category;
        values.weight = arrayOfWeight;
        values.flavor = arrayOfFlavor;
        updateProduct(slug,values,user.token)
        .then(res => {
            setLoading(false);
            toast.success(`${res.data.title} is updated`);
            history.push('/admin/products');
        })
        .catch((err) => {
            setLoading(false);
            toast.error(err.response.data.err);
        })

    }
    const handleCategoryChange = (e) => {
        e.preventDefault();
        setValues({...values,subs:[]});
        setSelectedCategory(e.target.value);
        getCategorySubs(e.target.value).then((res) => {
            setSubOptions(res.data)
        });

        
        setArrayOfSubs([]);
        if(values.category._id === e.target.value) {
            loadProduct();            
        }
        setshowSub(true);
    };
   
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav/>
                </div>
                <div className="col-md-10">
                {loading ? <LoadingOutlined className="text-danger h1"/> : <h4>Product Update</h4> }
               
                <FileUpload values={values} setValues={setValues} setLoading={setLoading} />          
               
                <hr />
                <ProductUpdateForm 
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleCategoryChange={handleCategoryChange}
                    values={values}
                     subOptions={subOptions}
                     showSub={showSub}
                    setValues={setValues}
                    categories={categories}
                    setCategories={setCategories}
                    arrayOfSubs={arrayOfSubs}
                    setArrayOfSubs={setArrayOfSubs}
                    selectedCategory={selectedCategory}
                    arrayOfWeight={arrayOfWeight}
                    setArrayOfWeight={setArrayOfWeight}
                    arrayOfFlavor={arrayOfFlavor}
                    setArrayOfFlavor={setArrayOfFlavor}
                />
                 <hr/>  
                          
                </div>
            </div>
        </div>
    )
}
export default ProductUpdate;