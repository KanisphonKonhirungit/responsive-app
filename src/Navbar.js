import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaSearch, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";

const FlagToggle = ({ defaultFlag, hoverFlag, altText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? hoverFlag : defaultFlag}
      alt={altText}
      className="me-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer", height: "20px" }}
    />
  );
};

const navItems = [
  { name: "Promotions", link: "/" },
  { name: "News & Events", link: "/" },
  { name: "Safety Tips", link: "/" },
  { name: "FAQs", link: "/" },
  { name: "Location", link: "/" },
];

const CustomNavbar = () => {
  return (
    <header>
      <div className="top-header d-flex justify-content-between align-items-center p-2">
        <div className="logo">
          <img
            src="/images/SOne_index_logo.png"
            alt="S-ONE Logo"
            style={{ height: "50px" }}
          />
        </div>
        <div className="d-flex align-items-center">
          <div className="language-switcher me-3">
            <FlagToggle
              defaultFlag="/images/SOne_index_iconthai.jpg"
              hoverFlag="/images/SOne_index_iconthai2.jpg"
              altText="TH"
            />
            <FlagToggle
              defaultFlag="/images/SOne_index_iconeng.jpg"
              hoverFlag="/images/SOne_index_iconeng2.jpg"
              altText="EN"
            />
          </div>
          <Form className="d-flex search-box">
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-2"
            />
            <Button variant="dark">
              <FaSearch />
            </Button>
          </Form>
        </div>
        <div className="nav-links">
          <a href="/">About S-ONE</a> | <a href="/">Job Opportunity</a> |{" "}
          <a href="/">Contact Us</a> | <a href="/">Site Map</a>
        </div>
      </div>

      {/* Navbar Section */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="active">
              <FlagToggle
                  defaultFlag="/images/SOne_index_menu02.png"
                  hoverFlag="/images/SOne_index_menu02.png"
                  altText="TH"
                />Product & Services
              </Nav.Link>
              {navItems.map((item, index) => (
                <Nav.Link
                href="/"
                style={{ color: "white" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f05a28";
                  const imgElement = e.target.querySelector("img");
                  if (imgElement) {
                    imgElement.src = "/images/SOne_index_menu02.png";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                  const imgElement = e.target.querySelector("img");
                  if (imgElement) {
                    imgElement.src = "/images/SOne_index_menu01.png";
                  }
                }}
              >
                <FlagToggle
                  defaultFlag="/images/SOne_index_menu01.png"
                  hoverFlag="/images/SOne_index_menu02.png"
                  altText="TH"
                />
                {item.name}
              </Nav.Link>
              ))}
            </Nav>
            <div className="social-icons">
              <FaFacebook className="me-2" size={20} />
              <FaTwitter className="me-2" size={20} />
              <FaYoutube size={20} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
