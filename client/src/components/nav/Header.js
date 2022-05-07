
import React, { useState } from "react";
import {IoAccessibility} from "react-icons/io5";
import { Menu,Badge } from "antd";
import {
  AppstoreOutlined, 
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
//import {Navbar,Nav,FormControl,Button,Form,NavDropdown} from 'react-bootstrap'
import "./header.css";
const { SubMenu, Item } = Menu;
const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user,cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (    
    <Menu style={{height:65}} className="customClass" theme="dark" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          
      <Item className="cus" key="home">
      <Link className="dark" to="/"><img src="https://res.cloudinary.com/gymproject/image/upload/v1619157762/42845507_271181050175176_6022972753898897408_o_sy7tkz.jpg" style={{height:"40px",width:"180px",border:0}}/>
        </Link>
      </Item>
      
      <Item key="shop" className="customclass mt-2" icon={<ShopOutlined />}>
        <Link className="link back" to="/shop">Shop</Link>
      </Item>
      <Item key="shop" className="customclass mt-2"  icon={<IoAccessibility />}>
        <Link className="link back" to="/BMI">BMI</Link>
      </Item>
      <Item key="cart" className="customclass float-right ml-2 mt-2 mr-3" icon={<ShoppingCartOutlined />}>
        <Link className="link back" to="/cart">
          <Badge count={cart.length} offset={[9,0]}>
            Cart
          </Badge>
        </Link>
      </Item>
      
      {!user && (
        <Item key="register" icon={<UserAddOutlined />} className="customclass float-right ml-1 mt-2">
          <Link to="/register">Register</Link>
        </Item>
      )}

      {!user && (
        <Item  key="login" icon={<UserOutlined />} className="customclass float-right ml-1 mt-2">
          <Link to="/login">Login</Link>
        </Item>
      )}
      
      {user && (
        <SubMenu
          icon={<UserOutlined />}
          title={user.email && user.email.split("@")[0]}
          className="float-right customclass mt-2"
          
        >
         
          {user && user.role === "subscriber" && (
            <Item className="customclass">
              <Link to="/user/history">Dashboard</Link>
            </Item>
          )}

          {user && user.role === "admin" && (
            <Item>
              <Link className="customclass" to="/admin/dashboard">Dashboard</Link>
            </Item>
          )}

          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>         
        </SubMenu>
        
      )}
      <Item  className="cus ml-2 mt-3 mb-1 float-right " style={{color:"white" ,border: '1px solid grey',borderRadius: '30px'}}>
      <Search className="ant-input"/>
      </Item>      
    </Menu>
    
  );
};

export default Header;
