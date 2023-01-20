import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Alert, Space, Spin } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { validateUser } from '../Services/userServices/service';
import { useToasts } from "react-toast-notifications";





export default function ConfirmEmail() {
  const { addToast } = useToasts();
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    let token = searchParams.get('link')
    if (token) {
      validateUser(token)
        .then(function (response) {
          addToast("SuccessFully Register", { appearance: "success" })
          navigate('/login')
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
    <div className='static'>
      <Header />
      <div className='container'>
        <div className='row'>
          <Spin tip="Loading" size="large">
            <div className="form_input ">
              <div className='row'>
                <div className='col-md-12 text-center'>
                  <h3>Loading... Please Wait </h3>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
      <Footer />
    </div>
  )
}
