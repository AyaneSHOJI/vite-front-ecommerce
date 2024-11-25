import Button from 'common/design-system/Button/';
import AddCartButton from 'features/cart/add-cart-product/ui/AddCartButton/AddCartButton';

function App() {
  const addToCart = (): void => {
    console.log('call API ^pir akpiter le produit au panier côté seveur');
  };

  return <AddCartButton addToCart={addToCart} />;
}

export default App;
