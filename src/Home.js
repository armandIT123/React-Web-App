import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
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
  );
};

export default Home;
