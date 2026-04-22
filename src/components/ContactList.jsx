import { Link } from "react-router-dom";

function ContactList({ contacts }) {
  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul style={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} style={styles.item}>
          <Link to={`/contact/${contact.id}`} style={styles.link}>
            {contact.firstName} {contact.lastName}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    padding: "12px 0",
    borderBottom: "1px solid #ddd"
  },
  link: {
    textDecoration: "none",
    color: "#0077cc",
    fontWeight: "500"
  }
};

export default ContactList;