import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd'
import { getAllUser } from '../../../Services/adminServices/service'

export default function UserManage() {
  const [userData, setUserData] = useState([])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Subscription',
      dataIndex: 'subscription',
      key: 'subscription',
      render: (_, record) => (
      <>{record.subscription?"Paid":"Unpaid"}</>
        ),
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Business Name',
      dataIndex: 'businessName',
      key: 'businessName',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'GST Number',
      gstNumber: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        // <Space size="middle">
        <div className='btnDiv'>
          <Button onClick={() => showModal(record._id)}  >Edit</Button>
          <Button onClick={() => deleteUser(record._id)} danger>Delete</Button>
        </div>
        // </Space>
      ),
    },
  ]
  useEffect(() => {
    getAllUser()
      .then(function (response) {
        console.log(response.data);
        let tmp = response.data?.data
        setUserData([...tmp])
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const showModal = () => {

  }
  const deleteUser = () => {

  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={userData}
      />

    </div>
  )
}
