import React, { useState } from "react";
import Logo from "../assets/logoPe.png";
import styles from "./styles";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Lógica de pesquisa
    console.log("Pesquisando por:", searchQuery);
    setSearchQuery("");
  };

  return (
    <nav style={styles.navbar}>
      <div>
        <img src={Logo} alt="Logo da Empresa" style={styles.logo} />
      </div>
      <div style={styles.searchForm}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Digite sua pesquisa..."
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>
            Pesquisar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
