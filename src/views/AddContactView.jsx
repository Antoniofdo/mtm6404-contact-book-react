import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import db from "../db";
import ContactForm from "../components/ContactForm";

function AddContactView() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "contacts"), formData);
    navigate(`/contact/${docRef.id}`);
  };

  return (
    <div style={styles.container}>
      <h1>Add Contact</h1>
      <ContactForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Add Contact"
      />
    </div>
  );
}

const styles = {
  container: {
    padding: "0 24px 24px"
  }
};

export default AddContactView;