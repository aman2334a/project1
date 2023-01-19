import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getUserProfile, updatePassword, validateUser } from '../Services/userServices/service'
import { useToasts } from "react-toast-notifications";


export default function ForgotPassword() {
    const { addToast } = useToasts();
    const navigate=useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [isDisabled, setIsDisabled] = useState(true)
    const [password, setPassword] = useState('')
    const handleChangePassword = (e) => {
        e.preventDefault()
        if (!password) {
            addToast("Please Enter Password", { appearance: "error" })
            return
        }
        let token = searchParams.get('link')
        if (!token) {
            addToast("Invalid Link", { appearance: "error" })
            return
        }
        updatePassword(token, password)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                addToast("Password Successfully Change", { appearance: "success" })
                setTimeout(()=>{
                    navigate('/login')
                },1000)
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    useEffect(() => {
        let token = searchParams.get('link')
        if (token) {
            validateUser(token)
                .then(function (response) {
                    setIsDisabled(false)
                })
                .catch(function (error) {
                    addToast("Invalid Link", { appearance: "error" })
                    console.log(error);
                });
        } else {
            addToast("Something went wrong ", { appearance: "error" })
        }
    }, [searchParams])
    return (
        <div>
            <Header />
            <div className='container'>
                <form onSubmit={handleChangePassword}>
                    <div className='form_input'>
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                <h3>Enter New Password</h3>
                            </div>
                        </div>
                        <label>Password</label>
                        <input type="password" class="form-control" value={password} disabled={isDisabled} onChange={(e) => setPassword(e.target.value)} />
                        <button disabled={isDisabled} className="btn btn-dark">
                            <b>Change Password</b>
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
