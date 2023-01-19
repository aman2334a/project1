
import React, { useEffect, useState } from 'react'
import { Col, Row, Button, Table, Modal, Select } from 'antd';
import { Form, Input, Radio } from 'antd';

import { getAllCategory, getCategoryById, updateSubCategory, deleteSubCategory, addSubCategory, getAllSubCategory } from '../../../Services/adminServices/service';
import { useToasts } from "react-toast-notifications";
// import SubCategory from './Component/SubCategory';


export default function SubCategory() {
    const [serviceCategory, setServiceCategory] = useState([])
    const { addToast } = useToasts();
    const [form] = Form.useForm();
    const { TextArea } = Input;
    const [inputData, setInputData] = useState({
        categoryId: '',
        name: '',
        desc: ''
    })
    const [option, setOption] = useState([{ name: 'Option 1️⃣', id: 1 }, { name: 'Option 2️⃣', id: 2 }])
    const [reloadApiData, setReloadApiData] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [tableData, setTableData] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        addSubCategory(inputData)
            .then(function (response) {
                console.log(response.data);
                let tmp={
                    name:'',
                    categoryId:'',
                    desc:''
                }
                setInputData(tmp)
                setReloadApiData(!reloadApiData)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const columns = [
        {
            title: 'Sub-Category Name',
            dataIndex: 'name',
            key: 'name',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'Category Name',

            dataIndex: ['categoryId', 'name'],
            key: ['categoryId', 'name'],

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
                    <Button onClick={() => showModal(record)}  >Edit</Button>
                    <Button onClick={() => deleteCategoryFun(record._id)} danger>Delete</Button>
                </div>
                // </Space>
            ),
        },
    ]
    const showModal = (record) => {
        // getCategoryById(id)
        //     .then(function (response) {
        //         console.log(response.data);
        //         let tmp = response.data.data
        //     })
        //     .catch(function (error) {
            //         addToast("Something went wrong", { appearance: "error" })
            //         console.log(error);
            //     });
            
                    form.setFieldsValue({
                        name: record.name,
                        desc: record.desc,
                        id: record._id
                    });
                    setIsModalOpen(true)
    }
    const deleteCategoryFun = (id) => {
        deleteSubCategory(id)
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
        updateSubCategory(id, data)
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
        getAllSubCategory()
            .then(function (response) {
                console.log(response.data);
                setTableData(response?.data?.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [reloadApiData])

    useEffect(() => {
        getAllCategory()
            .then(function (response) {
                console.log(response.data);
                setServiceCategory(response?.data?.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (
        <div className='main-Page'>
                <div className='form-section'>
                    <p>Add Service Sub-Category</p>
                    <form id="" className='adminAddFrom' role="form" onSubmit={handleSubmit} novalidate="novalidate">
                        <div class="feedback">
                            <label htmlFor="name">Category Name</label>
                            <select class="form-select" aria-label="Default select example"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    let tmp = { ...inputData }
                                    tmp.categoryId = e.target.value
                                    setInputData({ ...tmp })
                                }}
                            >
                                <option selected disabled>--Select Service Category--</option>
                                {serviceCategory?.length > 0 ?
                                    <>
                                        {serviceCategory.map((item, index) => {
                                            return <option value={item._id}>{item.name}</option>
                                        })}
                                    </> :
                                    <>
                                        <option>No service category available</option>
                                    </>
                                }
                            </select>
                        </div>
                        <div className='feedback'>
                            <label htmlFor="message">Sub-Category Name</label>
                            <input class="form-control"
                                onChange={(e) => {

                                    let tmp = { ...inputData }
                                    tmp.name = e.target.value
                                    setInputData({ ...tmp })
                                }}
                            />
                        </div>

                        <div class="feedback">
                            <label htmlFor="message">Sub-Category Description</label>

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