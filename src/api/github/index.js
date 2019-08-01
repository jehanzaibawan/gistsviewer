import { API_ADDRESS } from "./config";

export const getUserGists = async username => {
  try {
    const response = await fetch(`${API_ADDRESS}/users/${username}/gists`, {
      method: "get"
    });

    return await response.json();
  } catch (ex) {
    // handle   all kind of exceptions here i.e (Network, Service down or Unavailable etc.)
    return [];
  }
};

export const getGistForks = async fork_url => {
  try {
    const response = await fetch(fork_url, {
      method: "get"
    });

    return await response.json();
  } catch (ex) {
    // handle   all kind of exceptions here i.e (Network, Service down or Unavailable etc.)
    return [];
  }
};
