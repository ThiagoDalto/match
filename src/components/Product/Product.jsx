/* eslint-disable react/prop-types */
import { Container, CardProduct } from "./ProductStyle";



function Product({ products, setCurrentSale, currentSale }) {
  let alternativeProducts = ["MatchBurger", "X-Match", "Big Match", "Fanta Guaraná", "Coca-Cola", "MatchShake Ovomaltine"];
  function handleClick(id) {
    const adicionaCart = products.find((product) => product.id === id);
    if (!currentSale.includes(adicionaCart)) {
      return setCurrentSale([...currentSale, adicionaCart]);
    }
  }
  return (
    <Container>
      {products.map((product) => (
        <CardProduct key={product.id}>
          <figure>
            <img src={product.img} alt={product.name} />
          </figure>
          <div>
              <h3>{alternativeProducts[product.id - 1]}</h3>
              <h5>{product.category}</h5>
              <h3 className="preco">R${product.price.toFixed(2)}</h3>
              <button onClick={() => handleClick(product.id)}>Adicionar</button>
          </div>
        </CardProduct>
      ))}
     
    </Container>
  );
}

export default Product;
