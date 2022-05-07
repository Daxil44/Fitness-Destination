import React from 'react'
import {Link} from "react-router-dom";
import {Card} from "antd";
import {EditOutlined,DeleteOutlined} from "@ant-design/icons"
const {Meta} = Card;


const AdminProductCard = ({product,handleRemove}) => {
    const {title,description,images,slug} = product;
    return (
        <Card cover={
            <img src={images && images.length ? images[0].url : "https://res.cloudinary.com/gymproject/image/upload/v1615737190/catalog-default-img_vllzfn.gif"}
            style={{height:'300px',width:'300px',objectFit:'cover'}} 
            className="m-2"/>
        }
        actions= {[
            <Link to={`/admin/product/${slug}`}>
            <EditOutlined className="text-warning"/>
            </Link>,
            
            <DeleteOutlined onClick={() => handleRemove(slug)} className="text-danger"/>
        ]}>
            <Meta title={title} description={`${description && description.substring(0,35)}...`} />
        </Card>
    )
}

export default AdminProductCard;