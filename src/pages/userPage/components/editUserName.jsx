import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../redux/actions/authActions";
import { useState } from "react";
import { updateUser } from "../../../utils/data-access-layer";

const EditUserName = ({ setIsEditName }) => {
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.token);
  const { firstName, lastName } = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  const handleCancel = () => {
    setIsEditName(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstNameInput =
      e.currentTarget.elements.namedItem("firstName").value;
    const lastNameInput = e.currentTarget.elements.namedItem("lastName").value;
    const newFirstName = firstNameInput || firstName;
    const newLastName = lastNameInput || lastName;

    const response = await updateUser(token, newFirstName, newLastName);

    if (!response.ok) return setError(response);

    dispatch(
      updateUserData({ firstName: newFirstName, lastName: newLastName })
    );

    setIsEditName(false);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
      </h1>
      <form className="edit-name" onSubmit={handleSubmit}>
        <div className="edit-wrapper">
          <div className="input-wrapper">
            <label htmlFor="firstName" className="only-sr">
              firstName
            </label>
            <input type="text" id="firstName" placeholder={firstName} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName" className="only-sr">
              lastName
            </label>
            <input type="lastName" id="lastName" placeholder={lastName} />
          </div>
        </div>
        <div className="edit-wrapper">
          <button type="submit">Save</button>
          <button onClick={handleCancel} type="button">
            Cancel
          </button>
        </div>
      </form>
      {error && (
        <>
          <p className="error">
            {(error.status || 520) +
              " - " +
              (error.message || error.statusText || "Unknown error")}
          </p>
        </>
      )}
    </div>
  );
};

EditUserName.propTypes = {
  setIsEditName: PropTypes.func.isRequired,
};

export default EditUserName;
