import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header cartItems={props.cartItems} />
      {props.children}
      <Footer />
    </div>
  );
}
