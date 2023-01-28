import './App.css';
// import Toggle from "./components/toggle/Toggle";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";



function App() {

  return (
    <div className="App">
      {/* <Toggle /> */}
      <Intro />
      <About />
       <ProductList />
      <Contact /> 
    </div>
  );
}

export default App;
