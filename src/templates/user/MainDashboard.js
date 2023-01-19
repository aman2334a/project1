import React, { useEffect, useState,useRef } from 'react'
import { Table, Space, Button } from 'antd';
import moment from 'moment'
import { getAllServiceRequests } from '../../Services/userServices/service';
import { useReactToPrint } from 'react-to-print';


export default function MainDashboard() {
  const [userRequests, setUserRequests] = useState([])
  const [tableloading, setTableloading] = useState(true)
  const columns = [
    {
      title: 'Request Id',
      dataIndex: '_id',
      key: 'id',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Service Category',
      dataIndex: ['serviceCategoryId', 'name'],
      key: 'name',
    },
    {
      title: 'Sub-Category',
      dataIndex: ['subCategoryId', 'name'],
      key: 'name',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'desc',
      render: (_, record) => (

        <>
          {console.log("flow1", record.createdAt)}
          {moment(record.createdAt).format('DD/MM/YYYY')}</>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'desc',
      key: 'desc',
      render: (_, record) => (
        <Space size="middle"><b>{record.status == 1 ? "Pending" : record.status == 2 ? "In Progress" : record.status == 3 ? "Ready To Close" : "Closed"}</b></Space>
      ),
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     // <Space size="middle">
    //     <div className='btnDiv'>
    //       <Button onClick={() => showModal(record._id)}  >Edit</Button>
    //       <Button onClick={() => deleteScheme(record._id)} danger>Delete</Button>
    //     </div>
    //     // </Space>
    //   ),
    // },
  ]
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    getAllServiceRequests()
      .then((res) => {
        console.log(res.data)
        setUserRequests(res.data?.data)
        setTableloading(false)

      })
      .catch((e) => {
        console.log(e)
      })

  }, [])
  return (
    <div>
      <h6>List of Requests</h6>
      <div ref={componentRef}>

        <Table
          columns={columns}
          dataSource={userRequests}
          loading={tableloading}
        />
      </div>
      <Button
      onClick={handlePrint}
      >Export As Pdf</Button>
    </div>
  )
}
