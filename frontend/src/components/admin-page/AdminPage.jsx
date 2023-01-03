import React from "react";
import AdminMenu from "./AdminMenu";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
const AdminPage = () => {
  let { user } = useContext(AuthContext);
  return (
    <div>
      {user.is_superuser ? (
        <AdminMenu />
      ) : (
        <h1>You're not authorized to be in here!</h1>
      )}
    </div>
  );
};

export default AdminPage;
