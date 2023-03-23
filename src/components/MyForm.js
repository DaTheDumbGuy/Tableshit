import React from 'react'
import { Form, FormGroup, Input, Label, Col, Button } from 'reactstrap'

function MyForm({ ProductName, HandleProductName, ProductPrice, HandleProductPrice, HandleSubmitForm, ProductID, HandleProductID }) {
    return (
        //New -> added ProductID, HandleProductID
        <Form onSubmit={HandleSubmitForm}>
            <FormGroup className="row">
                <Label for="ProductID" sm={2} >Product ID</Label>
                <Col sm={4}>
                    <Input type="number" name="ProductID" id="ProductID" value={ProductID} onChange={HandleProductID} />
                </Col>
            </FormGroup>
            <FormGroup className="row">
                <Label for="ProductName" sm={2} >Product Name</Label>
                <Col sm={4}>
                    <Input type="text" name="ProductName" id="ProductName" value={ProductName} onChange={HandleProductName} />
                </Col>
            </FormGroup>
            <FormGroup className="row">
                <Label for="ProductPrice" sm={2} >Product Price</Label>
                <Col sm={4}>
                    <Input type="number" name="ProductPrice" id="ProductPrice" value={ProductPrice} onChange={HandleProductPrice} />
                </Col>
            </FormGroup>
            <Button type="submit" color='info'>Submit</Button>
        </Form>

    )
}

export default MyForm