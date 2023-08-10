import { ADD_STUDENT_DATA, EDIT_STUDENT_DATA, REMOVE_STUDENT_DATA } from '../constant'
const initialState = {
    studentData: [],
    idCounter: 1
}
export default function studentData(state = initialState, action) {
    switch (action.type) {
        case ADD_STUDENT_DATA:
            // console.log("reducer", action)
            const newData = {
                id: state.idCounter,
                ...action.data,
            };
            return {
                ...state,
                studentData: [...state.studentData, newData],
                idCounter: state.idCounter + 1,

            };
        case EDIT_STUDENT_DATA:
            const { studentId, updatedData } = action.data;
            const updatedStudentData = state.studentData.map((student) =>
                student.id === studentId ? { ...student, ...updatedData } : studentData
            );
            return {
                ...state,
                studentData: updatedStudentData,
            };
        case REMOVE_STUDENT_DATA:
            // console.log("reducer", action.data)
            const filteredStudents = state.studentData.filter(
                (student) => student.id !== action.data
            );
            return {
                ...state,
                studentData: filteredStudents,
            };
        default:
            return state
    }


}




