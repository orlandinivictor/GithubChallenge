import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import NotificationSystem from "react-notification-system";

import { LoginContainer, Form } from "./styles";
import api from "../../services/api";
import { useApp } from "../../contexts/AppContext";

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const { setUser, setFollowers, setRepos, setFollowing } = useApp();

  const notificationSystem = React.createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await api.get(username);
      const followers = await api.get(`${username}/followers`);
      const following = await api.get(`${username}/following`);
      const repos = await api.get(`${username}/repos`);

      setFollowers(followers.data);
      setFollowing(following.data);
      setRepos(repos.data);
      setUser(user.data);

      history.push("/user");
    } catch (err) {
      const notification = notificationSystem.current;
      notification.addNotification({
        message: "Usuário inválido",
        level: "error",
      });
    }
  };

  return (
    <LoginContainer>
      <FaGithub size={100} color="#FFCE00" />

      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Usuário"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">
          <span>ENTRAR</span>
          <FaArrowRight size={14} />
        </button>
      </Form>
      <NotificationSystem ref={notificationSystem} />
    </LoginContainer>
  );
}
