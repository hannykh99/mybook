import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './Menubar.css';
import data from './ListData.json';
import DarkMode from './DarkMode';

function Menu() {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log('search', searchTerm);
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src={`${process.env.PUBLIC_URL}/Images/rice.png`}
                alt="Logo"
                className="img-fluid logo-img"
              />
            </Navbar.Brand>
           
            <div className="search-inner">
              <input type="text" value={value} onChange={onChange} />
              <button onClick={() => onSearch(value)}>search</button>
            </div>
            <div className="dropdown">
              {data
                .filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const fullName = item.full_name.toLowerCase();

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    key={item.full_name}
                    onClick={() => onSearch(item.full_name)}
                    className="dropdown-row"
                  >
                    {item.full_name}
                  </div>
                ))}
            </div>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    HomePage
                  </Nav.Link>
                  <Nav.Link href="#">
                    <i className="fa fa-book" aria-hidden="true"></i>
                    BooK Collection
                  </Nav.Link>
                  <Nav.Link href="#">
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                    Best Seller
                  </Nav.Link>
                  <h1 className= "dark">Dark Mode</h1>
                  <DarkMode />
                  
               
                  <Nav.Link href="#">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    About Us
                  </Nav.Link>
                  <Nav.Link href="#">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                    Singin
                  </Nav.Link>
               
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Menu;