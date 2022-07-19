import { checkCookie, getCookie } from "../../utils/cookies/cookies";
import jwt_decode from "jwt-decode";

const InitUsername = () => {
  const token = getCookie("accessToken");
  if (token) {
    var decoded = jwt_decode(token);
    return decoded.username;
  }
  return "";
};

const userSlice = (set, get) => ({
  username: InitUsername(),
  isLogged: checkCookie("accessToken"),
  setLogged: (s) => {
    set({ isLogged: s });
  },
  setUsername: (u) => {
    set({ username: u });
  },
  logout: () => {
    set({ username: "" });
    set({ isLogged: false });
  },
});

export default userSlice;
