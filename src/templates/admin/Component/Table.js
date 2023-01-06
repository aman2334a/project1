import React from 'react'
import './table.css'
export default function Table({ column, data,tableHeading }) {
    console.log(data)
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
                            {
                                
                            }
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
