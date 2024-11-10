import PropTypes from "prop-types";

/**
 * Renders an account card with account information.
 *
 * @function
 * @name AccountCard
 * @param {Object} props - The component props.
 * @param {Object} props.accountData - The account data.
 * @param {string} props.accountData.title - The title of the account.
 * @param {string} props.accountData.amount - The amount in the account.
 * @param {string} props.accountData.description - The description of the account.
 * @returns {JSX.Element} The rendered account card component.
 */
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
  accountData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default AccountCard;
