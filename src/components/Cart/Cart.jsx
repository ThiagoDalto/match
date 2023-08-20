/* eslint-disable react/prop-types */
import {Container} from './CartStyle'

function Cart({ currentSale, setCurrentSale }) {
  let alternativeProducts = ["matchBurger", "X-Match", "Big Match", "Fanta Guaraná", "Coca-Cola", "MatchShake Ovomaltine"];
   
    function handleClick(id){
      
        const removerProduct = currentSale.filter((product) => product.id !== id)
      
            return setCurrentSale(removerProduct)

        
    }
   
  return (
    <Container className="Container">
       <h2 className='carrinho'>Carrinho de compras</h2>
       
          {currentSale.length ? (
            currentSale.map((current) => (
              <div className='cardCart' key={current.id}>
                    <figure>
                        <img src={current.img} alt={current.name} />
                    </figure>
                    <div>
                        <h3 className='name'>{alternativeProducts[current.id - 1]}</h3>
                        <h2 className='category'>{current.category}</h2>
                    </div>
                    <button onClick={() => handleClick(current.id)}>Remover</button>
                </div>
                
              
            ))
            
          ) : (
            <div>
              <h3 className='message'>Sua sacola está vazia</h3>
              <h5 className='message'>Adicione itens</h5>
            </div>
          )}
      
      
    </Container>
  );
}

export default Cart;
