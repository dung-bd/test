import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
// import {auth, provider} from './firebase'
function Login(props) {
    // const signIn=()=>{
    // //   auth.signInWithPopup(provider)
    // //   .then(result =>{
    // //       console.log(result)
    // //   }).catch((error)=>alert(error.message))
    // }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                     alt=""
                     />
                     <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
                     alt=""
                     />
            </div>
            <Button type="submit" onClick={props.signIn}>
                SignIn
            </Button>
        </div>
    )
}

export default Login
