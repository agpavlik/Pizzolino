import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type }) {
  const base =
    'inline-block rounded-full bg-yellow-500 font-semibold uppercase tracking-wide text-stone-700 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-200 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4 ',
    small: base + ' px-3 py-2 md:px-4 py-2.5 text-xs',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
