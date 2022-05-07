import React,{useEffect,useState} from "react";
import {getProducts} from "../functions/product";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import Carousel from 'react-bootstrap/Carousel'
import {Card} from 'antd'
import {Button} from 'react-bootstrap'
import Blogs from "../components/home/Blogs";
import Insta from "../components/insta/Insta";
const {Meta} = Card;
//import { Button,Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap'
//import {Card} from 'react-bootstrap'

const Home = () => {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  
  useEffect(() => {
    loadAllProducts();
  }, [])
  const loadAllProducts = () => {
    setLoading(true);
    getProducts('createdAt','desc',3)
    .then(res => {
      setProducts(res.data);
      setLoading(false);
    })
  }

  return (
    <>
    
    <Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://www.optimumnutrition.com/medias/ON-web-carousel-1920x488.jpg?context=bWFzdGVyfHJvb3R8MjUxNjg1fGltYWdlL2pwZWd8aGNhL2g4NC85Nzg1OTE1MTQ2MjcwLmpwZ3xkNGU2NGJmZTZlMTFkZjMzMTk0ZTA5YWUzMmNiNGM3MzZlMmM5MDNhZTlhYzY0OWZiOGQ3ZWNiNThjMjlkMjA3"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://www.optimumnutrition.com/medias/UK-hp-banner-desktop-full-1920x488-better-than-before.png?context=bWFzdGVyfHJvb3R8Mjg2Njg1fGltYWdlL3BuZ3xoOTQvaDAyLzk3MTA0NzAyNjY5MTAucG5nfGUwMDcyOGY3ZWI1YWYzNzAzYzcxNmZiYjQyNWJmMmFmZjJmYzZkMGNhYzM1ZDI1N2U1YjJjZTQ4ODFjMTBjOGQ"
      alt="Second slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
    
    <div className="text-center p-3 mt-5 display-4 jumbotron" style={{background:"white"}}>
    <h4 style={{fontFamily:"Blender Pro",fontSize:"38px",fontWeight:"700",lineHeight:"40px",letterSpacing:"-.5px"}}>NEW ARRIVALS</h4>
    </div>
    <NewArrivals/>
    <br />
    <div className="text-center p-3 mt-5 display-4 jumbotron" style={{background:"white"}}>
      <h4 style={{fontFamily:"Blender Pro",fontSize:"38px",fontWeight:"700",lineHeight:"40px",letterSpacing:"-.5px"}}>BEST SELLERS</h4>
    </div>    
     <BestSellers />
    
     <div className="text-center p-3 mt-5 display-4 jumbotron" style={{background:"white"}}>
      <h4 style={{fontFamily:"Blender Pro",fontSize:"38px",fontWeight:"700",lineHeight:"40px",letterSpacing:"-.5px"}}>BLOGS</h4>
    </div> 
    <Blogs />
    <Insta/>
    </>
  );
}

export default Home;
