import { ADD_TO_CART, DELETE_FROM_CART, GET_COURSE_LIST } from "./actions"
import { get } from "axios"

const addToCart = id => ({
    type: ADD_TO_CART, 
    id
})

const deleteFromCart = id => ({
    type: DELETE_FROM_CART, 
    id
})

const getCourseList = () => dispatch => {
    get('http://localhost:5000/cupcakes')
    .then(response => {
        return dispatch({
            type: GET_COURSE_LIST, 
            Courses: response.data
        })
    })
}

export { addToCart, deleteFromCart, getCourseList}