import PropTypes from "prop-types";

const EditUserName = ({ userData, setIsEditName, setUserData }) => {
  const { firstName, lastName } = userData;

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
    console.log(newFirstName, newLastName);
    setUserData({ firstName: newFirstName, lastName: newLastName });
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: newFirstName,
        lastName: newLastName,
      }),
    });
    await response.json();
    setIsEditName(false);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
      </h1>
      <form className="edit-name" onSubmit={handleSubmit}>
        <div className="left-wrapper">
          <div className="input-wrapper">
            <label htmlFor="firstName" className="sr-only">
              firstName
            </label>
            <input type="text" id="firstName" placeholder={firstName} />
          </div>
          <button type="submit">Save</button>
        </div>
        <div className="right-wrapper">
          <div className="input-wrapper">
            <label htmlFor="lastName" className="sr-only">
              lastName
            </label>
            <input type="lastName" id="lastName" placeholder={lastName} />
          </div>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

EditUserName.propTypes = {
  userData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  setIsEditName: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default EditUserName;
