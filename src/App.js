// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="container">
//       <header className="App-header text-center my-5">
//         <h1>Welcome to Responsive React App</h1>
//         <p>This page adjusts based on screen size.</p>
//       </header>

//       <section className="row">
//         <div className="col-md-4 col-sm-12 mb-4">
//           <div className="box bg-light p-4 rounded">Column 1</div>
//         </div>
//         <div className="col-md-4 col-sm-12 mb-4">
//           <div className="box bg-light p-4 rounded">Column 2</div>
//         </div>
//         <div className="col-md-4 col-sm-12 mb-4">
//           <div className="box bg-light p-4 rounded">Column 3</div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import CustomNavbar from "./Navbar";
import CustomFooter from "./Footer";
import NewsCarousel from "./components/NewsCarousel";
import "./App.css";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ButtonToggle = ({ defaultButton, hoverButton, altText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? hoverButton : defaultButton}
      alt={altText}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer", height: "100%" }}
    />
  );
};

function App() {
  return (
    <div>
      <CustomNavbar />
      <div className="content-display my-3">
        <section className="row">
          <div className="col-md-7 col-sm-12">
            <div className="box">
              <section className="row">
                <div className="col-md-12 col-sm-12 mb-1">
                  <div className="box bg-orange Su_white21 p-2">
                    Lorem ipsum dolor sit amet
                  </div>
                </div>
                <div className="row bg-orange">
                  <div className="col-md-6 col-sm-12">
                    <div className="box bg-orange">
                      <img
                        src="/images/SOne_index_bg_searchtype.jpg"
                        alt="S-ONE Logo"
                        style={{ height: "394px", backgroundColor: "white" }}
                      />
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-sm-12"
                    style={{ backgroundColor: "#f05a28" }}
                  >
                    <div className="box bg-orange Su_white21 p-2">
                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label Su_white21"
                        >
                          Example textarea
                        </label>
                        <p className="text_white13 mb-2">
                          Lorem ipsum dolor sit amet
                        </p>
                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </div>
                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label Su_white21"
                        >
                          Example textarea
                        </label>
                        <p className="text_white13 mb-2">
                          Lorem ipsum dolor sit amet
                        </p>
                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label Su_white21"
                        >
                          Example textarea
                        </label>
                        <p className="text_white13 mb-2">
                          Lorem ipsum dolor sit amet
                        </p>
                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 mb-4">
            <div className="box">
              <section className="row">
                <Carousel>
                  <Carousel.Item>
                    <img
                      src="/images/SOne_index_banner.jpg"
                      class="d-block w-auto"
                      style={{ height: "435px" }}
                      alt="casousel01"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="/images/tips_01.jpg"
                      class="d-block w-auto"
                      style={{ height: "435px" }}
                      alt="casousel01"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="/images/tips_02.jpg"
                      class="d-block w-auto"
                      style={{ height: "435px" }}
                      alt="casousel01"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </section>
            </div>
          </div>
        </section>
        <section className="row">
          <div className="col-xl-2 col-md-6 col-sm-12">
            <div className="box bg-orange px-2 mb-2">
              <ButtonToggle
                defaultButton="/images/SOne_index_bt-tire.jpg"
                hoverButton="/images/SOne_index_bt-tire1.jpg"
                altText="button1"
              />
            </div>
          </div>
          <div className="col-xl-2 col-md-6  col-sm-12">
            <div className="box bg-orange px-2 mb-2">
              <ButtonToggle
                defaultButton="/images/SOne_index_bt-break.jpg"
                hoverButton="/images/SOne_index_bt-break1.jpg"
                altText="button1"
              />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-sm-12">
            <div className="box bg-orange px-2 mb-2">
              <ButtonToggle
                defaultButton="/images/SOne_index_bt-battery.jpg"
                hoverButton="/images/SOne_index_bt-battery1.jpg"
                altText="button1"
              />
            </div>
          </div>
          <div className="col-xl-2 col-md-6  col-sm-12">
            <div className="box bg-orange px-2 mb-2">
              <ButtonToggle
                defaultButton="/images/SOne_index_bt-chokeup.jpg"
                hoverButton="/images/SOne_index_bt-chokeup1.jpg"
                altText="button1"
              />
            </div>
          </div>
          <div className="col-xl-2 col-md-6  col-sm-12">
            <div className="box bg-orange px-2 mb-2">
              <ButtonToggle
                defaultButton="/images/SOne_index_bt-oil.jpg"
                hoverButton="/images/SOne_index_bt-oil1.jpg"
                altText="button1"
              />
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-sm-12">
            <div className="box bg-orange px-2 mb-2">
              <ButtonToggle
                defaultButton="/images/SOne_index_bt-guarantee.jpg"
                hoverButton="/images/SOne_index_bt-guarantee1.jpg"
                altText="button1"
              />
            </div>
          </div>
        </section>
        <section className="row my-3">
          <div className="box">
            <section className="row">
              <div className="col-xl-4 col-sm-12">
                <section className="row">
                  <div className="col-md-12 col-sm-12 mb-1">
                    <div className="box bg-orange Su_white21 p-2">
                      Lorem ipsum dolor sit amet
                    </div>
                  </div>
                  <div className="row bg-black">
                    <div className="col-md-12 col-sm-12 mt-3 d-flex justify-content-end">
                      <div className="box bg-black Su_white21 p-2 text-end">
                        {" "}
                        <div className="mb-3">
                          <Row className="justify-content-end mb-3">
                            <Col xs={6} className="d-flex align-items-center">
                              <p className="Su_white21 mb-0 mb-2">
                                Lorem ipsum dolor
                              </p>
                            </Col>
                            <Col xs={6}>
                              <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                          </Row>
                          <Row className="justify-content-end mb-3">
                            <Col xs={6} className="d-flex align-items-center">
                              <p className="Su_white21 mb-0 mb-2">
                                Lorem ipsum dolor
                              </p>
                            </Col>
                            <Col xs={6}>
                              <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                          </Row>
                          <Row className="justify-content-end mb-3">
                            <Col xs={6} className="d-flex align-items-center">
                              <p className="Su_white21 mb-0 mb-2">
                                Lorem ipsum dolor
                              </p>
                            </Col>
                            <Col xs={6}>
                              <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 d-flex justify-content-end">
                      <Row className="justify-content-end mb-3">
                        <Col xs={12} className="">
                          <p className="text_orange13 mb-0 mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div className="col-md-12 col-sm-12 mb-3 d-flex justify-content-end">
                      <Row className="justify-content-end">
                        <Col xs={12} className="">
                          <img
                            src="/images/SOne_index_search.png"
                            class="d-block w-auto"
                            alt="searchbtn"
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12 mb-1">
                    <div className="box bg-orange Su_white21 p-4"></div>
                  </div>
                </section>
              </div>

              <div className="col-xl-4 col-sm-12">
                <div className="box Su_black21 pb-3">News & Events</div>
                <div className="box p-1 rounded">
                  <section className="row">
                    <NewsCarousel />
                  </section>
                </div>
              </div>
              <div className="col-xl-4 col-sm-12">
                <div className="row">
                  <div className="col-12 col-md-12">
                    <div
                      className="tip-img"
                      style={{
                        position: "relative",
                        backgroundImage: "url(images/safety-tip-02.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "left top",
                        height: "120px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        textAlign: "right",
                        padding: "10px",
                      }}
                    >
                      <p
                        className="text_orange16"
                        style={{
                          fontWeight: "bold",
                          marginBottom: "5px",
                          alignItems: "flex-end",
                          textAlign: "center",
                          width: "70%",
                        }}
                      >
                        Safety Tips
                      </p>
                      <div
                        style={{
                          position: "relative",
                          padding: "15px",
                          borderRadius: "8px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          justifyContent: "center",
                          maxWidth: "70%",
                        }}
                      >
                        <img
                          src="images/SOne_index_pic66.png"
                          width="10"
                          alt="img"
                          style={{
                            position: "absolute",
                            top: "5px",
                            left: "5px",
                          }}
                        />

                        <p
                          className="text_white13"
                          style={{
                            margin: "0",
                            fontSize: "14px",
                            textAlign: "center", // ให้ข้อความชิดขวา
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor lorem ipsum dolor sit
                          amet, co
                        </p>

                        {/* รูปขวาล่าง */}
                        <img
                          src="images/SOne_index_pic99.png"
                          width="10"
                          alt="img"
                          style={{
                            position: "absolute",
                            bottom: "5px",
                            right: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2" style={{ justifySelf: "center" }}>
                  <p className="text_black13">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                    <img
                      src="images/SOne_index_btgo.jpg"
                      width="20"
                      alt="img"
                    />
                  </p>
                </div>
                <div
                  className="row mt-2"
                  style={{
                    backgroundImage: "url(images/SOne_index_dash--.png)",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "left center",
                    height: "5px",
                  }}
                ></div>
                <div className="row mt-2" style={{ justifySelf: "center" }}>
                  <div className="col-12">
                    <img
                      src="images/SOne_index_call.png"
                      width="277"
                      alt="img"
                      height="33"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
      <CustomFooter />
    </div>
  );
}

export default App;
