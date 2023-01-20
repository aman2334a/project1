import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "react-bootstrap/Accordion";
import Switch from "react-switch";
import { userSignUp, } from "../Services/userServices/service";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";


// const label = { inputProps: { "aria-label": "Switch demo" } };
function Signup() {
    const navigate = useNavigate();
    const [isSubmitDisable, setIsSubmitDisable] = useState(false)

    const { addToast } = useToasts();
    const [showInput, setshowInput] = useState(false);
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        password: '',
        country: '',
        mobile: '',
        businessName: '',
        type: '',
        gstNumber: '',
        referalCode: '',
    })
    const handleChange = (key, value) => {
        console.log(key, value)
        let tmp = { ...inputData }
        tmp[key] = value
        setInputData({ ...tmp })
    }
    const handleToggle = () => {
        setshowInput(!showInput)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitDisable(true)
        userSignUp(inputData)
            .then(function (response) {
                console.log(response.data);
                addToast("Please Check Your Mail Inbox", { appearance: "success" })
                // navigate('/login')
            })
            .catch(function (error) {
                setIsSubmitDisable(true)

                if (error.response.status == 400) {
                    addToast(error?.response?.data, { appearance: "error" })

                } else {
                    addToast('Something went wrong', { appearance: "error" })
                }
                console.log(error);
            });
        console.log(inputData)
    }



    return (

        <>
            <Header />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form_input">
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
                        <select name="business" id="business" className="form-control"
                            onChange={(e) => handleChange("country", e.target.value)}
                        >
                            <option disabled value="Please Select">Please Select</option>
                            <option value="india">India</option>
                            <option value="Australia">Australia</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                        <label>Name</label>
                        <input type="text" className="form-control" value={inputData.name} onChange={(e) => handleChange('name', e.target.value)} />
                        <label>Password</label>
                        <input type="password" className="form-control" value={inputData.password} onChange={(e) => handleChange('password', e.target.value)} />
                        <label>Email</label>
                        <input type="email" className="form-control" value={inputData.email} onChange={(e) => handleChange('email', e.target.value)} />
                        <label>Mobile</label>
                        <input type="number" className="form-control" value={inputData.mobile} onChange={(e) => handleChange('mobile', e.target.value)} />
                        <label>Business Name</label>
                        <input type="text" className="form-control" value={inputData.businessName} onChange={(e) => handleChange('businessName', e.target.value)} />
                        <label htmlFor="businessname">
                            Type<span className="mandatory-field">*</span>
                        </label>
                        <Accordion>
                            <Accordion.Item >
                                <Accordion.Header> Individual</Accordion.Header>
                                <Accordion.Body>

                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="individual"
                                            onChange={(e) => handleChange('type', e.target.value)}
                                            value="option 1"
                                        />
                                        <label className="form-check-label" >
                                            Individual
                                        </label>
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Corporate</Accordion.Header>
                                <Accordion.Body>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="individual"
                                            onChange={(e) => handleChange('type', e.target.value)}
                                            value="option 3"
                                        />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Ltd
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="individual"
                                            onChange={(e) => handleChange('type', e.target.value)}
                                            value="option 3"
                                        />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Pvt. Ltd
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="individual"
                                            onChange={(e) => handleChange('type', e.target.value)}
                                            value="option 3"
                                        />
                                        <label className="form-check-label" for="defaultCheck1">
                                            LLP
                                        </label>
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Others</Accordion.Header>
                                <Accordion.Body>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="individual"
                                            onChange={(e) => handleChange('type', e.target.value)}
                                            value="option 5"
                                        />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Society/Trust
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="individual"
                                            onChange={(e) => handleChange('type', e.target.value)}
                                            value="option 5"
                                        />
                                        <label className="form-check-label" for="defaultCheck1">
                                            HUF
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="individual"
                                            onChange={(e) => handleChange('type', e.target.value)}
                                            value="option 5"
                                        />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Partnership Firms
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="individual"
                                            onChange={(e) => handleChange('type', e.target.value)}
                                            value="option 5"
                                        />
                                        <label className="form-check-label" for="defaultCheck1">
                                            AOP
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="individual"
                                            onChange={(e) => handleChange('type', e.target.value)}
                                            value="option 5"
                                        />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Beneficiary Trust

                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="individual"
                                            onChange={(e) => handleChange('type', e.target.value)}
                                            value="option 5"
                                        />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Political Party
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="individual"
                                            onChange={(e) => handleChange('type', e.target.value)}
                                            value="option 5"
                                        />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Any Other
                                        </label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="input_show">
                            <Switch checked={showInput} onChange={handleToggle} />GST Registered
                        </div>

                        {showInput ?
                            <>
                                <label htmlFor="gst_number">GST Number</label>
                                <input value={inputData.gstNumber} onChange={(e) => handleChange('gstNumber', e.target.value)} />
                            </> :
                            <>

                            </>
                        }

                        <label>Referal code</label>
                        <input type="text" value={inputData.referalCode} onChange={(e) => handleChange('referalCode', e.target.value)} />
                        <button className="btn btn-dark" disabled={isSubmitDisable}>
                            <b>Create Account</b>
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Signup;
