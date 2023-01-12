import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { userSingin } from '../Services/userServices/service'
import { useToasts } from "react-toast-notifications";
import { NavLink ,useNavigate} from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
    const { addToast } = useToasts();
    const [inputData, setInputData] = React.useState({
        email: '',
        password: ''
    })
    const handleChange = (key, value) => {
        console.log(key, value)
        let tmp = { ...inputData }
        tmp[key] = value
        setInputData({ ...tmp })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputData)
        userSingin(inputData)
            .then(function (response) {
                addToast("Successfully login", { appearance: "success" })
                console.log(JSON.stringify(response?.data));
                localStorage.setItem("Token",response?.data.data)
                navigate('/user')
            })
            .catch(function (error) {
                addToast("Something went wrong", { appearance: "error" })
                console.log(error);
            });

    }

    useEffect(()=>{
        let  token=localStorage.getItem('Token')
        // if(token){
        //     navigate('/user')
        // }
    },[])
    return (
        <>
            <Header />

            <div className='container'>

                <form onSubmit={handleSubmit}>
                    <div className="form_input ">
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                <h3>Login to your Account</h3>
                            </div>
                        </div>
                        <label>Email</label>
                        <input type="text" class="form-control" value={inputData.email} onChange={(e) => { handleChange("email", e.target.value) }} />


                        <label>Password</label>


                        <input type="password" class="form-control" value={inputData.password} onChange={(e) => { handleChange("password", e.target.value) }} />
                        <button className="btn btn-dark">
                            <b>Login</b>
                        </button><span>Forgot Password?</span><span><NavLink to='/signup'>Create Account</NavLink></span>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    )
}
