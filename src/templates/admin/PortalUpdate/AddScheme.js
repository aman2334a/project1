import React, { useEffect, useState } from 'react'
// import Table from './../Component/Table'
import { addSchemeApi, getSchemeApi, getSchemeById, updateScheme, deleteSchemeApi } from '../../../Services/adminServices/service'
import { Button, Modal, Space, Table, Tag, Form, Input, Radio } from 'antd';

import { useToasts } from "react-toast-notifications";
import { UserOutlined } from '@ant-design/icons';


export default function AddScheme() {
  const { TextArea } = Input;
  const { addToast } = useToasts();
  const [form] = Form.useForm();

  const [inputData, setInputData] = useState({
    name: '',
    desc: ''
  })
  const [reloadApiData, setReloadApiData] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([])
  const handleChange = (key, value) => {
    let tmp = { ...inputData }
    tmp[key] = value
    setInputData(tmp)
  }
  const columns = [
    {
      title: 'Scheme Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        // <Space size="middle">
        <div className='btnDiv'>
          <Button onClick={() => showModal(record._id)}  >Edit</Button>
          <Button onClick={() => deleteScheme(record._id)} danger>Delete</Button>
        </div>
        // </Space>
      ),
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    addSchemeApi(inputData)
      .then(function (response) {
        console.log(response.data);

        let tmp = {
          name: '',
          desc: ''
        }
        setInputData(tmp)
        addToast("successfully Added", { appearance: "success" })
        setReloadApiData(!reloadApiData)
      })
      .catch(function (error) {
        addToast("Something went wrong", { appearance: "error" })
        console.log(error);
      });
  }
  const showModal = (id) => {
    getSchemeById(id)
      .then(function (response) {
        console.log(response.data);
        let tmp = response.data.data
        form.setFieldsValue({
          name: tmp.name,
          desc: tmp.desc,
          id: tmp._id
        });
      })
      .catch(function (error) {
        addToast("Something went wrong", { appearance: "error" })
        console.log(error);
      });
    setIsModalOpen(true);
  };

  const handleOk = (value) => {
    console.log(value)
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    getSchemeApi()
      .then(function (response) {
        setTableData(response.data.data)
        console.log(response.data.data);
      })
      .catch(function (error) {
        addToast("Something went wrong", { appearance: "error" })
        console.log(error);
      });

  }, [reloadApiData])


  const onFinish = (value) => {
    let { id, ...data } = value
    updateScheme(id, data)
      .then(function (response) {
        addToast("successfully updated ", { appearance: "success" })
        console.log(response.data);
        setReloadApiData(!reloadApiData)
      })
      .catch(function (error) {
        addToast("Something went wrong", { appearance: "error" })
        console.log(error);
      });
      handleCancel()
  }

  const deleteScheme = (id) => {
    deleteSchemeApi(id)
      .then(function (response) {
        addToast("successfully Deleted ", { appearance: "success" })
        setReloadApiData(!reloadApiData)
      })
      .catch(function (error) {
        addToast("Something went wrong", { appearance: "error" })
        console.log(error);
      });
  }
  return (
    <div className='main-Page'>
        <div className="container scheme">

          <div className='form-section'>
            <p>Add Government Schemes</p>

            <div class="contact-form">
              <form id="" className='adminAddFrom' role="form" onSubmit={handleSubmit} novalidate="novalidate">
                <div class="feedback">
                  <label htmlFor="name">Scheme Name*</label>
                  <input type="text" class="form-control" id="name" name="name" value={inputData.name} placeholder="" onChange={(e) => handleChange('name', e.target.value)} /></div>

                <div class="feedback">
                  <label htmlFor="message">Description*</label>
                  <textarea class="form-control" rows="2" id="message" name="message" value={inputData.desc} onChange={(e) => handleChange('desc', e.target.value)}
                    placeholder="" />

                </div>
                <button className='btn btn-primary' >Submit</button>
              </form>
            </div>
          </div>
        </div>


      <Table
        columns={columns}
        dataSource={tableData}
      />
      <Modal title="Edit Scheme" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input Scheme Name!' }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="id" label="Username" noStyle>
            <Input type="hidden" />
          </Form.Item>
          <Form.Item
            name="desc"
            rules={[{ required: true, message: 'Please input Scheme Description!' }]}
          >
            <TextArea placeholder="Description" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Update
          </Button>
        </Form>
      </Modal>


    </div>
  )
}
