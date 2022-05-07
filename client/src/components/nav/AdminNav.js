

import React from "react";
import { Link } from "react-router-dom";
import { IconContext, icons } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {BsFillBagFill,BsLockFill} from 'react-icons/bs';
import {AiFillCopyrightCircle} from 'react-icons/ai';
const AdminNav = () => (
  <IconContext.Provider value={{ color: 'black' }}>   
  <nav>
    <ul className="nav flex-column nav-menu-items">
      <li className="nav-item" style={{fontSize:"16px"}}>      
        <Link to="/admin/dashboard" className="nav-link">
        <AiIcons.AiFillHome style={{color:"grey",marginRight:"2px"}}/>Dashboard
        </Link>
      </li>

      <li className="nav-item" style={{fontSize:"16px"}}>
        <Link to="/admin/product" className="nav-link">
        <BsFillBagFill style={{color:"grey",marginRight:"2px"}}/> Product
        </Link>
      </li>

      <li className="nav-item" style={{fontSize:"16px"}}>
        <Link to="/admin/products" className="nav-link">
        <BsFillBagFill style={{color:"grey",marginRight:"2px"}}/> Products
        </Link>
      </li>

      <li className="nav-item" style={{fontSize:"16px"}}>
        <Link to="/admin/category" className="nav-link">
        <BsFillBagFill style={{color:"grey",marginRight:"2px"}}/> Category
        </Link>
      </li>

      <li className="nav-item" style={{fontSize:"16px"}}>
        <Link to="/admin/sub" className="nav-link">
        <BsFillBagFill style={{color:"grey",marginRight:"2px"}}/>Sub Category
        </Link>
      </li>

      <li className="nav-item" style={{fontSize:"16px"}}>
        <Link to="/admin/coupon" className="nav-link">
        <AiFillCopyrightCircle style={{color:"grey",marginRight:"2px"}}/>Coupon
        </Link>
      </li>

      <li className="nav-item" style={{fontSize:"16px"}}>
        <Link to="/user/password" className="nav-link">
        
          <BsLockFill style={{color:"grey",marginRight:"2px"}}/>Password
        </Link>
      </li>
    </ul>
  </nav>
  </IconContext.Provider>
);

export default AdminNav;

// import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import {SidebarData} from "./SidebarData";
// import './Navbar.css';
// import { IconContext } from 'react-icons';

// function AdminNav() {
//   const [sidebar, setSidebar] = useState(true);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>        
//         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//           <ul className='nav-menu-items' onClick={showSidebar}>
//             <li className='navbar-toggle'>
//               <Link to='#' className='menu-bars'>
               
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default AdminNav;
