import React from 'react'
import {Select} from "antd";

const {Option} = Select;
const ProductUpdateForm = ({handleChange,
  handleSubmit,
  values,
  handleCategoryChange,
  setValues,
  categories,
  setCategories,
  subOptions,
  arrayOfSubs,
  setArrayOfSubs,
  arrayOfWeight,
  setArrayOfWeight,
  selectedCategory,
  setArrayOfFlavor,
  arrayOfFlavor,
}) => 
{
    const {title,quantity,description,flavor,weight,price,category,subs,shipping,images,flavors,weights} = values;
   

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
                value={shipping === 'Yes' ? 'Yes' : 'No'}
                name="shipping"
                className="form-control"
                onChange={handleChange}
              >
                
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
              value={values.flavor}                
                className="form-control"
                mode = "multiple"
              style = {{width:'100%'}}
              placeholder="Please select"
              value={arrayOfFlavor}
              onChange={value => setArrayOfFlavor(value)}
              >
                
                {flavors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </Select>
            </div>
            <div className="form-group">
              <label>Weight</label>
              <Select
              mode = "multiple"
              style = {{width:'100%'}}
              placeholder="Please select"
              value={arrayOfWeight}
              
              className="form-control"
              onChange={value => setArrayOfWeight(value)}
              >
                
                {weights.map((c) => (
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
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>
         <div>
            <label>Sub Categories</label>
            <Select
            mode = "multiple"
            style = {{width:'100%'}}
            placeholder="Please select"
            value={arrayOfSubs} 
            
            onChange={value => setArrayOfSubs(value)}
            > 
              {subOptions.length && 
              subOptions.map((s) => <Option key={s._id} value={s._id}>
                {s.name}
              </Option>)}                  
            </Select>
          </div> 
            <button className="btn btn-outline-info">Save</button>
        </form>
)}
export default ProductUpdateForm;