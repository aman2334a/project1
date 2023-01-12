import React,{useState} from 'react'
// import Table from '../Component/Table'
import { Table,Button } from 'antd'

export default function ServiceWise() {
  const [tableData, setTableData] = useState([])
  const columns = [
    {
      title: 'Request Number',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Request Date',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Service Category',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Appointment time',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Customer id',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Customer Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Reason',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Contact number',
      dataIndex: 'name',
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
        <h5>No Record Close Service Requests</h5>
        <Table
          columns={columns}
          dataSource={tableData}
        />
      </div>
    </div>
  )
}
