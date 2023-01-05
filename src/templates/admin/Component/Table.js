import React from 'react'
import './table.css'
export default function Table({ column, data,tableHeading }) {
    return (
        <div className='container'>
            <h2>{tableHeading}</h2>
            <div className='mainTable'>
                <table>
                    <thead>
                        <tr>
                            {column?.map((columnItem, columnIndex) => {
                                return <th>
                                    {columnItem.name}
                                </th>
                            })}
                            {/* <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th> */}
                        </tr>
                    </thead>
                    {!data ?
                        <tbody>
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
