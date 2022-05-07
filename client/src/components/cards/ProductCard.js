import React from 'react'
 import {Card} from 'antd'
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom";
import "./ProductCard.scss";
import { showAverage } from "../../functions/rating";
const {Meta} = Card;
const ProductCard = ({product}) => {
const {title,description,images,slug,price} = product;

    return (
        <Card
        cover={
            <img alt="Loading Failed" src={images && images.length ? images[0].url : "https://res.cloudinary.com/gymproject/image/upload/v1615737190/catalog-default-img_vllzfn.gif"}
            style={{ maxwidth:"300px",maxheight: "300px", objectFit: "cover" }}
            className="p-1"/>
        }
        actions= {[
            <Button variant="dark" className="cbutton"  active><Link style={{ color: '#FFF' }} to={`/product/${slug}`}>View Product</Link></Button> 
        ]}>
        <Meta title={title} description={`${description && description.substring(0,35)}...`} />
        <div className="mt-3">
        Price : <h6 style={{display:"inline"}}>₹{price}</h6><br/>
        </div>
        <div className="mt-3">
        {product && product.ratings && product.ratings.length > 0 ? showAverage(product) : <div className="pt-1 pb-2"><h6 style={{fontSize:20}}>No Ratings Yet</h6></div>} 
        </div>
        </Card>
        // <Card style={{ width: '18rem' }}>
            
        // <Card.Img  className="cimg" variant="top" src={images && images.length ? images[0].url : "https://res.cloudinary.com/gymproject/image/upload/v1615737190/catalog-default-img_vllzfn.gif"} />
        // <Card.Body>
        //   <Card.Title className="ctitle">{title}</Card.Title>
        //   <Card.Text className="ctext">
        //   {`${description && description.substring(0,45)}...`}
        //   </Card.Text>
        //   <Card.Text className="new">
        //  {product && product.ratings && product.ratings.length > 0 ? showAverage(product) : 'No Rating Yet'}       
        //   </Card.Text>
        //   <Card.Text className="price">
        //   Price : ₹{price} <br/>
          
        //   </Card.Text>
          
        //   <Button variant="dark" className="cbutton"  active><Link style={{ color: '#FFF' }} to={`/product/${slug}`}>View Product</Link></Button> 
        //   </Card.Body>
        // </Card>
        
    );
}

export default ProductCard;