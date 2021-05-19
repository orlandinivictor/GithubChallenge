import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [repos, setRepos] = useState([]);
  const [follower, setFollower] = useState([]);

  const [homeActive, setHomeActive] = useState(false);
  const [reposActive, setReposActive] = useState(false);
  const [followersActive, setFollowersActive] = useState(false);
  const [followingActive, setFollowingActive] = useState(false);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        followers,
        setFollowers,
        follower,
        setFollower,
        following,
        setFollowing,
        repos,
        setRepos,
        homeActive,
        setHomeActive,
        reposActive,
        setReposActive,
        followersActive,
        setFollowersActive,
        followingActive,
        setFollowingActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
