import { Route, Routes } from "react-router-dom";
import MyInfo from "./Pages/MyInfo";
import  UpdateInfo from "./Pages/UpdateInfo";
import MyComponent from "./Pages/MyComponent";

function App() {
  return(
    <Routes>
      <Route path="/" element={<MyComponent />} />
      <Route path="/update" element ={<UpdateInfo />}/>

    </Routes>
  );
}

export default App;
