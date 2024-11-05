import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../utils/data-access-layer";
import { logout, updateUserData } from "../redux/actions/authActions";
import { getToken } from "../redux/store/selectors";

const useUserData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return setError({ status: 404, message: "That page doesn't exist..." });
    }
    const fetchUserData = async () => {
      const userResponse = await getUser(token);

      if (!userResponse.ok) {
        dispatch(logout());
        return setError(userResponse);
      }

      const userData = userResponse.userData;
      dispatch(updateUserData(userData));
    };
    fetchUserData();
    setLoading(false);

    return () => {
      setError(null);
      setLoading(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error };
};

export default useUserData;
