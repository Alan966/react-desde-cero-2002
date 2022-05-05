const Logo = () => {
    return (
        <img className="logo" alt="Logo" src="./img/logo.png" />
    )
}

//Reglas JSX 1: Solo se puede renderizar o almacenar 1 elemento
//Regla JSX 2: Usar fragmentos para almacenar varios elementos

const saludo = () => {
    retturn (
        <>
            <h1>Holaaa</h1>
            <img src="./img.png" alt="logo saludo" />
        </>
    )
}

export { Logo, saludo };

//Regla JSX 3: Toda etiqueta debe cerrarse 

const miClase = "container"
const MiLogo = <img src="logo.svg" alt="Logo Principal"></img>

const divVacio = <div className={miClase} id="main"></div>

//Regla JSX 4: Todo atributo compuesto se convierte en CamelCase
const miBoton = <buttom id="boton1" onClick={Logo}>Click Me!!</buttom>