import React from 'react'
import {Select} from "antd";

const {Option} = Select;
const ProductCreateForm = ({handleChange,
  handleSubmit,
  values,
  handleCategoryChange,
  showSub,
  subOptions,
  setValues
}) => 
{
    const {title,quantity,description,flavor,weight,price,category,subs,shipping,categories,images,flavors,weights} = values;
   

return(
<form onSubmit={handleSubmit}>
                <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                value={description}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                name="price"
                className="form-control"
                value={price}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Shipping</label>
              <select
                name="shipping"
                className="form-control"
                onChange={handleChange}
              >
                <option>Please select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                className="form-control"
                value={quantity}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Flavor</label>
              <Select
                name="flavor"
                mode = "multiple"
                placeholder="Please select"
                value={flavor}
                className="form-control"
                onChange={value => setValues({...values,flavor:value})}
              
              >
                
                {flavors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </Select>
            </div>
            <div className="form-group">
              <label>Weights</label>
              <Select
                name="weight"
                mode = "multiple"
                placeholder="Please select"
                value={weight}
                className="form-control"
                onChange={value => setValues({...values,weight:value})}
              >                
                {weights.length && weights.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </Select>
            </div>
            
            <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              className="form-control"
              onChange={handleCategoryChange}
            >
              <option>Please select</option>
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
         {showSub && <div>
            <label>Sub Categories</label>
            <Select
            mode = "multiple"
            style = {{width:'100%'}}
            placeholder="Please select"
            value={subs} 
            
            onChange={value => setValues({...values,subs:value})}
            > 
              {subOptions.length && 
              subOptions.map((s) => <Option key={s._id} value={s._id}>
                {s.name}
              </Option>)}
             
              
            </Select>
          </div> }
            <button className="btn btn-outline-info">Save</button>
        </form>
)}
export default ProductCreateForm