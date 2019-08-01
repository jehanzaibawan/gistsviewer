import React, { useState, useEffect } from "react";
import "./App.scss";
import TextBox from "../components/Textbox";
import Button from "../components/Button";
import List from "../components/List";
import { getUserGists, getGistForks } from "../api/github";

const App = props => {
  const [viewer, setViewer] = useState({
    showLoading: false,
    isSearchEmpty: true,
    gists: []
  });

  let textboxRef = React.createRef();

  useEffect(() => {
    textboxRef.inputRef.focus();
  });

  const getListOfForks = async gists => {
    if (Array.isArray(gists) && gists.length > 0) {
      const forksPromises = gists.map(async gist => {
        const forks = await getGistForks(gist.forks_url);
        return { ...gist, forks };
      });

      return await Promise.all(forksPromises);
    }

    return gists;
  };

  const searchClickHandler = async () => {
    const username = textboxRef.inputRef.value;

    if (username.length > 0) {
      setViewer({ ...viewer, isSearchEmpty: false, showLoading: true });
      let gists = await getUserGists(username);

      gists = await getListOfForks(gists);

      setViewer({ gists, showLoading: false });
    } else setViewer({ ...viewer, isSearchEmpty: true });
  };

  return (
    <div className="App">
      <div className="search-bar-wrapper">
        <TextBox
          ref={ref => {
            textboxRef = ref;
          }}
          name="username"
          label="Enter github username"
        />
        <Button
          caption={viewer.showLoading ? "Searching.." : "Search"}
          onClick={searchClickHandler}
          disabled={viewer.showLoading}
        />
      </div>
      <div className="content-wrapper">
        {(() => {
          if (viewer.isSearchEmpty)
            return (
              <div className="username-empty">
                Please enter a github username to fetch its gists! i.e
                (mattifestation, xameeramir).
              </div>
            );

          // only show this section when loading process is finised
          if (!viewer.showLoading) {
            if (Array.isArray(viewer.gists)) {
              if (viewer.gists.length > 0) {
                return <List data={viewer.gists} />;
              } else
                return (
                  <div className="list-empty">
                    This user has (0) public gists available on github.
                  </div>
                );
            } else
              return (
                <div className="search-error">
                  Looks like an error in your search parameter. Please make sure
                  that you are providing a search parameter based on signle word
                  without any space i.e (mattifestation, xameeramir).
                </div>
              );
          }
        })()}
      </div>
    </div>
  );
};

export default App;
