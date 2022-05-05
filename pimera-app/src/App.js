import Cupcake from "./Cupcake";
import "./App.css";

const App = () => {
  return (
    <div className="contend_cupcakes">
      <Cupcake 
      color="Crema" 
      sabor="Vainilla" 
      img="https://juegoscocinarpasteleria.org/wp-content/uploads/2021/02/Receta-perfecta-para-cupcakes-de-vainilla-VIDEO.jpg"
      />
      <Cupcake 
      color="Vermelho" 
      sabor="Chocolate"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIVvYcCVC8yeRrbjZa4c3vn_3XtYp20pJoAmsrhQuBpOrSpPiOZR9uwWxvv213E3o0j4&usqp=CAU"
      />
      <Cupcake 
      color="Crema" 
      sabor="Vainilla" 
      img="https://juegoscocinarpasteleria.org/wp-content/uploads/2021/02/Receta-perfecta-para-cupcakes-de-vainilla-VIDEO.jpg"
      />
    </div>
  );
}

export default App;
