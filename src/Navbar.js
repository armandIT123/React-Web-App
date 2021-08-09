import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Echipa Formular</h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/view-all">View All</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Add Client
        </Link>
        <Link to="/statistics">Statistics</Link>
      </div>
    </nav>
  );
};

export default Navbar;
