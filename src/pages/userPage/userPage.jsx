import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditUserName from "./components/editUserName";
import { useSelector } from "react-redux";

const UserPage = () => {
  const [isEditName, setIsEditName] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const { firstName, lastName } = useSelector((state) => state.auth.userData);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate("/");
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditName = () => {
    setIsEditName(true);
  };

  if (loading) return <p>Loading...</p>;
  return (
    <main className="main bg-dark">
      {isEditName ? (
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
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default UserPage;
