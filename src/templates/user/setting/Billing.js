import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { getAllTransaction } from '../../../Services/userServices/service'
import moment from 'moment'

export default function Billing() {
    const [userBillingDetails, setUserBillingDetails] = useState([])
    useEffect(() => {
        getAllTransaction()
            .then((res) => {
                console.log(res.data.data)
                setUserBillingDetails(res?.data?.data)
            })
            .catch((e) => {
                console.log(e)
            })

    }, [])
    return (
        <div className='Billing_Section'>
            <div className='container'>
                <div className='row'>

                    <h6>Billing Details</h6>
                </div>
            </div>

        </div>
    )
}
