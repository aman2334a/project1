import React from 'react'
import Table from '../Component/Table'

export default function ServiceWise() {
  const columnData = [
    {
      name: 'Request Number',
    },
    {
      name: 'Request Date',
    },
    {
      name: 'Service Category',
    },
    {
      name: 'Appointment time',
    },
    {
      name: 'Customer id',
    },
    {
      name: 'Customer Name',
    },
    {
      name: 'reason',
    },
    {
      name: 'Contact number',
    },
    {
      name: 'Update Ticket',
    },
  ]
  const data = [

  ]
  return (
    <div className=''>
      {/* <h2>Customer Reports</h2> */}
      <div className='container '>
        <Table
          tableHeading={'New Service Request'}
          column={columnData}
          data={data}
        />
      </div>
      <div className='container tableContainer'>
        <Table
          tableHeading={'In Progress Service Requests'}
          column={columnData}
          data={data}
        />
      </div>
      <div className='container tableContainer'>
        <Table
          tableHeading={'Ready To Close Service Requests'}
          column={columnData}
          data={data}
        />
      </div>
      <div className='container tableContainer'>
        <Table
          tableHeading={'Close Service Requests'}
          column={columnData}
          data={data}
        />
      </div>
    </div>
  )
}
