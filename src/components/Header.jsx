import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { FaSun, FaThermometerHalf, FaCopy, FaBook, FaMobileAlt, FaUser, FaDownload } from 'react-icons/fa';
import "../assets/css/Header.css";
import { Button } from 'react-bootstrap';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';
  import Logo from "../assets/images/lo.png";


const Header = () => {
    const [openBasic, setOpenBasic] = useState(false);
    const [activeItem, setActiveItem] = useState('All');

    const handleItemClick = (itemName) => {
      setActiveItem(itemName);
    };

  return (
   
    <MDBNavbar expand='lg' light bgColor='light' className='d-flex flex-column'>
         <MDBContainer fluid className='border_nav'>
         <small className="navbar-text">Sunday, 23 September 2023</small>
      


      <MDBCollapse navbar>
        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 d-flex justify-content-right text-right'>
        <div className="weather d-flex justify-content-end text-right w-100 ">
            <span className='weather-info d-flex mx-2'>
            <FaSun className='mx-1 mt-1' />
            <small>Full Forecast</small>
            </span>
            <span className="weather-info d-flex mx-3">
              <FaThermometerHalf className='mx-1 mt-1' />
              43°C
            </span>
            <span className="weather-info">Jhansi, India</span>
          </div>
        </MDBNavbarNav>

     
       
      </MDBCollapse>
      
    </MDBContainer>
   
     <MDBContainer fluid className='logo_nav py-5'>
   

      <MDBCollapse navbar className='navv'>
        <MDBNavbarNav className=' d-flex justify-content-between '>
         <div className='d-flex '>
         <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='#'>
            <FaCopy /> Clipbook
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'> <FaBook /> My Readlist</MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
          <MDBNavbarLink href='#'>
          <FaMobileAlt /> Apps
          </MDBNavbarLink>
          </MDBNavbarItem>

         </div>
         <div className='logo-container d-flex justify-content-center'>
          <img src={Logo} alt='logo' />
        </div>

        <form className='d-flex input-group w-auto search'>
          <input type='search' className='form-control search_input' placeholder='Type query' aria-label='Search' />
        </form>
        </MDBNavbarNav>

       
      </MDBCollapse>
    </MDBContainer>
    <MDBContainer fluid className='bottom_nav py-4'>

      <MDBNavbarToggler
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setOpenBasic(!openBasic)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>

      <MDBCollapse navbar open={openBasic}>
        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 d-flex justify-content-between' >
          <MDBNavbarItem>
          <MDBNavbarLink
              style={{ color: activeItem === 'All' ? 'red' : 'inherit' }}
              onClick={() => handleItemClick('All')}
              href='#'
            >
              All
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
          <MDBNavbarLink
              style={{ color: activeItem === 'News' ? 'red' : 'inherit' }}
              onClick={() => handleItemClick('News')}
              href='#'
            >
              News
            </MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <MDBNavbarLink
             style={{ color: activeItem === 'Entertainment' ? 'red' : 'inherit' }}
              onClick={() => handleItemClick('Entertainment')}
              href='#'
            >
              Entertainment
            </MDBNavbarLink>
           </MDBNavbarItem>

          <MDBNavbarItem>
          <MDBNavbarLink
             style={{ color: activeItem === 'Sports' ? 'red' : 'inherit' }}
              onClick={() => handleItemClick('Sports')}
              href='#'
            >
                Sports</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
          <MDBNavbarLink
             style={{ color: activeItem === 'Lifestyle' ? 'red' : 'inherit' }}
              onClick={() => handleItemClick('Lifestyle')}
              href='#'
            >
                Lifestyle</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
          <MDBNavbarLink
             style={{ color: activeItem === 'Marketplaces' ? 'red' : 'inherit' }}
              onClick={() => handleItemClick('Marketplaces')}
              href='#'
            >
                Marketplaces</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
          <MDBNavbarLink
             style={{ color: activeItem === 'Fintech' ? 'red' : 'inherit' }}
              onClick={() => handleItemClick('Fintech')}
              href='#'
            >
                Fintech</MDBNavbarLink>
          </MDBNavbarItem>

        

         
        </MDBNavbarNav>

        <form className='d-flex w-auto'>
        <Button variant="primary" className='mx-3 d-flex button'>
            <FaUser className='ic' /> Login/Signup
          </Button>
          <Button variant="success" className=' d-flex button'>
          <FaDownload className='ic' /> Publish 
          </Button>
        </form>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  )
}

export default Header