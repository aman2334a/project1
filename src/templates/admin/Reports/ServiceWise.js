import React, { useState, useEffect, useRef } from 'react'
// import Table from '../Component/Table'
import { Table, Button, Modal, Form, Select, Input } from 'antd'
import moment from 'moment'
import { useReactToPrint } from 'react-to-print';


import { getAllServiceRequests, getRequestByStatusApi, getAllSubCategory, getAllCategory, updateRequestStatusApi } from '../../../Services/adminServices/service'

export default function ServiceWise() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModelOpen] = useState(false)
  const [newRequest, setNewRequest] = useState([])
  const [inProgressReports, setInProgressReports] = useState([])
  const [readyToCloseReports, setReadyToCloseReports] = useState([])
  const [closedReports, setClosedReports] = useState([])
  const [reloadApi, setReloadApi] = useState(true)
  const [subCategoryFilterValues, setsubCategoryFilterValues] = useState([])
  const [categoryFilterValues, setCategoryFilterValues] = useState([])
  const newRequestColumns = [
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
          {console.log("flow1", record.createdAt)}
          {moment(record.createdAt).format('DD/MM/YYYY')}</>
      ),
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
      title: 'Appointment time',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Customer id',
      dataIndex: ['userId', '_id'],
      key: 'name',
    },
    {
      title: 'Customer Name',
      dataIndex: ['userId', 'name'],
      key: 'name',
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'name',
    },
    {
      title: 'Contact number',
      dataIndex: ['userId', 'mobile'],
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
  const newRequestRef = useRef();
  const inProgressReportsRef = useRef()
  const readyToCloseReportsRef = useRef()
  const closedReportsRef = useRef()
  const printNewRequestReports = useReactToPrint({
    content: () => newRequestRef.current,
  });
  const printInProgressReports = useReactToPrint({
    content: () => inProgressReportsRef.current,
  });
  const printReadyToCloseReports = useReactToPrint({
    content: () => readyToCloseReportsRef.current,
  });
  const printClosedReports = useReactToPrint({
    content: () => closedReportsRef.current,
  });
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
          {moment(record.createdAt).format('DD/MM/YYYY')}</>
      ),
    },
    {
      title: 'Customer id',
      dataIndex: ['userId', '_id'],
      key: 'name',
    },
    {
      title: 'Customer Name',
      dataIndex: ['userId', 'name'],
      key: 'name',
    },
    {
      title: 'Contact number',
      dataIndex: ['userId', 'mobile'],
      key: 'name',
    },
    {
      title: 'Service Category',
      dataIndex: ['serviceCategoryId', 'name'],
      key: 'name',
      filters: categoryFilterValues,
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record?.serviceCategoryId?.name?.startsWith(value),
    },
    {
      title: 'Sub-Category',
      dataIndex: ['subCategoryId', 'name'],
      key: 'name',
      filters: subCategoryFilterValues,
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record?.subCategoryId?.name.startsWith(value),
    },
    // {
    //   title: 'Appointment time',
    //   dataIndex: 'name',
    //   key: 'name',
    // },

    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'name',
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    //   // sorter: (a, b) => a?.name?.length - b?.name?.length,
    //   render: (_, record) => (
    //     <><b>{record.status == 1 ? "Pending" : record.status == 2 ? "In Progress" : record.status == 3 ? "Ready To Close" : "Closed"}</b></>
    //   ),
    // },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className='btnDiv'>
          <Button onClick={() => showModel(record)}>Update Request</Button>
        </div>
      ),
    },
  ]

  const handleCancel = () => {
    setIsModelOpen(false)
  }
  const showModel = (record) => {
    form.setFieldsValue({
      value: record.status,
      id: record._id
    });
    setIsModelOpen(true)
  }

  const onFinish = (value) => {
    console.log(value)
    updateRequestStatusApi(value.id, value.Status)
      .then(function (response) {
        setReloadApi(!reloadApi)
        handleCancel()
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(value)
  }

  useEffect(() => {
    getAllSubCategory()
      .then((res) => {
        let tmp = res?.data?.data
        let arr = []
        if (tmp) {
          for (let x of tmp) {

            arr.push({
              text: x.name,
              value: x.name
            })
          }
          console.log(arr)
          setsubCategoryFilterValues([...arr])

        }

      }).catch((e) => {
        console.log(e)
      })
    getAllCategory()
      .then((res) => {
        let tmp = res?.data?.data
        let arr = []
        if (tmp) {
          for (let x of tmp) {
            arr.push({
              text: x.name,
              value: x.name
            })
          }
          setCategoryFilterValues([...arr])

        }

      }).catch((e) => {
        console.log(e)
      })

    getRequestByStatusApi(1)
      .then(function (response) {
        console.log(response.data);
        let tmp = response.data.data
        setNewRequest([...tmp])
      })
      .catch(function (error) {
        console.log(error);
      });


    getRequestByStatusApi(2)
      .then(function (response) {
        console.log(response.data);
        let tmp = response.data.data
        setInProgressReports([...tmp])
      })
      .catch(function (error) {
        console.log(error);
      });


    getRequestByStatusApi(3)
      .then(function (response) {
        console.log(response.data);
        let tmp = response.data.data
        setReadyToCloseReports([...tmp])
      })
      .catch(function (error) {
        console.log(error);
      });



    getRequestByStatusApi(4)
      .then(function (response) {
        console.log(response.data);
        let tmp = response.data.data
        setClosedReports([...tmp])
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [reloadApi])

  return (
    <div className=''>
      {/* <h3>Customer Reports</h3> */}
      <div ref={newRequestRef}>
        <div className='container '>
          <h5>New Service Request</h5>

          <Table
            columns={columns}
            dataSource={newRequest}
          />
        </div>
      </div>
      <div className='exportBtn'>
        <Button onClick={printNewRequestReports}>Export As Pdf</Button>
      </div>
      <div ref={inProgressReportsRef}>
        <div className='container tableContainer'>
          <h5>In Progress Service Requests</h5>
          <Table
            columns={columns}
            dataSource={inProgressReports}
          />
        </div>
      </div>
      <div className='exportBtn'>
        <Button onClick={printInProgressReports}>Export As Pdf</Button>
      </div>
      <div ref={readyToCloseReportsRef}>
        <div className='container tableContainer'>
          <h5>Ready To Close Service Requests</h5>

          <Table
            columns={columns}
            dataSource={readyToCloseReports}
          />
        </div>
      </div>
      <div className='exportBtn'>
        <Button onClick={printReadyToCloseReports}>Export As Pdf</Button>
      </div>
      <div ref={closedReportsRef}>
        <div className='container tableContainer'>
          <h5>Close Service Requests</h5>
          <Table
            columns={columns}
            dataSource={closedReports}
          />
        </div>
      </div>
      <div className='exportBtn'>
        <Button onClick={printClosedReports}>Export As Pdf</Button>
      </div>
      <Modal title="Update Request Status" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item name="id" label="Username" noStyle>
            <Input type="hidden" />
          </Form.Item>
          <Form.Item
            name="Status"
            rules={[{ required: true, message: 'Please Select Status' }]}
          >


            <Select
              defaultValue="select Status"
              style={{ width: "100%" }}
              // onChange={onFinish}
              options={[
                {
                  label: 'New Service Request',
                  value: 1,
                },
                {
                  label: 'In Progress Service Request',
                  value: 2,
                },
                {
                  label: 'Ready to Close Service Request',
                  // disabled: true,
                  value: 3,
                },
                {
                  label: 'Closed Service Request',
                  value: 4,
                },
              ]}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Update
          </Button>
        </Form>
      </Modal>
    </div>
  )
}
