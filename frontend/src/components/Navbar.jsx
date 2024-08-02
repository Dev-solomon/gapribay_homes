import { NavLink } from "react-router-dom";
// icons
import { MdHomeWork } from "react-icons/md";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { MdAddHome } from "react-icons/md";
import { useAuth0 } from '@auth0/auth0-react';
import AddPropertyModal from "./AddPropertyModal";
import { useState } from "react";
import useAuthCheck from "../hooks/useAuthCheck";

const Navbar = ({ containerStyles }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };
  const { isAuthenticated, user } = useAuth0();
  // console.log(user);
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1"
            : "flexCenter gap-x-1 rounded-full px-2 py-1"
        }
      >
        <MdHomeWork />
        <div>Home</div>
      </NavLink>
      <NavLink
        to={"/listing"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1"
            : "flexCenter gap-x-1 rounded-full px-2 py-1"
        }
      >
        <RiCheckboxMultipleBlankFill />
        <div>listing</div>
      </NavLink>
      <NavLink
        to={"mailto:gapribay@gmail.com"}
        className="flexCenter gap-x-1 rounded-full px-2 py-1"
      >
        <MdPermContactCalendar />
        <div>contact</div>
      </NavLink>
      {
        isAuthenticated && user.email === 'gapribay@gmail.com'
        ?
        (<div
        onClick={handleAddPropertyClick}
        className="cursor-pointer flexCenter gap-x-1 rounded-full px-2 py-1"
      >
        <MdAddHome />
        <div>add property</div>
      </div>)
      : null
      }
     
      <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
    </nav>
  );
};

export default Navbar;
