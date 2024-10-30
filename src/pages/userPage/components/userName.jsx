import { useState } from "react";
import { useSelector } from "react-redux";
import EditUserName from "./editUserName";

const UserName = () => {
  const [isEditName, setIsEditName] = useState(false);
  const { firstName, lastName } = useSelector((state) => state.auth.userData);

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
