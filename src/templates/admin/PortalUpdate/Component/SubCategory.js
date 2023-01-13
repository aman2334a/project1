import React from 'react'

import {Row,Col,Button} from 'antd'
import Multiselect from 'multiselect-react-dropdown';

export default function SubCategory({option,onSelect,onRemove,displayValue}) {
    return (
        <>
            <Row gutter={10}>
                <Col sm={24} lg={12}>

                    <Multiselect
                        options={option} // Options to display in the dropdown
                        // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                        onSelect={onSelect} // Function will trigger on select event
                        onRemove={onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                    />
                </Col>
                <Col xs={24} lg={12}>

                    <Button>Create New</Button>
                </Col>
            </Row>
        </>
    )
}
