import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="border-b border-stone-400  bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="font-semibold tracking-[5px]">
        Pizzolino
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
