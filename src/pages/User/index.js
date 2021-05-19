import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FiLogOut, FiArrowLeft, FiLogIn } from "react-icons/fi";

import { UserContainer, UserInfo, Infos, Header } from "./styles";

import Nav from "../../components/Nav";
import { useApp } from "../../contexts/AppContext";
import api from "../../services/api";

export default function User() {
  const history = useHistory();
  const {
    user,
    setUser,
    setFollowers,
    setFollowing,
    setRepos,
    follower,
    setFollower,
    setHomeActive,
    setReposActive,
    setFollowersActive,
    setFollowingActive,
  } = useApp();

  useEffect(() => {
    setHomeActive(true);
    setReposActive(false);
    setFollowersActive(false);
    setFollowingActive(false);
  });

  const getUser = follower.login ? follower : user;

  const handleClick = () => {
    setUser([]);
    setFollowers([]);
    setFollowing([]);
    setRepos([]);

    history.push("/");
  };

  const handleClickSave = async () => {
    setUser(follower);
    const followers = await api.get(`${follower.login}/followers`);
    setFollowers(followers.data);
    const following = await api.get(`${follower.login}/following`);
    setFollowing(following.data);
    const repos = await api.get(`${follower.login}/repos`);
    setRepos(repos.data);

    setFollower([]);

    history.push("/user");
  };

  const handleClickInfo = (goto) => {
    if (goto === "seguidores") {
      history.push("/user/followers");
    }
    if (goto === "seguindo") {
      history.push("/user/following");
    }
    if (goto === "repos") {
      history.push("/user/repos");
    }
  };

  return (
    <UserContainer>
      <Header>
        {follower.login && (
          <button
            type="button"
            onClick={() => {
              setFollower([]);
              history.goBack();
            }}
          >
            <FiArrowLeft size={20} color="white" />
          </button>
        )}
        <h3>#{getUser.login}</h3>

        {follower.login ? (
          <button type="button" onClick={handleClickSave}>
            <span>Salvar</span>
            <FiLogIn size={20} color="#5CBC29" />
          </button>
        ) : (
          <button type="button" onClick={handleClick}>
            <span>Sair</span>
            <FiLogOut size={20} color="#D03434" />
          </button>
        )}
      </Header>
      <img src={getUser.avatar_url} alt={getUser.name} />
      <UserInfo>
        <div>
          <h2>
            <span>{getUser.name}</span>
          </h2>
          <p>{getUser.email || "E-mail privado"}</p>
          <p>{getUser.location}</p>
        </div>

        <Infos>
          <button
            type="button"
            onClick={() => {
              handleClickInfo("seguidores");
            }}
          >
            <h2>{getUser.followers}</h2> Seguidores
          </button>
          <button
            type="button"
            onClick={() => {
              handleClickInfo("seguindo");
            }}
          >
            <h2>{getUser.following}</h2> Seguindo
          </button>
          <button
            type="button"
            onClick={() => {
              handleClickInfo("repos");
            }}
          >
            <h2>{getUser.public_repos}</h2> Repos
          </button>
        </Infos>

        <div>
          <h2>
            <span>BIO</span>
          </h2>
          <p>{getUser.bio}</p>
        </div>
      </UserInfo>
      <Nav />
    </UserContainer>
  );
}
