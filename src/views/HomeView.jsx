import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../db";
import SearchBar from "../components/SearchBar";
import ContactList from "../components/ContactList";

function HomeView() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "contacts"), (querySnapshot) => {
      const contactsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      contactsData.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );

      setContacts(contactsData);
    });

    return () => unsubscribe();
  }, []);

  const filteredContacts = contacts.filter((contact) => {
    const searchValue = search.toLowerCase();
    return (
      contact.firstName.toLowerCase().includes(searchValue) ||
      contact.lastName.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div style={styles.container}>
      <h1>All Contacts</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

const styles = {
  container: {
    padding: "0 24px 24px"
  }
};

export default HomeView;
