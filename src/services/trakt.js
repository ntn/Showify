import axios from "axios";
const baseUrl = "https://api.trakt.tv";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      "trakt-api-version": 2,
      "trakt-api-key":
        "99b8f99564ecf2d2dfcb1c65084bd4e12617380f7073225fe4e184595cc2f157",
    },
  };
  const response = await axios.get(
    `${baseUrl}/calendars/my/shows/2014-09-01/7`,
    config
  );
  console.log("res: ", response);
  return response.data;
};

export default { getAll, setToken };
