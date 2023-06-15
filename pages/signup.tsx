import { useEffect, useState, FormEvent } from "react";
import MainWrapper from "../components/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/store";
import Router from "next/router";
import { signUp } from "../api/users";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const loggedIn = useSelector((state: AppState) => state.auth.authState);

  const dispatch = useDispatch();
  function clickHandler() {
    dispatch(
      signUp({ password, username, firstName, lastName, age, repPassword }),
    );
  }
  function handleChangeName(e: FormEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }
  function handleChangPassword(e: FormEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function handleChangeRepPassword(e: FormEvent<HTMLInputElement>) {
    setRepPassword(e.target.value);
  }
  function handleChangeFN(e: FormEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }
  function handleChangeLN(e: FormEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }
  function handleChangeAge(e: FormEvent<HTMLInputElement>) {
    setAge(e.target.value);
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
          <h1>Sign up page</h1>
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
          <div>
            <label>Repeat password: </label>
            <input
              value={repPassword}
              placeholder="password"
              onInput={handleChangeRepPassword}
              type="password"
            />
          </div>
          <div>
            <label>First Name: </label>
            <input
              value={firstName}
              placeholder="password"
              onInput={handleChangeFN}
              type="text"
            />
          </div>
          <div>
            <label>Last name: </label>
            <input
              value={lastName}
              placeholder="password"
              onInput={handleChangeLN}
              type="text"
            />
          </div>
          <div>
            <label>Age: </label>
            <input
              value={age}
              placeholder="password"
              onInput={handleChangeAge}
              type="number"
            />
          </div>
          <button onClick={clickHandler}>Submit</button>
        </div>
      </div>
    </MainWrapper>
  );
};

export default SignUp;
