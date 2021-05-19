import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FiStar, FiLock, FiUnlock, FiArrowLeft } from "react-icons/fi";

import { UserReposContainer, Header, UserReposDiv } from "./styles";
import Nav from "../../components/Nav";
import { useApp } from "../../contexts/AppContext";

export default function UserRepos() {
  const history = useHistory();

  const {
    repos,
    user,
    setHomeActive,
    setReposActive,
    setFollowersActive,
    setFollowingActive,
  } = useApp();

  useEffect(() => {
    setHomeActive(false);
    setReposActive(true);
    setFollowersActive(false);
    setFollowingActive(false);
  });

  return (
    <UserReposContainer>
      <Header>
        <button type="button" onClick={() => history.goBack()}>
          <FiArrowLeft size={20} color="white" />
        </button>
        <span>{user.public_repos} repositórios</span>
      </Header>
      <UserReposDiv>
        {repos.map((repo) => (
          <div key={repo.name}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <span>
              <span>
                <FiStar
                  size={20}
                  color="#FFCE00"
                  style={{ marginRight: "0.2rem" }}
                />
                {repo.stargazers_count}
              </span>
              <span>
                <FiUnlock
                  size={20}
                  color="#63BF1F"
                  style={{ marginRight: "0.2rem" }}
                />
                <FiLock size={20} color="#CC042A" />
              </span>
            </span>
          </div>
        ))}
      </UserReposDiv>
      <Nav />
    </UserReposContainer>
  );
}
