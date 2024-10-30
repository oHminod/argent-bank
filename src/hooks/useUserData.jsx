import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/data-access-layer";
import { logout, updateUserData } from "../redux/actions/authActions";

const useUserData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate("/");
    const fetchUserData = async () => {
      const userResponse = await getUser(token);

      if (!userResponse.ok) {
        dispatch(logout());
        setError(userResponse);
      } else {
        const userData = userResponse.userData;
        dispatch(updateUserData(userData));
      }
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
