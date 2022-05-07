import React from 'react'
import {Card} from 'antd'
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
const {Meta} = Card;
const Team = () => {
    return (
        <div className="container">
        <div className="row">
        
         <div className="col-md-4">
         <Card
         cover={
             <img alt="Loading Failed" src="https://res.cloudinary.com/gymproject/image/upload/v1620388119/l60Hf_byqz4t.png"
             style={{ minWidth:"300px", minHeight:"300px",maxwidth:"300px",maxheight: "300px", objectFit: "cover" }}
             className="p-1"/>
         }
         >
         <Meta title="Daxil Patel" description="Front-End" />        
         </Card>
         </div>
         <div className="col-md-4">
         <Card
         cover={
             <img alt="Loading Failed" src="https://res.cloudinary.com/gymproject/image/upload/v1620388119/l60Hf_byqz4t.png"
             style={{ minWidth:"300px", minHeight:"300px",maxwidth:"300px",maxheight: "300px", objectFit: "cover" }}
             className="p-1"/>
         }
         >
         <Meta title="Dhruvil Patel" description="Front-End" />        
         </Card>
         </div>
         <div className="col-md-4">
         <Card
         cover={
             <img alt="Loading Failed" src="https://res.cloudinary.com/gymproject/image/upload/v1620388119/l60Hf_byqz4t.png"
             style={{ minWidth:"300px", minHeight:"300px",maxwidth:"300px",maxheight: "300px", objectFit: "cover" }}
             className="p-1"/>
         }
         >
         <Meta title="Kaushalya Popat" description="BackEnd" />        
         </Card>
         </div>
         </div>
         </div>
    )
}

export default Team;