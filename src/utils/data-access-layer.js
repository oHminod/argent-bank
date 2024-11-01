export const signinUser = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
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
    return error;
  }
};

export const getUser = async (token) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
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
    return error;
  }
};

export const updateUser = async (token, newFirstName, newLastName) => {
  try {
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

    if (!response.ok) return response;
    await response.json();

    return { ok: response.ok };
  } catch (error) {
    console.error("updateUser error:", error);
    return error;
  }
};
