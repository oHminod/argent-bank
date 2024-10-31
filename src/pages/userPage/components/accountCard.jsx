import PropTypes from "prop-types";

const AccountCard = ({ accountData }) => {
  const { title, amount, description } = accountData;

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

AccountCard.propTypes = {
  accountData: PropTypes.object.isRequired,
};

export default AccountCard;
