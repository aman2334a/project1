
import React, { useEffect, useState } from 'react'
import { Col, Row, Button, Table, Modal } from 'antd';
import { Form, Input, Radio } from 'antd';

import { getAllCategory, addCategory, getCategoryById, updateCategory, deleteCategory } from '../../../Services/adminServices/service';
import { useToasts } from "react-toast-notifications";
import SubCategory from './Component/SubCategory';
export default function ServiceCategory() {
  const { addToast } = useToasts();
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [inputData, setInputData] = useState({
    name: '',
    desc: ''
  })
  const [option, setOption] = useState([{ name: 'Option 1️⃣', id: 1 }, { name: 'Option 2️⃣', id: 2 }])
  const [reloadApiData, setReloadApiData] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tableData, setTableData] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    addCategory(inputData)
      .then(function (response) {
        console.log(response.data);
        setReloadApiData(!reloadApiData)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const columns = [
    {
      title: 'Category Name',
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
          <Button onClick={() => deleteCategoryFun(record._id)} danger>Delete</Button>
        </div>
        // </Space>
      ),
    },
  ]
  const showModal = (id) => {
    getCategoryById(id)
      .then(function (response) {
        console.log(response.data);
        let tmp = response.data.data
        form.setFieldsValue({
          name: tmp.name,
          desc: tmp.desc,
          id: tmp._id
        });
        setIsModalOpen(true)
      })
      .catch(function (error) {
        addToast("Something went wrong", { appearance: "error" })
        console.log(error);
      });

  }
  const deleteCategoryFun = (id) => {
    deleteCategory(id)
      .then(function (response) {
        addToast("successfully Deleted ", { appearance: "success" })
        setReloadApiData(!reloadApiData)
      })
      .catch(function (error) {
        addToast("Something went wrong", { appearance: "error" })
        console.log(error);
      });
  }




  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (value) => {
    let { id, ...data } = value
    updateCategory(id, data)
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
  useEffect(() => {
    getAllCategory()
      .then(function (response) {
        console.log(response.data);
        setTableData(response?.data?.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [reloadApiData])


  return (
    <div>
      <div className='container '>
        <div className='form-section'>
          <p>Add Service Category</p>
          <form id="" className='adminAddFrom' role="form" onSubmit={handleSubmit} novalidate="novalidate">
            <div class="feedback">
              <label htmlFor="name">Category Name</label>
              <input type="text" class="form-control" placeholder="" value={inputData.name}
                onChange={(e) => {
                  let tmp = { ...inputData }
                  tmp.name = e.target.value
                  setInputData(tmp)
                }}
              />
            </div>

            <div class="feedback">
              <label htmlFor="message">Description</label>

              <textarea class="form-control" rows="2" id="message" name="message" value={inputData.desc} onChange={(e) => {
                let tmp = { ...inputData }
                tmp.desc = e.target.value
                setInputData(tmp)
              }}
                placeholder="" />


            </div>
            {/* <div className='feedback'>
            <label htmlFor="message">Select Sub-category</label>
            <SubCategory
            option={option} // Options to display in the dropdown
            // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name"
            />
            </div> */}
            <button className='btn btn-primary' >Submit</button>
          </form>
        </div>


      </div>
      <Table
        columns={columns}
        dataSource={tableData}
      />
      <Modal title="Edit Scheme" open={isModalOpen} onCancel={handleCancel} footer={null}>
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