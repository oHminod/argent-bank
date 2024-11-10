import { useState } from "react";
import { useSelector } from "react-redux";
import EditUserName from "./editUserName";
import { getUserData } from "../../../redux/store/selectors";

/**
 * Renders the user's name with an option to edit it.
 *
 * @function
 * @name UserName
 * @returns {JSX.Element} The rendered user name component.
 */
const UserName = () => {
  const [isEditName, setIsEditName] = useState(false);
  const { firstName, lastName } = useSelector(getUserData);

  const handleEditName = () => {
    setIsEditName(true);
  };
  return isEditName ? (
    <EditUserName setIsEditName={setIsEditName} />
  ) : (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName + " " + lastName}!
      </h1>
      <button className="edit-button" onClick={handleEditName}>
        Edit Name
      </button>
    </div>
  );
};

export default UserName;
