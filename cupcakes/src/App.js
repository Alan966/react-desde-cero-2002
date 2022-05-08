import AppRedux from "./AppRedux";
import "./styles/app.css"
import { Provider } from "react-redux";
import store from "./redux/store"; 
import { getCourseList } from "./redux/actionCreators";

store.dispatch(getCourseList())

const App = ()  =>{
  return (
    <Provider store={store}>
      <AppRedux />
    </Provider>
  );
}

export default App;
