import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";

/*
const App = () => {
  const { hasLoaded, activeConversation, openHandler, closeHandler } = useHubspotChat(<portalidhere>);
  return (
    <div>
      hi {hasLoaded ? 'yes': 'no'} 
      conversation: { activeConversation } 
      <button onClick={openHandler}>click me to open</button>
      <button onClick={closeHandler}>click me to close</button>
    </div>)
}

const rootElement = document.getElementById("root");
*/

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);


  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <>
    
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      
      { filteredProducts.length > 0 ? (
        <ProductsList
          products={filteredProducts}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        />
      ) : (
        <ProductsList
          products={products}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        />
      ) }
    </>
  );
}

export default App;
