import AppRedux from "./AppRedux";
import "./styles/app.css"
// import { Provider } from "react-redux";
// import store from "./redux/store"; 
// import { getCourseList } from "./redux/actionCreators";
import { Provider } from "mobx-react";
// store.dispatch(getCourseList())
import CardStore from "./stores/CardStore";

const App = ()  =>{
  return (
    // <Provider store={store}>
   <Provider CardStore={CardStore}> 
      <AppRedux />
    </Provider>
  );
}

export default App;
