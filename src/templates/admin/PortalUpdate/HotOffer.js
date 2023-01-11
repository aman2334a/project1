import React,{useEffect, useState} from 'react'
import { Space, Table, Tag } from 'antd';
import { addOffer,getOfferApi } from '../../../Services/adminServices/service';
import { useToasts } from "react-toast-notifications";


export default function HotOffer() {
const [inputData, setInputData] = useState({
  name:'',
  desc:''
})
const [tableData, setTableData] = useState([])
const handleChange=(key,value)=>{
  let tmp={...inputData}
  tmp[key]=value
  setInputData(tmp)
}
const { addToast } = useToasts();


const columns=[
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
        <button className="btn btn-primary">Edit</button>
        <button className='btn btn-danger'>Delete</button>
      </div>
      // </Space>
    ),
  },
]

  const handleSubmit=(e)=>{
    e.preventDefault()
    addOffer(inputData)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      let tmp={
        name:'',
        desc:''
      }
      setInputData(tmp)
      addToast("Successfully Created!", { appearance: "success" })
    })
    .catch(function (error) {
      addToast("Something went wrong", { appearance: "error" })
      console.log(error);
    });
  }
  useEffect(()=>{
    getOfferApi()
    .then(function (response) {
      console.log(response.data);
      setTableData(response.data.data)
    })
    .catch(function (error) {
      addToast("Something went wrong", { appearance: "error" })

      console.log(error);
    });
  },[])

  return (
    <div>
      <section>
        <div className="container hotOffer">

          <div className='form-section'>
            <p>Hot Offer Schemes ckdvkhs</p>

            <div class="contact-form ">
              <form id="contact-form" role="form" novalidate="novalidate" onSubmit={handleSubmit}>
                <div class="feedback">
                  <label htmlFor="name">Name*</label>
                  <input type="text" class="form-control" id="name" name="name" value={inputData.name} placeholder="" onChange={(e) => handleChange('name', e.target.value)} /></div>

                <div class="feedback">
                  <label htmlFor="message">Message*</label>
                  <textarea class="form-control" rows="6" id="message" name="message" value={inputData.desc} onChange={(e) => handleChange('desc', e.target.value)}
                    placeholder="" />

                </div>
                <button className='btn btn-primary' >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Table
       columns={columns}
        dataSource={tableData}
         />
    </div>
  )
}
