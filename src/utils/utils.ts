import queryString from "query-string";

export const getAccessToken = () => {
  let accessToken = localStorage.getItem("trakt-user-token");
  if (!accessToken) {
    const parsedQueryString = queryString.parse(window.location.search);
    accessToken = parsedQueryString.access_token
      ? parsedQueryString.access_token.toString()
      : null;
    if (accessToken) {
      localStorage.setItem("trakt-user-token", accessToken);
    }
  }
  return accessToken;
};
