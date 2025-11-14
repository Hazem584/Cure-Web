export const getAuthToken = () => {
  if (typeof window === "undefined") {
    return null;
  }


  return (
    window.localStorage.getItem("cure_token") ||
    window.localStorage.getItem("token") ||
    window.localStorage.getItem("authToken") ||
    null
  );
};
