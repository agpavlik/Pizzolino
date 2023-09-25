import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-around border-b border-stone-400 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="font-semibold tracking-[5px]">
        Pizzolino
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
