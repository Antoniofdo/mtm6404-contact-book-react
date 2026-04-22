import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import db from "../db";
import ContactForm from "../components/ContactForm";

function EditContactView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, "contacts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFormData(docSnap.data());
      } else {
        console.log("Contact not found");
      }
    };

    fetchContact();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "contacts", id);
    await updateDoc(docRef, formData);

    navigate(`/contact/${id}`);
  };

  return (
    <div style={styles.container}>
      <h1>Edit Contact</h1>
      <ContactForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Update Contact"
      />
    </div>
  );
}

const styles = {
  container: {
    padding: "0 24px 24px"
  }
};

export default EditContactView;