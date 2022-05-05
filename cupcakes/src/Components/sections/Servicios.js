
import useFetch from "../hooks/useFetch";

const Servicios = ({url}) => {

    const [data, error] = useFetch(url)

    if(error){
        return <span>{JSON.stringify(error)}</span>
    }else if(!data){
        return <h1>No hay servicios</h1>
    }else{
        return(
            <div>
                {
                    data.map(({nombre, descripcion }) => {
                        return(
                            <div>
                                <h1>{nombre}</h1>
                                <p>{descripcion}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Servicios;