import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Navbar,NavDropdown} from 'react-bootstrap'
import "./header.css";
const Nav2 = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" varient="light">
  
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
            <NavDropdown title="BRAND" bg="light" varient="light" id="collasible-nav-dropdown">
              <NavDropdown.Item varient="light" href="#action/3.1">Optimum Nutrition</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">MuslceTech</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My Protine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">GNC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Mislce Blaze</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ultimate Nutrition</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            
            <NavDropdown title="Sport Nutrition" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Whey Protine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Whey Concentrate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Whey Hydrolysate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Raw Whey</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Lean Gainer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Mass Gainer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Complex Card</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            
            <NavDropdown title="Weight Loss" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fat Burner</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Apple Cider Vinegar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Slimming Support</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Teas</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">Coffee Espresso</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            
            <NavDropdown title="Vitamins" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Multiminerals</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Vitamin D</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vitamin C</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vitamin A</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            
            <NavDropdown title="Blogs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Weight Gain</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Weight Loss</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Muslce Gain</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}


export default Nav2;