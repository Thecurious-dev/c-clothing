import Header from "./Components/Header";
import { GlobalStyles } from "./GlobalStyles";
import { Routes,Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Shop from './Pages/Shop';



function App() {
  return (
    <div >
      <GlobalStyles/>
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shop />} />

      </Routes>
    </div>
  );
}

export default App;
