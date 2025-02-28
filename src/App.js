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

import React from "react";
import CustomNavbar from "./Navbar";
import CustomFooter from "./Footer";
import "./App.css";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <div>
      <CustomNavbar />
      <div className="content-display my-3">
        <section className="row mb-3">
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
                        style={{ width: "100%", backgroundColor: "white" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="box bg-orange Su_white21 p-2">
                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label Su_white21"
                        >
                          Example textarea
                        </label>
                        <p className="text_white13 mb-2">Lorem ipsum dolor sit amet</p>
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
                        <p className="text_white13 mb-2">Lorem ipsum dolor sit amet</p>
                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </div>
                      <div class="">
                      <label
                          for="exampleFormControlTextarea1"
                          class="form-label Su_white21"
                        >
                          Example textarea
                        </label>
                        <p className="text_white13 mb-2">Lorem ipsum dolor sit amet</p>
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
            <div className="box bg-light p-4 rounded">
              <section className="row">
                <div className="col-md-8 col-sm-12 mb-4">
                  <div className="box bg-light p-4 rounded">Column 1 img</div>
                </div>
                <div className="col-md-4 col-sm-12 mb-4">
                  <div className="box bg-light p-4 rounded">
                    Column 2 calosor
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="row">
          <div className="col-md-2 col-sm-12">
            <div className="box bg-light p-4 rounded">button</div>
          </div>
          <div className="col-md-2 col-sm-12">
            <div className="box bg-light p-4 rounded">button</div>
          </div>
          <div className="col-md-2 col-sm-12">
            <div className="box bg-light p-4 rounded">button</div>
          </div>
          <div className="col-md-2 col-sm-12">
            <div className="box bg-light p-4 rounded">button</div>
          </div>
          <div className="col-md-2 col-sm-12">
            <div className="box bg-light p-4 rounded">button</div>
          </div>
          <div className="col-md-2 col-sm-12">
            <div className="box bg-light p-4 rounded">button</div>
          </div>
        </section>
        <section className="row my-3">
          <div className="box bg-light">
            <section className="row">
              <div className="col-md-4 col-sm-12">
                <div className="box bg-light p-4 rounded">
                  Column 1 contract us
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="box bg-light p-4 rounded">
                  Column 2 News & Events 3 page inside
                  <section className="row">
                    {/* for loop display events */}
                    <div className="col-md-4 col-sm-12">
                      <div className="box bg-light p-4 rounded">news 1</div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="box bg-light p-4 rounded">news 2</div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="box bg-light p-4 rounded">news 3</div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="box bg-light p-4 rounded">
                  Column 3 Safety Tips
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
