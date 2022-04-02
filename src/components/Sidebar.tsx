import { Link } from "react-router-dom";
import "../scss/Sidebar.scss";
export const Sidebar = () => (
  <nav className="sidebar">
    <h1>Components</h1>
    <ol>
      <li>
        <Link to="/react">Say hello to React!</Link>
      </li>
      <li>
        <Link to="/">Say hello to the World!</Link>
      </li>
      <li>
        <Link to="/components/dropdown">Dropdowns</Link>
      </li>
    </ol>
  </nav>
);
