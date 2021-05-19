import React from "react";
import { FiHome, FiGithub, FiUsers } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";

import { NavContainer } from "./styles";

export default function Nav() {
  const history = useHistory();

  const { homeActive, reposActive, followersActive, followingActive } =
    useApp();

  return (
    <NavContainer>
      <ul>
        <li>
          <button
            className={homeActive && "active"}
            type="button"
            onClick={() => history.push("/user")}
          >
            <FiHome size={40} color={homeActive ? "#000" : "#a5a5a5"} />
            <p>Home</p>
          </button>
        </li>
        <li>
          <button
            className={reposActive && "active"}
            type="button"
            onClick={() => history.push("/user/repos")}
          >
            <FiGithub size={40} color={reposActive ? "#000" : "#a5a5a5"} />
            <p>Repos</p>
          </button>
        </li>
        <li>
          <button
            className={followersActive && "active"}
            type="button"
            onClick={() => history.push("/user/followers")}
          >
            <FiUsers size={40} color={followersActive ? "#000" : "#a5a5a5"} />
            <p>Seguidores</p>
          </button>
        </li>
        <li>
          <button
            className={followingActive && "active"}
            type="button"
            onClick={() => history.push("/user/following")}
          >
            <FiUsers size={40} color={followingActive ? "#000" : "#a5a5a5"} />
            <p>Seguindo</p>
          </button>
        </li>
      </ul>
    </NavContainer>
  );
}
