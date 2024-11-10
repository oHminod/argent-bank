const apiURL = "http://localhost:3001/api/v1";

/**
 * Signs in a user with the provided email and password.
 *
 * @async
 * @function
 * @name signinUser
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} The response object containing a token or an error message.
 */
export const signinUser = async (email, password) => {
  try {
    const response = await fetch(`${apiURL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) return response;

    const data = await response.json();
    const token = data.body.token;

    return { ok: response.ok, token };
  } catch (error) {
    console.error("signinUser error:", error);
    return String(error);
  }
};

/**
 * Fetches user data from the server.
 *
 * @async
 * @function
 * @name getUser
 * @param {string} token - The authentication token.
 * @returns {Promise<Object>} The response object containing user data or an error message.
 */
export const getUser = async (token) => {
  try {
    const response = await fetch(`${apiURL}/user/profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) return response;

    const data = await response.json();

    const userData = data.body;

    return { ok: response.ok, userData };
  } catch (error) {
    console.error("getUser error:", error);
    return String(error);
  }
};

/**
 * Updates user data on the server.
 *
 * @async
 * @function
 * @name updateUser
 * @param {string} token - The authentication token.
 * @param {string} newFirstName - The new first name of the user.
 * @param {string} newLastName - The new last name of the user.
 * @returns {Promise<Object>} The response object indicating success or failure.
 */
export const updateUser = async (token, newFirstName, newLastName) => {
  try {
    const response = await fetch(`${apiURL}/user/profile`, {
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

    if (!response.ok) return response;
    await response.json();

    return { ok: response.ok };
  } catch (error) {
    console.error("updateUser error:", error);
    return String(error);
  }
};
