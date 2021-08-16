import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Kanban</Link>
        </li>

        <li>
          <Link to="/kumospace">Kumospace</Link>
        </li>

        <li>
          <Link to="/profile">My profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
