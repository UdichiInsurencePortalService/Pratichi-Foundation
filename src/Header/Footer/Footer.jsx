import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../../../src/assets/logo/p-logo.png'; // 🔁 Update with your logo path
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="shadow  text-dark fw-bold" style={{ backgroundColor: '#09cc7f' }}>
      <CDBBox className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark text-decoration-none">
              <img alt="logo" src={logo} width="90px" />
              <span className="ms-3 h5 fw-bold">Pratichi Foundation</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            Pratichi Foundation is a dynamic NGO committed to building a more just, inclusive, and empowered society.
            </p>
          </CDBBox>

          <CDBBox>
            <p className="h5 mb-4 fw-bold">About</p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <Link href="/" style={{color:"navy",textDecoration:'none',fontSize:'18px',fontWeight:550}} >Our Mission</Link>
              <Link href="/" style={{color:"navy",textDecoration:'none',fontSize:'18px',fontWeight:550}}>Facilities</Link>
              <Link href="/" style={{color:"navy",textDecoration:'none',fontSize:'18px',fontWeight:550}}>Volunteer</Link>
              <Link href="/" style={{color:"navy",textDecoration:'none',fontSize:'18px',fontWeight:550}}>Donate</Link>
            </CDBBox>
          </CDBBox>

          <CDBBox>
            <p className="h5 mb-4 fw-bold">Help</p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <Link href="/" style={{color:"navy",textDecoration:'none',fontSize:'18px',fontWeight:550}}>Contact</Link>
              <Link href="/"style={{color:"navy",textDecoration:'none',fontSize:'18px',fontWeight:550}}>FAQs</Link>
              <Link href="/"style={{color:"navy",textDecoration:'none',fontSize:'18px',fontWeight:550}}>Support</Link>
            </CDBBox>
          </CDBBox>

          <CDBBox>
            <p className="h5 mb-4 fw-bold">Our Mission</p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <Link href="/" style={{color:"navy",textDecoration:'none',fontSize:'18px',fontWeight:550}}>Overview</Link>
              <Link href="/" style={{color:"navy",textDecoration:'none',fontSize:'18px',fontWeight:550}}>About us</Link>
              <Link href="/" style={{color:"navy",textDecoration:'none',fontSize:'18px',fontWeight:550}}>Gallary</Link>
            </CDBBox>
          </CDBBox>
        </CDBBox>

        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>

        <small className="text-center d-block mt-5">
          &copy; Pratichi Foundation, 2025. All rights reserved.
        </small>
      </CDBBox>
    </footer>
  );
};

export default Footer;
