import React, { useState,useEffect } from 'react'
import Switch from "react-switch";
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../../../Services/userServices/service';

export default function Profile() {
    const navigate=useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isEditable, setIsEditable] = useState(true)

    const handleSubmit = () => {

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
        <div className='form-section'>
            <div className='profileSection'>
                <p>Profile</p>
                <p><Switch checked={!isEditable} onChange={() => setIsEditable(!isEditable)} /></p>
            </div>

            <div class="contact-form">
                <form id="" className='adminAddFrom' role="form" onSubmit={handleSubmit} novalidate="novalidate">
                    <div class="feedback">
                        <label htmlFor="name">Name</label>
                        <input type="text" disabled={isEditable} class="form-control" id="name" name="name" value={name} placeholder="" onChange={(e) => setName(e.target.value)} /></div>
                    <div class="feedback">
                        <label htmlFor="name">Password</label>
                        <input type="text" class="form-control" disabled={isEditable} id="name" name="name" value={password} placeholder="" onChange={(e) => setPassword(e.target.value)} /></div>


                    <button className='btn btn-primary' disabled={isEditable} >Submit</button>
                </form>
            </div>
        </div>
    )
}
