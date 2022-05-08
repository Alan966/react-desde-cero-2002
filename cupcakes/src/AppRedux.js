import Home from "./Components/pages/home";
import Header from "./Components/sections/Header";
import Cupcakes from "./Components/pages/cupcakes";
import AboutUs from "./Components/pages/abouUs";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const AppRedux = ()  =>{
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cupcakes" element={<Cupcakes 
              title={"Pagina de Cupcakes"}
              url={"http://localhost:5000/cupcakes"}
          />} />
          <Route path="/nosotros" element={<AboutUs/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRedux;
