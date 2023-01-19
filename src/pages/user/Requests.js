import React, { useEffect } from 'react'
import UserLayout from '../../templates/user/Component/UserLayout.tsx'
import RequestTemplate from '../../templates/user/RequestTemplate'
import { getUserProfile } from '../../Services/userServices/service'
import { useNavigate } from 'react-router-dom'
export default function Requests() {
  const navigate = useNavigate()
  useEffect(() => {
    getUserProfile()
      .then(function (response) {
        console.log(response.data?.data.subscription);
        if (!response.data?.data.subscription) {
          navigate('/dashboard')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <>
      <UserLayout
        element={<RequestTemplate />}
        title={"Add New Request"}
      />
    </>
  )
}
