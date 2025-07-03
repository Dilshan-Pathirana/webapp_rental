import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🔧 Admin Panel</h2>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Dashboard</Link></li>
        <li><Link to="/add-item" style={styles.link}>Add Item</Link></li>
        <li><Link to="/manage-requests" style={styles.link}>Manage Requests</Link></li>
        <li><Link to="/reports" style={styles.link}>Reports</Link></li>
        <li><Link to="/invoices" style={styles.link}>Invoices</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    padding: "1rem 2rem",
  },
  logo: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "1.2rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default AdminNavbar;
