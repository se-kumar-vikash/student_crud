import React from 'react'
import { Form } from 'react-bootstrap'

export default function InputField({ name, type="text", placeholder, label, handleChange, ...props}) {
    // console.log(value)
    return (
        <>
            <Form.Group className="mb-3" >
            <Form.Label>{label}</Form.Label>
                <Form.Control type={type} name={name} required onChange={handleChange} placeholder={placeholder} {...props} />
            </Form.Group>
        </>
    )
}
