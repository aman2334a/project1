import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Signup() {
    return (
        <>
            <Header />
            <form>
                <div className="form input">
                    <h1 className=" form_header_text">Create your GST Accounting Account</h1>
                    <div className="row">
                        <p className="signup-text text-center">
                            To do invoicing Acoounting and process your GST Returns
                            <p className="signup-text text-center">
                                Try free for 365days|no Credit Card needed|Monthly plan under Rs 125
                            </p>

                        </p>
                    </div>
                    <label for="business">Business Country</label>
                    <select name="business" id="business">
                        <option value="Please Select">Please Select</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
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