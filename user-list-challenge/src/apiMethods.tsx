/*
  Goto https://reqres.in/ for documentation on this api.
  
  If you haven't used axios, documentation here: https://github.com/axios/axios
  OR use any method / library you're comfortable with to perform the request(s).

  **** These stubs are just provided as a convienece, ****
  **** feel free to change whatever you like to accomplish the goal. ****
*/

import axios from "axios";

const baseUrl = "https://reqres.in/";

export const getUsers = (page: number) => {
  return axios
    .get(`${baseUrl}api/users?page=${page}`)
    .then((d) => d.data)
    .catch((e) => console.log(e));
};

// Bonus:
export const deleteUser = (id: number) => {
  return axios
    .delete(`${baseUrl}api/users/${id}}`)
    .then((d) => d.status === 204)
    .catch((e) => console.log(e));
};
