import React, { useEffect, useState } from 'react'
import { Table, Button,Modal } from 'antd'
import { deleteUserApi, getAllUser } from '../../../Services/adminServices/service'
import { useToasts } from "react-toast-notifications";

export default function UserManage() {
  const [userData, setUserData] = useState([])
  const { addToast } = useToasts();
  const [modal, contextHolder] = Modal.useModal();
  const [reloadApidata, setReloadApidata] = useState(true)
  const [isdeleteOpen, setIsdeleteOpen] = useState(false)
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
        <>{record.subscription ? "Paid" : "Unpaid"}</>
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
      dataIndex: 'gstNumber',
      key: 'email',
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     // <Space size="middle">
    //     <div className='btnDiv'>
    //       <Button onClick={() => showModal(record._id)}  >Edit</Button>
    //       <Button onClick={() => deleteUser(record._id)} danger>Delete</Button>
    //     </div>
    //     // </Space>
    //     ),
    //   },
    ]
    useEffect(() => {
      getAllUser()
      .then(function (response) {
        console.log(response.data);
        let tmp = response.data?.data
        setUserData([...tmp])
      })
      .catch(function (error) {
        addToast("Something went wrong", { appearance: "error" })
        console.log(error);
      });
    }, [reloadApidata])
    
    const showModal = () => {
      
    }
    const deleteUser = (id) => {
      deleteUserApi(id)
      .then((res) => {
        setReloadApidata(!reloadApidata)
        addToast("Successfully Deleted", { appearance: "success" })
        
      })
      .catch((e) => {
        console.log(e)
        addToast("Something went wrong", { appearance: "error" })
      })
  }
  const config = {
    title: 'Are you Sure',
    onOk:{deleteUser},
  };

  return (
    <div className='main-Page'>
      <Table
        columns={columns}
        dataSource={userData}
      />
      {contextHolder}

    </div>
  )
}

