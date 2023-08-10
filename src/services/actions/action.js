import { ADD_STUDENT_DATA, EDIT_STUDENT_DATA, REMOVE_STUDENT_DATA } from '../constant'

export const addStudentData =(data)=>{
    // console.log("action",data)
    return {
        type:ADD_STUDENT_DATA,
        data:data
    }
}

export const editStudentData = (studentId, updatedData) => ({
    type: EDIT_STUDENT_DATA,
    data: {studentId, updatedData},
  });

  export const removeStudentData = (data) => ({
    type: REMOVE_STUDENT_DATA,
    data: data,
  });



