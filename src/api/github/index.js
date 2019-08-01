import { API_ADDRESS, API_CLIENT_ID, API_CLIENT_SECRET } from "./config";

export const getUserGists = async username => {
  try {
    const response = await fetch(
      `${API_ADDRESS}/users/${username}/gists?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`,
      {
        method: "get"
      }
    );

    return await response.json();
  } catch (ex) {
    // handle   all kind of exceptions here i.e (Network, Service down or Unavailable etc.)
    return [];
  }
};

export const getGistForks = async fork_url => {
  try {
    const response = await fetch(
      `${fork_url}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`,
      {
        method: "get"
      }
    );

    return await response.json();
  } catch (ex) {
    // handle   all kind of exceptions here i.e (Network, Service down or Unavailable etc.)
    return [];
  }
};
