export const signinUser = async (email, password) => {
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
};

export const getUser = async (token) => {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) return response;

  const userData = await response.json();
  return { ok: response.ok, userData };
};
