import { Routes, Route } from "react-router-dom";
import HomeView from "../views/HomeView";
import ContactDetailsView from "../views/ContactDetailsView";
import AddContactView from "../views/AddContactView";
import EditContactView from "../views/EditContactView";
import HeaderNav from "../components/HeaderNav";

function AppRouter() {
  return (
    <div>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contact/:id" element={<ContactDetailsView />} />
        <Route path="/add" element={<AddContactView />} />
        <Route path="/edit/:id" element={<EditContactView />} />
      </Routes>
    </div>
  );
}

export default AppRouter;