import axios from "axios";

export const getJwtToken = (email) => {
  axios({
    method: "post",
    url: "https://ucritique-server.vercel.app/jwt",
    data: {
      email: email,
    },
  }).then((res) => localStorage.setItem("accessToken", res.data.token));
};
