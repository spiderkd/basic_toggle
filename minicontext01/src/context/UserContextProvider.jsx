/* eslint-disable react/prop-types */
import { useState } from "react";
import UserContext from "./userContext";

const UserContextProvide = ({ children }) => {
  const [user, setuser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvide;
