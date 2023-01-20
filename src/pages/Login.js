import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { forgotPassword, forgotPasswordApi, userSingin } from '../Services/userServices/service'
import { useToasts } from "react-toast-notifications";
import { NavLink, useNavigate } from 'react-router-dom'

export default function Login() {
    const [first, setFirst] = React.useState(true)
    const navigate = useNavigate();
    const { addToast } = useToasts();
    const [inputData, setInputData] = React.useState({
        email: '',
        password: ''
    })
    const [formValidate, setformValidate] = React.useState({
        email: false,
        password: false
    })
    const [forgotPasswordEmail, setForgotPasswordEmail] = React.useState('')


    const validate = (e) => {

        let flag = true


        if (inputData.email && !(inputData.email).includes(".com", '@')) {
            flag = false
            setformValidate((old) => {
                old.email = "Enter valid email address*"
                return { ...old }
            })
        }

    }




    const handleChange = (key, value) => {
        console.log(key, value)
        let tmp = { ...inputData }
        tmp[key] = value
        setInputData({ ...tmp })
    }
    const notifications = (txt, type) => {
        addToast(txt, { appearance: type })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputData.email || !inputData.password) {
            notifications("Please Enter Email And Password", "error")
            return
        }
        userSingin(inputData)
            .then(function (response) {
                addToast("Successfully login", { appearance: "success" })
                console.log(JSON.stringify(response?.data));
                let data = {
                    role: 'user',
                    token: response?.data?.data
                }
                localStorage.setItem("fintaxcialUser", JSON.stringify(data))
                navigate('/dashboard')
            })
            .catch(function (error) {
                console.log(error);
                if(error?.response?.status){
                    addToast(error?.response?.data, { appearance: "error" })
                }else{
                    addToast("Something went wrong",{ appearance: "error" })
                }
            });

    }
    const handleForgotPassword = (e) => {
        e.preventDefault()
        if (!forgotPasswordEmail) {
            notifications("please Enter Email", 'error')
            return
        }
        forgotPassword(forgotPasswordEmail)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                notifications("Please Check Your Mail Inbox", 'success')

            })
            .catch(function (error) {
                notifications(error?.response?.data, 'error')
                console.log(error);
            });
    }

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem("fintaxcialUser"));
        if (userData?.token && userData.role == 'user') {
            navigate("/dashboard");
        }
    }, [])
    return (
        <>
            <Header />
            {first ?
                <>
                    <div className='container'>

                        <form onSubmit={handleSubmit}>
                            <div className="form_input ">
                                <div className='row'>
                                    <div className='col-md-12 text-center'>
                                        <h3>Login to your Account</h3>
                                    </div>
                                </div>
                                <label>Email</label>
                                <input type="email" class="form-control" value={inputData.email} onChange={(e) => { handleChange("email", e.target.value) }} />
                                {formValidate.email && <span className="invalidInput">{formValidate.email}</span>}


                                <label>Password</label>


                                <input type="password" class="form-control" value={inputData.password} onChange={(e) => { handleChange("password", e.target.value) }} />
                                <button className="btn btn-dark" onClick={(e) => { validate(e) }}>
                                    <b>Login</b>
                                </button><span
                                    onClick={() => {
                                        setFirst(false)
                                    }}
                                    style={{
                                        color: "blue",
                                        cursor: "pointer"
                                    }}
                                >Forgot Password?</span><span><NavLink to='/signup'>Create Account</NavLink></span>
                            </div>
                        </form>
                    </div>
                </>
                :
                <>
                    <div className='container'>
                        <form onSubmit={handleForgotPassword}>
                            <div className='form_input'>
                                <div className='row'>
                                    <div className='col-md-12 text-center'>
                                        <h3>Enter Email</h3>
                                    </div>
                                </div>
                                <label>Email</label>
                                <input type="email" class="form-control" value={forgotPasswordEmail} onChange={(e) => setForgotPasswordEmail(e.target.value)} />
                                <button className="btn btn-dark">
                                    <b>Get Reset Password Link</b>
                                </button>
                                <span
                                    onClick={() => {
                                        setFirst(true)
                                    }}
                                    style={{
                                        color: "blue",
                                        cursor: "pointer"
                                    }}
                                >Login</span>
                                <span><NavLink to='/signup'>Create Account</NavLink></span>
                            </div>
                        </form>
                    </div>
                </>
            }





            <Footer />
        </>
    )
}
