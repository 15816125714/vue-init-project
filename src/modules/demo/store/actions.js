import api from "api";

export const getUserInfo = ({}, params) => {
  return api.get("/auth/user");
};