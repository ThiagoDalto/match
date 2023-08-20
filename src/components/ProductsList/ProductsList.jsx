/* eslint-disable react/prop-types */
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import CartTotal from '../CartTotal/CartTotal'
import {Main} from './MainStyle'
function ProductsList({ products, handleClick, setCurrentSale, currentSale, cartTotal }) {
   
  return (
    <Main>
      <Product products={products} handleClick={handleClick} setCurrentSale={setCurrentSale} currentSale={currentSale} />
     <div> <Cart currentSale={currentSale} cartTotal={cartTotal} setCurrentSale={setCurrentSale}
    /> 
  <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} /></div>
    </Main>
  );
}

export default ProductsList;
