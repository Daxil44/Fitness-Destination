import React from 'react'
import {Card} from 'antd'
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
const {Meta} = Card;
const Blogs = () => {
    return (
        <div className="container">
        <div className="row">
        <div className="col-md-4">
         <Card
         cover={
             <img alt="Loading Failed" src="https://res.cloudinary.com/gymproject/image/upload/v1618652104/ON-Homepage-Features-x3-AFTER-TRAINING-new_rjdvaf.jpg"
             style={{ minWidth:"300px", minHeight:"300px",maxwidth:"300px",maxheight: "300px", objectFit: "cover" }}
             className="p-1"/>
         }
         actions= {[
             <Link to="/blogone"><Button variant="dark" className="cbutton"  active>Learn More</Button> </Link>
         ]}>
         <Meta title="AFTER TRAINING" description="Recovery is the ultimate preparation to ensure you’re ready to go again even harder next
time. Make Whey Protein part of your recovery routine and unlock your
potential." />        
         </Card>
         </div>
         <div className="col-md-4">
         <Card
         cover={
             <img alt="Loading Failed" src="https://res.cloudinary.com/gymproject/image/upload/v1618652207/creatine-101-1296x728-feature-800x449_dkgbad.webp"
             style={{ minWidth:"300px",minHeight:"300px",maxwidth:"300px",maxheight: "300px", objectFit: "cover" }}
             className="p-1"/>
         }
         actions= {[
            <Link to="/blogtwo"><Button variant="dark" className="cbutton"  active>Learn More</Button> </Link>
         ]}>
         <Meta title="Creatine Damages Kidneys" description="Creatine is a natural amino acid present in muscles. Supplemental Creatine increases the efficiency of ATP cycle in muscle cells, enhancing your strength and work capacity." />        
         </Card>
         </div>
         <div className="col-md-4">
        
         <Card
         cover={
             <img alt="Loading Failed" src="https://res.cloudinary.com/gymproject/image/upload/v1616815522/ON-Homepage-Features-x3-DURING-TRAINING-new_myucle.jpg"
             style={{ minWidth:"300px",minHeight:"300px",maxwidth:"300px",maxheight: "300px", objectFit: "cover" }}
             className="p-1"/>
         }
         actions= {[
            <Link to="/blogthree"><Button variant="dark" className="cbutton"  active>Learn More</Button> </Link>
         ]}>
         <Meta title="DURING TRAINING" description="Keep going with our series of caffeinated and non-caffeinated Amino Acid products to
 help you train and sustain." />        
         </Card>
         </div>      
        </div>
      </div>
    )
}

export default Blogs;