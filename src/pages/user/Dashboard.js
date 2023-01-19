import React, { useEffect, useState } from 'react'
import Subscription from './Subscription'
import { useNavigate } from 'react-router-dom'
import { getUserProfile } from '../../Services/userServices/service'
import { Spin } from 'antd';
import CreateRequest from '../../templates/user/CreateRequest'
import { LoadingOutlined } from '@ant-design/icons';
import UserLayout from '../../templates/user/Component/UserLayout.tsx'
import MainDashboard from '../../templates/user/MainDashboard'


export default function Dashboard() {
  const navigate = useNavigate()
  const [checkSubsription, setcheckSubsription] = useState(true)
  const [userData, setuserData] = useState({})
  
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('fintaxcialUser'))
    if (!userData?.token || !userData.role == 'user') {
        navigate("/login");
    }
    getUserProfile()
      .then(function (response) {
        setIsLoading(false)
        console.log(response.data?.data.subscription);
        setuserData(response.data?.data)
        setcheckSubsription(response.data?.data?.subscription)
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  return (
    <>
    <UserLayout
    element={checkSubsription ? <MainDashboard /> : <Subscription />}
    />

    </>
    // <div>
    //   {
    //     isLoading ?
    //       <div className='container'>
    //           <div className='row justify-content-md-center text-center loader'>
    //               <Spin
    //                 size="large"
    //               />
    //             </div>
    //       </div>
    //       :
    //       <>
    //         {checkSubsription ? <CreateRequest /> : <Subscription />}
    //       </>
    //   }
    // </div>
  )
}
