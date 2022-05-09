import CoursesContext from "./CoursesContext"
import useFetch from "../hooks/useFetch"
const CoursesProvider = ({children}) => {


const [data , error] =  useFetch("http://localhost:5000/cupcakes")

const state = {
    courses: data ? data : []
}

return(
    <CoursesContext.Provider value={state}>
        {
            children
        }
    </CoursesContext.Provider>
)
} 

export default CoursesProvider