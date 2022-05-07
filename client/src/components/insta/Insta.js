import React from 'react'
import Table from 'react-bootstrap/Table'
import {Image,Container,Row,Col} from 'react-bootstrap'
import "./insta.css";
const Insta = () => {
    return(<>
    <div className="mt-5">
    <h1 className="idiv">FOLLOW US ON INSTAGRAM</h1>
<a href="https://www.instagram.com/" target="_blank">
<div >

<Container >
  <Row>
    <Col xs={6} md={3}>
      <Image className="iimg" src="https://content.optimumnutrition.com/i/on/ON-Instagram-06?locale=en-gb,*&layer0=$MEDIA_GALLERY_ITEM$&fmt=webp" rounded />
    </Col>
    <Col xs={6} md={3}>
      <Image className="iimg" src="https://content.optimumnutrition.com/i/on/ON-Instagram-01?locale=en-gb,*&layer0=$MEDIA_GALLERY_ITEM$&fmt=webp" rounded />
    </Col>
    <Col xs={6} md={3}>
      <Image className="iimg"src="https://content.optimumnutrition.com/i/on/ON-Instagram-08?locale=en-gb,*&layer0=$MEDIA_GALLERY_ITEM$&fmt=webp" rounded />
    </Col>
    <Col xs={6} md={3}>
      <Image className="iimg"src="https://content.optimumnutrition.com/i/on/ON-Instagram-03?locale=en-gb,*&layer0=$MEDIA_GALLERY_ITEM$&fmt=webp" rounded />
    </Col>
  </Row>
</Container>
<br></br>
<Container>
  <Row>
    <Col xs={6} md={3}>
      <Image className="iimg" src="https://content.optimumnutrition.com/i/on/ON-Instagram-02?locale=en-gb,*&layer0=$MEDIA_GALLERY_ITEM$&fmt=webp" rounded />
    </Col>
    <Col xs={6} md={3}>
      <Image className="iimg" src="https://content.optimumnutrition.com/i/on/ON-Instagram-07?locale=en-gb,*&layer0=$MEDIA_GALLERY_ITEM$&fmt=webp" rounded />
    </Col>
    <Col xs={6} md={3}>
      <Image className="iimg"src="https://content.optimumnutrition.com/i/on/ON-Instagram-10?locale=en-gb,*&layer0=$MEDIA_GALLERY_ITEM$&fmt=webp" rounded />
    </Col>
    <Col xs={6} md={3}>
      <Image className="iimg"src="https://content.optimumnutrition.com/i/on/ON-Instagram-04?locale=en-gb,*&layer0=$MEDIA_GALLERY_ITEM$&fmt=webp" rounded />
    </Col>
  </Row>
</Container>

</div>
</a>
</div>
    </>);
    
}
export default Insta;