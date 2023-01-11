import React from 'react'
import './table.css'
export default function Table({ column, data,tableHeading }) {
    console.log(data,column)
    return (
        <div className='container'>
            <h4>{tableHeading}</h4>
            <div className='mainTable'>
                <table>
                    <thead>
                        <tr>
                            {column?.map((columnItem, columnIndex) => {
                                return <th>
                                    {columnItem.name}
                                </th>
                            })}
                           
                        </tr>
                    </thead>
                    {data?.length>0 ?
                        <tbody>
                            {column?.map((columnItem, columnIndex)=>{
                                return <tr>
                                {data?.map((dataItem,dataIndex)=>{
                                    return<td>
                                    {dataItem}
                                    </td>
                                })}
                                
                                </tr>

                            })}
                        </tbody>
                        :
                        <div className='noRecord'>
                            {/* <tr>
                                    <td> */}
                            No Record
                            {/* </td>
                                </tr> */}
                        </div>

                    }
                </table>
            </div>
        </div>
    )
}
