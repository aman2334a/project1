import { Button } from 'antd';
import Item from 'antd/es/list/Item';
import React, { useEffect, useState } from 'react'
import { getAllServiceCategory, createRequestAPi } from '../../Services/userServices/service'
export default function CreateRequest() {
    const [serviceCategories, setServiceCategories] = useState([])
    const [inputData, setInputData] = useState({
        categoryId: '',
        reason: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        createRequestAPi(inputData)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        getAllServiceCategory()
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                let tmp = response.data?.data
                if (tmp) {
                    setServiceCategories(tmp)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <div >
            <form className='userRequestForm' onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Select Service Category</label>
                    <select class="form-control" id="exampleFormControlSelect1"
                        onChange={(e) => {
                            console.log(e.target.value)
                            let tmp = { ...inputData }
                            tmp.categoryId = e.target.value
                            setInputData({ ...tmp })
                        }}
                    >
                        {
                            serviceCategories?.length > 0 ? <>
                                {
                                    serviceCategories.map((item, index) => {
                                        return <>
                                            <option value={item._id}>{item.name} </option>
                                        </>
                                    })
                                }
                            </> :
                                <>
                                    <option disabled>No Service Category</option>
                                </>
                        }
                    </select>
                </div>
                <div class="form-group">
                    <label htmlFor="message">Reason</label>
                    <textarea class="form-control" rows="2" id="message" name="message" placeholder=""
                        onChange={(e) => {
                            let tmp = { ...inputData }
                            tmp.reason = e.target.value
                            setInputData({ ...tmp })
                        }}
                    />
                </div>
                <button className='btn btn-primary' >Submit</button>
            </form>
        </div>
    )
}
