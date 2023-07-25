import About from "./component/About/About";
import Careers from "./component/Contact/Careers";
import Footer from "./component/Footer/Footer";
import HomePage from "./component/Home/HomePage";
import Navbar from "./component/Navbar/Navbar";
import { Route, BrowserRouter as Router ,Routes} from "react-router-dom";
function App() {
  return (
      <Router>
        <div> 
          <Navbar/>
        </div>
        <Routes>
          <Route exact
          path="/"
          element={
            <HomePage/>
          }
        ></Route>
        <Route exact
          path="/about"
          element={
            <About/>
          }
        ></Route>
        <Route exact
          path="/careers"
          element={
            <Careers/>
          }
        ></Route>
        </Routes>
        <Footer/>
      </Router>
      
  );
}

export default App;
