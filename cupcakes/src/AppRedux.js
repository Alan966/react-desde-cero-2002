import AppRoutes from "./AppRoutes";
import CartProvider from "./Components/Context/Cart/CartProvider";
import CoursesProvider from "./Components/Context/coursesProvider";


const AppRedux = ()  =>{
  return (
    <CoursesProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </CoursesProvider>
  );
}

export default AppRedux;
