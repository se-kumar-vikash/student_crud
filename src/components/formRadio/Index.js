import React from 'react'
import { Form } from 'react-bootstrap'
import { gender } from '../../data'

export default function InputRadio({ handleChange, value }) {
    return (
        <>
            <Form.Group className="mb-3" >
                <Form.Label>{"Gender"}</Form.Label>
                {gender?.map((gender, i) => (
                    <Form.Check
                        inline
                        label={gender.name}
                        name="gender"
                        type={"radio"}
                        // defaultChecked={"Male"}
                        // checked={gender==value}
                        value={gender.name}
                        onChange={handleChange}
                    />
                ))}


            </Form.Group>

        </>
    )
}
