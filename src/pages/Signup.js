import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "react-bootstrap/Accordion";
// import Switch from "@mui/material/Switch";

// const label = { inputProps: { "aria-label": "Switch demo" } };
function Signup() {
  const [showInput,setshowInput] = useState(false);
  const handleToggle = () => {
      setshowInput(!showInput)
  };

  return (
   
    <>
      <Header />
      <form>
        <div className="form input">
          <h1 className=" form_header_text">
            Create your GST Accounting Account
          </h1>
          <div className="row">
            <p className="signup-text text-center">
              To do invoicing Acoounting and process your GST Returns
              <p className="signup-text text-center">
                Try free for 365days|no Credit Card needed|Monthly plan under Rs
                125
              </p>
            </p>
          </div>
          <label htmlFor="business">Business Country</label>
          <select name="business" id="business">
            <option value="Please Select">Please Select</option>
            <option>India</option>
            <option>Australia</option>
            <option>United States</option>
            <option>United Kingdom</option>
          </select>
          <label>Name</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <label>Email</label>
          <input type="email" />
          <label>Mobile</label>
          <input type="number" />
          <label>Business Name</label>
          <input type="text" />
          <label htmlFor="businessname">
            Type<span className="mandatory-field">*</span>
          </label>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header> Individual</Accordion.Header>
              <Accordion.Body>
              <div className="text_content">
                    <input type="checkbox"/>Individual
                </div>

                  
               

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Corporate</Accordion.Header>
              <Accordion.Body>
               
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Others</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="input_show">
          {/* <Switch value ={showInput} onClick={handleToggle} >

            
          </Switch>GST Registered */}
          </div>

          {showInput?
          <>
          <label htmlFor="gst_number">GST Number</label>
            <input />
          </>:
          <>
            
          </>
          }
          
          <label>Referal code</label>
          <input type="text" />
          <button className="btn btn-dark">
            <b>Create Account</b>
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Signup;
