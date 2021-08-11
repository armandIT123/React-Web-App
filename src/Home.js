import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");
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
      <div>
        <SearchBar placeholder="Search..." data={blogs} />
      </div>
    </div>
  );
};

export default Home;
