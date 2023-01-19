import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { useToasts } from "react-toast-notifications";
import axios from 'axios';


export default function Subscription() {
    const navigate=useNavigate()
    const { addToast } = useToasts();
    const [plan, setplan] = useState('')

    const subscribe = () => {
        if (!plan) {
            addToast("Please select plan", { appearance: "error" })
            return
        }
        var options = {
            "key": 'rzp_test_uduIzmjrW40MRu',
            "amount": plan=='Individual'?100000:500000, // 2000 paise = INR 20, amount in paisa
            "name": "",
            "description": "",
            'order_id': "",
            "handler": function (response) {
                console.log(response);
                var values = {
                    razorpay_signature: response.razorpay_signature,
                    razorpay_order_id: response.razorpay_order_id,
                    transactionid: response.razorpay_payment_id,
                    transactionamount: plan=='Individual'?100000:500000,
                }
                axios.post('http://localhost:7000/v1/payment', values)
                    .then((res) => {
                        addToast("Successfully", { appearance: "success" })
                        setTimeout(()=>{
                            navigate('/requests')
                        },1000)
                    })
                    .catch((e) => {
                        addToast("Something went wrong", { appearance: "error" })
                        console.log(e)
                    })
            },
        };
        axios.post('http://localhost:7000/v1/order', { amount: plan=='Individual'?100000:500000 })
            .then(res => {
                options.order_id = res.data.id;
                options.amount = res.data.amount;
                console.log(options)
                var rzp1 = new window.Razorpay(options);
                rzp1.open();
            })
            .catch((e) => {
                addToast("Something went wrong try again", { appearance: "error" })
                console.log(e)
            })



    }
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, [])
    return (
        <div className="container">
            <section>
                <div className="header-section">
                    <h1>Our Best Offers (Please Select a Plan) </h1>
                </div>
            </section>
            <section>

                <div className="row">
                    <div className='col-lg-6 mb-5 mb-lg-0 text-center'>
                        <div className={plan == 'Individual' ? 'membershipCard selectediv' : 'membershipCard'}
                            onClick={() => setplan("Individual")}
                        >

                            <h4>Individual Plans</h4>
                            <p>$1000/Year</p>
                        </div>
                    </div>

                    <div className='col-lg-6 mb-5 mb-lg-0 text-center'>
                        <div className={plan == 'corporate' ? 'membershipCard selectediv' : 'membershipCard'}
                            onClick={() => setplan("corporate")}
                        >

                            <h4>Corporate Plans</h4>
                            <p>$5000/Year</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='container'>
                        <div className='col-lg-12 mb-5 mb-lg-0 text-center'>
                            <Button type="primary"
                                onClick={subscribe}
                            >
                                Upgrade
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
