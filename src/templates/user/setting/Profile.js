import React, { useState, useEffect } from 'react'
import Switch from "react-switch";
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../../../Services/userServices/service';
import { Button } from 'antd';

export default function Profile() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isEditable, setIsEditable] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, password)

    }

    const handleChange = () => {

    }
    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('fintaxcialUser'))
        if (!userData?.token || !userData.role == 'user') {
            navigate("/login");
        }
        getUserProfile()
            .then(function (response) {
                console.log(response.data?.data);
                // setE(response.data?.data?.email);
                setName(response.data?.data?.name);


                // setcheckSubsription(response.data?.data?.subscription)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])
    return (
        <>
                <div class="col-md-8 ">
                    <h3 className="profile_txt">Profile Details:</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="billing_heading">Name</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div class="col-md-6">
                            <label for="billing_heading">Phone Number</label>
                            <input type="number" className='form-control' />
                        </div>
                        <div className="col-md-6">
                            <label for="billing_heading">Country</label>
                            <input type="number" className='form-control' />

                        </div>
                        <div className="col-md-6">
                            <label for="billing_heading">Business Name</label>
                            <input type="number" className='form-control' />

                        </div>
                        <div className="col-md-6">
                            <label for="billing_heading">GST Number</label>
                            <input type="number" className='form-control' />

                        </div>

                        <div className="col-md-12">
                            <button className="btn btn-info update_btn">Update</button>

                        </div>


                    </div>
                </div>


            <section className="billing-text">
                    <div className="col-md-8 ">
                        <h3 className="billing_txt">Billing Details:</h3>
                        <div className="row">

                            <div className="col-md-6">
                                <span>Billing Amount:</span>
                            </div>
                            <div className="col-md-6">
                                <span>Billing Date:</span>
                            </div>


                        </div>
                    </div>


            </section>

        </>
    )
}
