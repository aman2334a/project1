import React, { useEffect, useState } from 'react'
import Table from './../Component/Table'
import { addSchemeApi, getSchemeApi } from '../../../Services/adminServices/service'

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
  const column=[
    {
      name:"Scheme Name",
      key:'name'
    },
    {
      name:"Description",
      key:'desc'
    }
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getSchemeApi()
      .then(function (response) {
        setTableData(response.data.data)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])
  return (
    <div>
      <section>
        <div className="container scheme">

          <div className='form-section'>
            <p>Add Government Schemes</p>

            <div class="contact-form">
              <form id="contact-form" role="form" onSubmit={handleSubmit} novalidate="novalidate">
                <div class="feedback">
                  <label for="name">Name*</label>
                  <input type="text" class="form-control" id="name" name="name" value={inputData.name} placeholder="" onChange={(e) => handleChange('name', e.target.value)} /></div>

                <div class="feedback">
                  <label for="message">Message*</label>
                  <textarea class="form-control" rows="6" id="message" name="message" value={inputData.desc} onChange={(e) => handleChange('desc', e.target.value)}
                    placeholder="" />

                </div>
                <button className='btn btn-primary' >Submit</button>
              </form>
            </div>
          </div>
        </div>


      </section>
      {/* <Table
        data={tableData}
        column={column}
      /> */}
    </div>
  )
}
