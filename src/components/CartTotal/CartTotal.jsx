/* eslint-disable react/prop-types */
import {ContainerTotal} from './CartTotalStyle'

function CartTotal({ currentSale, setCurrentSale }){
     
    function removeAll(){
        const removeAllProducts = currentSale.filter((product) => !product )
      
            return setCurrentSale(removeAllProducts)

        
    } 
    
    return (

        <ContainerTotal className="cartTotal">
            <div className="suport">
                <span className="total">Total:</span>
                <span className="soma">R${currentSale.reduce((acc, { price }) => acc + price, 0).toFixed(2)}</span>
            </div>
            <button className="removerBtn" onClick={removeAll} >Remover Todos</button>
        </ContainerTotal>
    )
}

export default CartTotal;