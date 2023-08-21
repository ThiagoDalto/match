/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "../../assets/m3.png";
import { HEADER } from "./HeaderStyle";

// eslint-disable-next-line no-unused-vars
function Header({filteredProducts, setFilteredProducts, products }) {

  const [inputSearch, setInputSearch] = useState('')
  function showProducts () {
    const filteredSearched = products.filter((product) => product.name.toLowerCase().includes(inputSearch.toLowerCase()) || product.category.toLowerCase().includes(inputSearch.toLowerCase())) 
    setFilteredProducts(
      filteredSearched
    )
  
  }

  return (
    <HEADER>
      
      <figure>
        <img src={logo} alt="" />
      </figure>
      <div>
        <input
          type="text"
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
          placeholder="Digitar Pesquisa"
        />
        <button onClick={showProducts}>Pesquisar</button>
      </div>
    </HEADER>
  );
}

export default Header;
