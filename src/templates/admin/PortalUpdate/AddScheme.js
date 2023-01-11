import React, { useEffect, useState } from 'react'
// import Table from './../Component/Table'
import { addSchemeApi, getSchemeApi } from '../../../Services/adminServices/service'
import { Space, Table, Tag } from 'antd';

export default function AddScheme() {
  const [inputData, setInputData] = useState({
    name: '',
    desc: ''
  })
  const [tableData, setTableData] = useState([])
  const handleChange = (key, value) => {
    let tmp = { ...inputData }
    tmp[key] = value
    setInputData(tmp)
  }


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
  
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
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
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addSchemeApi(inputData)
      .then(function (response) {
        console.log(response.data);
        setTableData((old)=>{
          old.push({...inputData})
          return [...old]
        })
        let tmp = {
          name: '',
          desc: ''
        }
        setInputData(tmp)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getSchemeApi()
      .then(function (response) {
        setTableData(response.data.data)
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])
  // const data=[
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ]
  return (
    <div>
      <section>
        <div className="container scheme">

          <div className='form-section'>
            <p>Add Government Schemes</p>

            <div class="contact-form">
              <form id="contact-form" role="form" onSubmit={handleSubmit} novalidate="novalidate">
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
        // data={tableData}
        columns={columns}
        dataSource={tableData}
      />
    </div>
  )
}
