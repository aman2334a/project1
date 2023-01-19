import React, { useEffect, useState, useRef } from 'react'
// import Table from '../Component/Table'
import { Table, Button, Modal, Form, Input, Select } from 'antd'
import moment from 'moment'
import { useReactToPrint } from 'react-to-print';
import { getRequestByCustomerWiseAPi, getAllSubCategory, getAllCategory ,updateRequestStatusApi} from '../../../Services/adminServices/service'

export default function CustomerWise() {
  const [form] = Form.useForm();
  const [tableData, setTableData] = useState([])
  const [categoryFilterValues, setCategoryFilterValues] = useState([])
  const [subCategoryFilterValues, setSubCategoryFilterValues] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tableDataIsLoading, setTableDataIsLoading] = useState(true)
  const [reloadApi, setReloadApi] = useState(true)
  const allRequestPrint = useRef();
  const print = useReactToPrint({
    content: () => allRequestPrint.current,
  });
  const columns = [
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
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      // sorter: (a, b) => a?.name?.length - b?.name?.length,
      render: (_, record) => (
        <><b>{record.status == 1 ? "Pending" : record.status == 2 ? "In Progress" : record.status == 3 ? "Ready To Close" : "Closed"}</b></>
      ),
    },

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
  const showModel = (record) => {
    form.setFieldsValue({
      value: record.status,
      id: record._id
    });
    setIsModalOpen(true)

  }
  const handleCancel = () => {
    setIsModalOpen(false)
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
          setSubCategoryFilterValues([...arr])

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

    getRequestByCustomerWiseAPi()
      .then((res) => {
        console.log(res)
        setTableData(res.data?.data)
        setTableDataIsLoading(false)
      })
      .catch((e) => {
        console.log(e)

      })
  }, [reloadApi])
  return (
    <div className=''>
      {/* <h3>Customer Reports</h3> */}
      <div ref={allRequestPrint}>

        <div className='container '>
          <h5>All Service Request </h5>
          <Table
            loading={tableDataIsLoading}
            columns={columns}
            dataSource={tableData}
          />
        </div>
      </div>
      <div className='exportBtn'>
        <Button onClick={print}>Export As Pdf</Button>
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
