import React,{useEffect} from 'react'
import UserLayout from '../../templates/user/Component/UserLayout.tsx'
import SettingTemplate from '../../templates/user/SettingTemplate'
import { getUserProfile } from '../../Services/userServices/service'
import { useNavigate } from 'react-router-dom'
export default function Setting() {
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
        element={<SettingTemplate />}
        title={"Profile Setting"}
      />
    </>
  )
}
