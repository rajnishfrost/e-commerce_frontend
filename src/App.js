import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import MensClothing from "./components/MensClothing";
import WomensClothing from "./components/WomensClothing";
import Jeweleries from "./components/Jeweleries";
import Electronics from "./components/Electronics";
import Footer from "./components/Footer"
import Cart from "./components/Cart";
import PaymentSuccessful from "./components/PaymentSuccessful";
import SeverNotRes from "./components/SeverNotRes";
import BuyOne from "./components/BuyOne";
import Skin from "./components/Skin";
import Hdecoration from "./components/Hdecoration";
import Laptop from "./components/Laptop";
import Smartphones from "./components/Smartphones";
import SignUp from "./components/SignUp";
import Registered from "./components/Registered";
import LogIn from "./components/LogIn";
import Ordered from "./components/Ordered";

function App() {
  return (
    <div  >
     <Router>
      <NavBar/>
      <Routes>
        <Route exact path = "/" element={<>  <Product/> </>}/>
        <Route exact path = "/mensClothing" element={<> <MensClothing/> </>}/>
        <Route exact path = "/womensClothing" element={<><WomensClothing/> </>}/>
        <Route exact path = "/jeweleries" element={<> <Jeweleries/> </>}/>
        <Route exact path = "/electronics" element={<> <Electronics/> </>}/>
        <Route exact path = "/cart" element={<> <Cart/> </>}/>
        <Route exact path="/paymentsuccessful" element={<PaymentSuccessful/>} />
        <Route exact path="/servernotres" element={<SeverNotRes/>} />
        <Route exact path="/buyone" element={<BuyOne/>} />
        <Route exact path="/skin" element={<Skin/>} />
        <Route exact path="/hdecoration" element={<Hdecoration/>} />
        <Route exact path="/laptop" element={<Laptop/>} />
        <Route exact path="/smartphones" element={<Smartphones/>} />
        <Route exact path="/signUp" element={<SignUp/>} />
        <Route exact path="/registered" element={<Registered/>} />
        <Route exact path="/logIn" element={<LogIn/>} />
        <Route exact path="/order" element={<Ordered/>} />
      </Routes>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
