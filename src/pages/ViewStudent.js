import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import StudentModal from './StudentModal'
import { useDispatch, useSelector } from 'react-redux';
import { addStudentData, fetchStudentData, fetchStudentsData, removeStudentData } from '../services/actions/action';

function ViewStudent() {
  const [show, setShow] = useState(false);

  const[editData, setEditData] = useState();
  const openEditForm = (data) =>{
    // console.log("editform",data);
    setShow(true);
    setEditData(data);
  }
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentData);
// console.log(students)
  


const deleteStudentData=(id) => {
  // console.log(id)
  const confirmBox = window.confirm(
    "Do you really want to delete?"
  )
  if (confirmBox === true) {
    dispatch(removeStudentData(id));
  }
}

  return (
    <>
    <Container>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Father Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Country</th>
            <th>Photos</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {students ? students.studentData.map((student, i) => (
            <tr key={i}>
              <td>{i+1}</td>
               <td>{student.formData.first_name}</td>
              <td>{student.formData.last_name}</td>
              <td>{student.formData.father_name}</td>
              <td>{student.formData.email}</td>
              <td>{student.formData.mobile_number}</td>
              <td>{student.formData.dob}</td>
              <td>{student.formData.gender}</td>
              <td>{student.formData.address}</td>
              <td>{student.formData.country}</td> 
              <td>{student.photos?.map((photo) => (
                <img style={{ width: '100px', height: '100px' }} src={photo} />
              ))}</td>
              <Button onClick={()=>openEditForm(student)}>Edit</Button>
              <Button onClick={()=>deleteStudentData(student.id)}>Delete</Button>
            </tr>
          )) : ""}



        </tbody>
      </Table>
      <StudentModal hide={() => setShow(false)} show={show} student={editData} />
      </Container>
    </>
  )
}

export default ViewStudent
