import { Button } from 'antd';
import Item from 'antd/es/list/Item';
import React, { useEffect, useState } from 'react'
import { useToasts } from "react-toast-notifications";
import { useNavigate } from 'react-router-dom';

import { getAllServiceCategory, createRequestAPi, getAllServiceSubCategory } from '../../Services/userServices/service'
export default function RequestTemplate() {
    const navigate = useNavigate()
    const { addToast } = useToasts();
    const [serviceCategories, setServiceCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [showSubcategories, setShowSubcategories] = useState([])
    const [serviceCategoryId, setServiceCategoryId] = useState('')
    const [inputData, setInputData] = useState({
        reason: '',
        subCategoryId: ''
    })

    const showNotification = (text, type) => {
        addToast(text, { appearance: type })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createRequestAPi(inputData, serviceCategoryId)
            .then(function (response) {
                console.log(response.data);
                showNotification("successfully created", "success")
                let tmp = {
                    reason: '',
                    subCategoryId: ''
                }
                setInputData(tmp)
                setServiceCategoryId('')
                setTimeout(() => {
                    navigate('/dashboard')
                }, 1000)
            })
            .catch(function (error) {
                showNotification("Something went wrong", "error")
                console.log(error);
            });
    }
    useEffect(() => {
        getAllServiceCategory()
            .then(function (response) {
                console.log(response.data);
                let tmp = response.data?.data
                if (tmp) {
                    setServiceCategories(tmp)
                }
            })
            .catch(function (error) {
                showNotification("Something went wrong", "error")
                console.log(error);
            });

        getAllServiceSubCategory()
            .then(function (response) {
                let tmp = response.data?.data
                if (tmp) {
                    setSubCategories(tmp)
                }
            })
            .catch(function (error) {
                showNotification("Something went wrong", "error")
                console.log(error);
            });

    }, [])


    useEffect(() => {
        console.log("csjhdvcjhdsvjh")
        // let selectedCategory=serviceCategoryId
        console.log(subCategories, serviceCategoryId)
        let allSubcategories = [...subCategories]
        let tmp = allSubcategories.filter((item) => {
            if (item.categoryId == serviceCategoryId) {
                console.log("cds nm")
                return item
            }
        })
        console.log(tmp)
        setShowSubcategories([...tmp])

    }, [serviceCategoryId])
    return (
        <div >
            <form className='userRequestForm' onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Select Service Category</label>
                    <select class="form-control" id="exampleFormControlSelect1" required
                        onChange={(e) => {
                            setServiceCategoryId(e.target.value)
                        }}
                    >
                        {
                            serviceCategories?.length > 0 ? <>
                                <option disabled selected>--Select Service Category--</option>
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
                    <label for="exampleFormControlSelect1">Select Service Sub-Category</label>
                    <select class="form-control" id="exampleFormControlSelect1" required
                        onChange={(e) => {
                            console.log(e.target.value)
                            let tmp = { ...inputData }
                            tmp.subCategoryId = e.target.value
                            setInputData({ ...tmp })
                        }}
                    >
                        {
                            showSubcategories?.length > 0 ? <>
                                <option disabled selected>--Select Service  Sub-Category--</option>

                                {
                                    showSubcategories.map((item, index) => {
                                        return <>
                                            <option value={item._id}>{item.name} </option>
                                        </>
                                    })
                                }
                            </> :
                                <>
                                    <option disabled>No Service Sub-Category</option>
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
