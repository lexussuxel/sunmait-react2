import { useEffect, useState, FormEvent } from "react";
import MainWrapper from "../components/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/store";
import Router from "next/router";
import { authentication } from "../api/users";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loggedIn = useSelector((state: AppState) => state.auth.authState);
  const dispatch = useDispatch();
  function clickHandler() {
    // dispatch(LogIn({password, username}));\
    dispatch(authentication({ password, username }));
  }
  function handleChangeName(e: FormEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function redirect() {
    Router.push("/signup");
  }
  function handleChangPassword(e: FormEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  useEffect(() => {
    if (loggedIn) {
      Router.push("/");
    }
  }, [loggedIn]);

  return (
    <MainWrapper>
      <div style={{ flexDirection: "column", width: "100%" }}>
        <div className={"base_padding content login"}>
          <h1>Log in page</h1>
          <div>
            <label>Username: </label>
            <input
              value={username}
              placeholder="username"
              onInput={handleChangeName}
              type="text"
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              value={password}
              placeholder="password"
              onInput={handleChangPassword}
              type="password"
            />
          </div>

          <button onClick={clickHandler}>Submit</button>
          <button onClick={redirect}>Sign up</button>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Login;
