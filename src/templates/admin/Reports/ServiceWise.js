import React, { useState,useEffect } from 'react'
// import Table from '../Component/Table'
import { Table, Button } from 'antd'
import moment from 'moment'

import { getAllServiceRequests } from '../../../Services/adminServices/service'

export default function ServiceWise() {
  const [tableData, setTableData] = useState([])
  const columns = [
    {
      title: 'Request Number',
      dataIndex: '_id',
      key: 'createdAt',
    },
    {
      title: 'Request Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (_, record) => (
        
        <>
        {console.log("flow1",record.createdAt)}
        {moment(record.createdAt).format('DD/MM/YYYY')}</>
      ),
    },
    {
      title: 'Service Category',
      dataIndex: ['serviceCategoryId','name'],
      key: 'name',
    },
    {
      title: 'Appointment time',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Customer id',
      dataIndex: ['userId','_id'],
      key: 'name',
    },
    {
      title: 'Customer Name',
      dataIndex: ['userId','name'],
      key: 'name',
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'name',
    },
    {
      title: 'Contact number',
      dataIndex: ['userId','mobile'],
      key: 'name',
    },
    {
      title: 'Update Ticket',
      key: 'action',
      render: (_, record) => (
        <div className='btnDiv'>
          <Button >Update Ticket</Button>
        </div>
      ),
    },
  ]
  const data = [

  ]
  useEffect(() => {
    getAllServiceRequests()
    .then(function (response) {
      console.log(response.data);
      let tmp=response.data.data
      setTableData([...tmp])
    })
    .catch(function (error) {
      console.log(error);
    });

  }, [])

  return (
    <div className=''>
      {/* <h3>Customer Reports</h3> */}
      <div className='container '>
        <h5>New Service Request</h5>
        <Table
          columns={columns}
          dataSource={tableData}
        />
      </div>
      <div className='container tableContainer'>
        <h5>In Progress Service Requests</h5>
        <Table
          columns={columns}
          dataSource={tableData}
        />
      </div>
      <div className='container tableContainer'>
        <h5>Ready To Close Service Requests</h5>
        <Table
          columns={columns}
          dataSource={tableData}
        />
      </div>
      <div className='container tableContainer'>
        <h5>Close Service Requests</h5>
        <Table
          columns={columns}
          dataSource={tableData}
        />
      </div>
    </div>
  )
}
