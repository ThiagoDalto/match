import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";

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
  console.log(products);

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
