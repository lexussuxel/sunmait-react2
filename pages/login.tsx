import { useEffect, useState } from "react";
import MainWrapper from "../components/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/store";
import { LogIn } from "../store/authSlice";
import Router from "next/router";

const Login = ()=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [click, setClick] = useState(false);
    const loggedIn = useSelector((state:AppState)=> state.auth.authState)
    const dispatch = useDispatch()
    function clickHandler(){
        setClick(true)
        dispatch(LogIn({username, password}))
    }

    useEffect(()=>{
        if(loggedIn){
            setClick(false)
            Router.push('/')
        }
    }, [loggedIn])

    return(
        <MainWrapper>
        <div style={{ flexDirection: "column", width:"100%" }}>
        <div className={"base_padding content login"}>
        <h1>Log in page</h1>
        <div>
        <label>Username: </label>
            <input value={username} placeholder="username" onInput={(e)=>{setUsername(e.target.value);setClick(false)}} type="text" />
        </div>
        <div>
            <label>Password: </label>
            <input value={password} placeholder="password" onInput={(e)=>{setPassword(e.target.value);setClick(false)}} type="password" />
        </div>
        {click && <div className="warning">Incorrect username or password!!!</div>}
            <button onClick={clickHandler}>Submit</button>

        </div>

        </div>
           
        </MainWrapper>
    )
}

export default Login;