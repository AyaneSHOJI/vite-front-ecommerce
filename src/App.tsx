import CartCount from 'features/cart/display-cart-count/ui/CartCount';
import RemoveCartButton from 'features/cart/remove-cart-product/ui/RemoveCartButton';

function App() {
  return (
    <div className='mt-3'>
      <CartCount cartCount={3} />
    </div>
  );
}

export default App;
