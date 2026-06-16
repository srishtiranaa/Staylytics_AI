import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px 30px",
        display: "flex",
        gap: "20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;