import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { UserFollowContainer, Header, UserFollowDiv } from "./styles";
import Nav from "../../components/Nav";
import { useApp } from "../../contexts/AppContext";
import api from "../../services/api";

export default function UserFollow() {
  const history = useHistory();
  const {
    user,
    followers,
    following,
    setFollower,
    setHomeActive,
    setReposActive,
    setFollowersActive,
    setFollowingActive,
  } = useApp();

  const changeMode = window.location.href.includes("followers");

  const users = changeMode ? followers : following;

  useEffect(() => {
    setHomeActive(false);
    setReposActive(false);

    if (changeMode) {
      setFollowersActive(true);
      setFollowingActive(false);
    }
    if (!changeMode) {
      setFollowingActive(true);
      setFollowersActive(false);
    }
  });

  const handleClick = async (u) => {
    const { data } = await api.get(u.login);
    setFollower(data);

    history.push("/user");
  };

  return (
    <UserFollowContainer>
      <Header>
        <button type="button" onClick={() => history.goBack()}>
          <FiArrowLeft size={20} color="white" />
        </button>
        <span>
          {changeMode
            ? `${user.followers} seguidores`
            : `${user.following} seguindo`}
        </span>
      </Header>
      <UserFollowDiv>
        {users.map((u) => (
          <div key={u.login}>
            <h3>
              <img src={u.avatar_url} alt={u.login} />
              <span>#{u.login}</span>
              <button type="button" onClick={() => handleClick(u)}>
                <FiArrowRight size={20} color="white" />
              </button>
            </h3>
          </div>
        ))}
      </UserFollowDiv>
      <Nav />
    </UserFollowContainer>
  );
}
