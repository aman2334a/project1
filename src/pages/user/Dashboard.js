import React, { useEffect, useState } from 'react'
import MainDashboard from '../../templates/user/MainDashboard'
import Subscription from './Subscription'
import { useNavigate } from 'react-router-dom'
import { getUserProfile } from '../../Services/userServices/service'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


export default function Dashboard() {
  const navigate = useNavigate()
  const [checkSubsription, setcheckSubsription] = useState()
  const [userData, setuserData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    let token = localStorage.getItem('Token')
    if (!token) {
      navigate('/login')
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
{/* <Layout/> */}
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
    //         {checkSubsription ? <MainDashboard /> : <Subscription />}
    //       </>
    //   }
    // </div>
  )
}
