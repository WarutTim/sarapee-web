import React, { useState } from "react";
import { Navbar, Image, Button } from "react-bootstrap";

import Logo from "./img/Logo.png";
import Datetime from "../Datetime/Datetime";

import { auth } from "../../Config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async () => {
    await signOut(auth);
    if (user) {
      navigate("/");
    }
  };

  let button;
  if (user) {
    button = <Button onClick={logout}>ออกจากระบบ</Button>;
  }

  return (
    <Navbar bg="light" className="p-2">
      <Navbar.Brand>
        <Datetime />
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>User : {user?.email}</Navbar.Text>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Image src={Logo} style={{ width: "10rem" }}></Image>

        {button}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
