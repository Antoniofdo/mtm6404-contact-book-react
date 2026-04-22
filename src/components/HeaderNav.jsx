import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>Contact Book</h2>
      <div>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/add" style={styles.link}>
          Add Contact
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "#f4f4f4",
    marginBottom: "24px"
  },
  title: {
    margin: 0
  },
  link: {
    marginLeft: "16px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold"
  }
};

export default HeaderNav;