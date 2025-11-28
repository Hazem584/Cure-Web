const getApiBaseUrl = () => {
  const base = import.meta.env.VITE_API_BASE_URL;
  if (!base) {
    return "/";
  }
  return base.endsWith("/") ? base : `${base}/`;
};

export const API_BASE_URL = getApiBaseUrl();
export const DOCTORS_API_URL = `${API_BASE_URL}doctors`;
export const APPOINTMENTS_API_URL = `${API_BASE_URL}appointments`;
export const LOGIN_URL = `${API_BASE_URL}auth/login`;
export const SIGNUP_URL = `${API_BASE_URL}auth/register`;
