import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import InputField from '../components/formInputs/Index'
import InputTextarea from '../components/formTextarea/Index'
import InputSelect from '../components/formSelect/Index'
import InputRadio from '../components/formRadio/Index'
import { useDispatch } from 'react-redux'
import { addStudentData, addStudentWithLocalStorage } from '../services/actions/action'
import { useNavigate } from 'react-router-dom'


function StudentRegistration({ }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const studentInfo = {
        first_name: "",
        last_name: "",
        father_name: "",
        email: "",
        mobile_number: "",
        dob: "",
        gender: "",
        address: "",
        country: "",
        photos: []
    }
    const [formData, setFormData] = useState(studentInfo);
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleProfilePhotoChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({
            ...formData,
            photos: [...formData.photos, ...files],
        });
    };
    const storeImagesLocally = (images) => {
        const storedPaths = images.map((image) => {
            return URL.createObjectURL(image);
        });
        return storedPaths;
    };
    const submitForm = async (e) => {
        e.preventDefault();
        const photos = storeImagesLocally(formData.photos);
        dispatch(addStudentData({formData, photos}  ));
        navigate("/");
    }



    return (
        <>
            <Container>
                <h1 className='text-center' >Add Students</h1>
                <Form onSubmit={(e) => submitForm(e)}>
                    <InputField type={"text"} handleChange={handleInputChange} name="first_name" placeholder={"Enter First Name"} label={"First Name"} />
                    <InputField type={"text"} handleChange={handleInputChange} name="last_name" placeholder={"Enter Last Name"} label={"Last Name"} />
                    <InputField type={"text"} handleChange={handleInputChange} name="father_name" placeholder={"Enter Father Name"} label={"Father Name"} />
                    <InputField type={"email"} handleChange={handleInputChange} name="email" placeholder={"Enter Email Id"} label={"Email Id"} />
                    <InputField type={"number"} minlength="10" handleChange={handleInputChange} name="mobile_number" placeholder={"Enter Mobile Number"} label={"Mobile Number"} />
                    <InputField type={"date"} handleChange={handleInputChange} name="dob" placeholder={"Enter Date of Birth"} label={"Date of Birth"} />
                    <InputRadio name="gender" handleChange={handleInputChange} />
                    <InputTextarea name="address" handleChange={handleInputChange} />
                    <InputSelect name="country" handleChange={handleInputChange} />
                    <Form.Group className="mb-3" >
                        <Form.Label>{"Photos"}</Form.Label>
                        <Form.Control type={"file"} name={"photos"} required multiple onChange={handleProfilePhotoChange} />
                    </Form.Group>
                    <input type='submit' variant="primary" value={"Submit"} className='btn btn-primary btn-lg'></input>

                </Form>
            </Container>
        </>
    )
}

export default StudentRegistration
