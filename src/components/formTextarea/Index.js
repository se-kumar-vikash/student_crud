import React from 'react'
import { Form } from 'react-bootstrap'

export default function InputTextarea({ type, placeholder, label, name, handleChange, value }) {
    return (
        <>
            <Form.Group className="mb-3" >
                <Form.Label>{"Address"}</Form.Label>
                <Form.Control as="textarea" rows={3} required placeholder='Enter Address' value={value} name={name} onChange={handleChange} />
            </Form.Group>
        </>
    )
}
