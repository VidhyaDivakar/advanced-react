import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
    setSearch("");
  };
  return (
    <nav>
      <Link to="/">Home</Link>

      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes"
        />
      </form>

      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};
export default Navbar;