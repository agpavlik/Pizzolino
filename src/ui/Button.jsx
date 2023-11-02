import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-yellow-500 font-semibold uppercase tracking-wide text-stone-700 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-200 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4 ',
    small: base + ' px-3 py-2 md:px-4 py-2.5 text-xs',
    secondary:
      'px-4 text-sm py-2.5 md:px-6 md:py-3.5 inline-block focus:text-stone-700 rounded-full border-2 border-stone-400 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-400 focus:bg-stone-400 hover:text-stone-700 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 active:bg-yellow-200 disabled:cursor-not-allowed ',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
