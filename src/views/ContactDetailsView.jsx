import { useEffect, useState } from "react";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { Link, useNavigate, useParams } from "react-router-dom";
import db from "../db";

function ContactDetailsView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, "contacts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setContact({
          id: docSnap.id,
          ...docSnap.data()
        });
      } else {
        console.log("Contact not found");
      }
    };

    fetchContact();
  }, [id]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmed) return;

    await deleteDoc(doc(db, "contacts", id));
    navigate("/");
  };

  if (!contact) {
    return <p style={{ padding: "0 24px" }}>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <h1>Contact Details</h1>

      <p>
        <strong>First Name:</strong> {contact.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {contact.lastName}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>

      <div style={styles.actions}>
        <Link to={`/edit/${contact.id}`}>
          <button style={styles.button}>Edit</button>
        </Link>

        <button onClick={handleDelete} style={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "0 24px 24px"
  },
  actions: {
    marginTop: "20px",
    display: "flex",
    gap: "12px"
  },
  button: {
    padding: "10px 16px",
    cursor: "pointer"
  },
  deleteButton: {
    padding: "10px 16px",
    cursor: "pointer"
  }
};

export default ContactDetailsView;