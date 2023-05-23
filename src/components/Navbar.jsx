import { CartIcon } from "../icons";
import { useSelector } from "react-redux"; // we use this hook to access data from our slice

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  console.log(amount);
  return (
    <nav>
      <div className="nav-center">
        <h3>Kaufen</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
