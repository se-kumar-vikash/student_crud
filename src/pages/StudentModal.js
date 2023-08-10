import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import StudentRegistration from './StudentRegistration'
import InputField from '../components/formInputs/Index'
import InputSelect from '../components/formSelect/Index'
import InputTextarea from '../components/formTextarea/Index'
import InputRadio from '../components/formRadio/Index'
import { useDispatch } from 'react-redux'
import { editStudentData } from '../services/actions/action'

function StudentModal({ show, hide, student }) {
  const dispatch = useDispatch();


  const [formEditData, setFormEditData] = useState({
    id: student?.id,
    first_name: student?.formData.first_name,
    last_name: student?.formData.last_name,
    father_name: student?.formData.father_name,
    email: student?.formData.email,
    mobile_number: student?.formData.mobile_number,
    dob: student?.formData.dob,
    gender: student?.formData.gender,
    address: student?.formData.address,
    country: student?.formData.country,
    photos: []
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormEditData({ ...formEditData, [name]: value })
  }

  const handleEditUpdate = (e) => {
    e.preventDefault();
    dispatch(editStudentData(student.id, formEditData));
    hide();
  };

  return (
    <>
      <Modal show={show} onHide={hide} size='lg' >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Edit Student Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleEditUpdate(e)}>

            <InputField type={"text"} value={student ? student.formData.last_name : ""} handleChange={(e) => handleInputChange(e)} name="first_name" placeholder={"Enter First Name"} label={"First Name"} />
            <InputField type={"text"} value={student ? student.formData.last_name : ""} handleChange={(e) => { handleInputChange(e) }} name="last_name" placeholder={"Enter Last Name"} label={"Last Name"} />
            <InputField type={"text"} value={student ? student.formData.father_name : ""} handleChange={(e) => { handleInputChange(e) }} name="father_name" placeholder={"Enter Father Name"} label={"Father Name"} />
            <InputField type={"email"} value={student ? student.formData.email : ""} handleChange={(e) => { handleInputChange(e) }} name="email" placeholder={"Enter Email Id"} label={"Email Id"} />
            <InputField type={"number"} value={student ? student.formData.mobile_number : ""} handleChange={(e) => { handleInputChange(e) }} name="mobile_number" placeholder={"Enter Mobile Number"} label={"Mobile Number"} />
            <InputField type={"date"} value={student ? student.formData.dob : ""} handleChange={(e) => { handleInputChange(e) }} name="dob" placeholder={"Enter Date of Birth"} label={"Date of Birth"} />
            <InputRadio name="gender" value={student ? student.formData.gender : ""} handleChange={(e) => { handleInputChange(e) }} />
            <InputTextarea name="address" value={student ? student.formData.address : ""} handleChange={(e) => { handleInputChange(e) }} />
            <InputSelect name="country" value={student ? student.formData.country : ""} handleChange={(e) => { handleInputChange(e) }} />

            <input type='submit' variant="primary" value={"Update"} className='btn btn-primary btn-lg'></input>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default StudentModal
