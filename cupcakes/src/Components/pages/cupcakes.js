// import { connect } from "react-redux"
import ConjuntoDeCupcakes from "../Moleculas/conjuntoCupcakes";

const Cupcakes = ({ title, courses}) => {


   return(
    <div className="ed-grid ">
            <h1>{
                title
            }</h1>
        <section className="contend_cupcakes">
           {
               <ConjuntoDeCupcakes 
               />
           }
        </section>
    </div>
   )
}

// const mapStateToProps = state => ({
//     courses: state.coursesReducer.courses
// })

// export default connect(mapStateToProps, {})(Cupcakes)

export default Cupcakes;