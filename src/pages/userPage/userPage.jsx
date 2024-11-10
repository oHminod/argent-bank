import AccountCard from "./components/accountCard";
import useUserData from "../../hooks/useUserData";
import ErrorPage from "../errorPage";
import UserName from "./components/userName";
import { accounts } from "../../utils/data";

/**
 * Renders the user page with user data and account information.
 *
 * @function
 * @name UserPage
 * @returns {JSX.Element} The rendered user page component.
 */
const UserPage = () => {
  const { loading, error } = useUserData();

  if (loading)
    return (
      <main className="center-wrapper">
        <p>Loading...</p>
      </main>
    );
  if (error) return <ErrorPage error={error} />;

  return (
    <main className="main bg-dark">
      <UserName />
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <AccountCard key={index} accountData={account} />
      ))}
    </main>
  );
};

export default UserPage;
