import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { getAllTransaction } from '../../../Services/userServices/service'
import moment from 'moment'

export default function Billing() {
    const [userBillingDetails, setUserBillingDetails] = useState([])
    const column=[
        {
            title: 'Transaction Id',
            dataIndex: 'transactionid',
            key: 'transactionid',
        },
        {
            title: 'Billing Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (_, record) => (

                <>
                  {moment(record.createdAt).format('DD/MM/YYYY')}</>
              ),
        },
        {
            title: 'Amount',
            dataIndex: 'transactionamount',
            key: 'transactionamount',
           
        },
    ]
    useEffect(() => {
        getAllTransaction()
        .then((res)=>{
            console.log(res.data.data)
            setUserBillingDetails(res?.data?.data)
        })
        .catch((e)=>{
            console.log(e)
        })

    }, [])
    return (
            <div className='Billing_Section'>
                <p>Billing Details</p>
                <Table
                columns={column}
                dataSource={userBillingDetails}
                />
            </div>
    )
}
