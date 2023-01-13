import React,{useEffect, useState} from 'react'
import { Table,Button } from 'antd'
import moment from 'moment'

import { getAllTransaction } from '../../../Services/adminServices/service'

export default function Payment() {
  const [paymentData, setPaymentData] = useState([])
  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transactionid',
      key: 'transactionid',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Amount',
      dataIndex: 'transactionamount',
      key: 'transactionamount',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (_, record) => (
        
        <>
        {console.log("flow1",record.createdAt)}
        {moment(record.createdAt).format('DD/MM/YYYY')}</>
      ),
      
    },
    {
      title: 'User name',
      dataIndex: ['userId','name'],
      key: 'country',
    },
    {
      title: 'User Email',
      dataIndex: ['userId','email'],
      key: 'country',
    },
    {
      title: 'User mobile',
      dataIndex: ['userId','mobile'],
      key: 'country',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        // <Space size="middle">
        <div className='btnDiv'>
          {/* <Button onClick={() => showModal(record._id)}  >Edit</Button> */}
          <Button onClick={() => deleteRecord(record._id)} danger>Delete</Button>
        </div>
        // </Space>
      ),
    },
  ]

  const deleteRecord=()=>{

  }
  useEffect(()=>{
    getAllTransaction()
    .then((res)=>{
      console.log(res.data)
      let tmp=res.data?.data
      setPaymentData([...tmp])
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])
  return (
    <div>
      <Table
      columns={columns}
      dataSource={paymentData}
      />
    </div>
  )
}
