import React, { useEffect, useState } from 'react'
import { Button, Modal, Table, Tag, Form, Input, Radio } from 'antd';
import { addOffer, getOfferApi, getOfferById, updateOffer, deleteOfferApi } from '../../../Services/adminServices/service';
import { useToasts } from "react-toast-notifications";


export default function HotOffer() {
    const [form] = Form.useForm();
    const { TextArea } = Input;
    const { addToast } = useToasts();
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
            title: 'Offer Name',
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
                    <Button onClick={() => deleteOffer(record._id)} danger>Delete</Button>
                </div>
                // </Space>
            ),
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        addOffer(inputData)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                let tmp = {
                    name: '',
                    desc: ''
                }
                setInputData(tmp)
                setReloadApiData(!reloadApiData)
                addToast("Successfully Created!", { appearance: "success" })
            })
            .catch(function (error) {
                addToast("Something went wrong", { appearance: "error" })
                console.log(error);
            });
    }

    const showModal = (id) => {
        console.log(id)
        getOfferById(id)
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
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (value) => {
        let { id, ...data } = value
        updateOffer(id, data)
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
    const deleteOffer = (id) => {
        deleteOfferApi(id)
            .then(function (response) {
                addToast("successfully Deleted ", { appearance: "success" })
                setReloadApiData(!reloadApiData)
            })
            .catch(function (error) {
                addToast("Something went wrong", { appearance: "error" })
                console.log(error);
            });

    }

    useEffect(() => {
        getOfferApi()
            .then(function (response) {
                console.log(response.data);
                setTableData(response.data.data)
            })
            .catch(function (error) {
                addToast("Something went wrong", { appearance: "error" })
                console.log(error);
            });
    }, [reloadApiData])

    return (
        <div className='main-Page'>
            <div className="container hotOffer">

                <div className='form-section'>
                    <p>Add Hot Offer</p>

                    <div class="contact-form ">
                        <form id="contact-form" className='adminAddFrom' role="form" novalidate="novalidate" onSubmit={handleSubmit}>
                            <div class="feedback">
                                <label htmlFor="name">Offer Name*</label>
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
            <Modal title="Edit Offer" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
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
