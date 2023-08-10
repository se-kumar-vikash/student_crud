import React from 'react'
import { Form } from 'react-bootstrap'
import { country } from '../../data'
export default function InputSelect({name,handleChange, value}) {
    return (
        <>
           <Form.Group className="mb-3" >
            <Form.Label>{"Select Country"}</Form.Label>
            <Form.Select aria-label="Select Country" name={name} value={value} onChange={handleChange}>
                <option value="">Select Country</option>
                {country?.map((country,i)=>(
                <option value={country.name} key={i}>{country.name}</option>
                ))}
                
            </Form.Select>
            </Form.Group>
        </>
    )
}
