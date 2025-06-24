import authApi from "../api/authApi";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Login(){

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function loginHandler(ev){
    ev.preventDefault()
    const response = await authApi.login(username, password);
    console.dir(response)
    navigate("/")
  }

  return (
      <>
        <form className="col s12" method="post" id="signupForm" onSubmit={loginHandler}>
          <div className="row">
            <div className="input-field col s7 ">
              <i className="material-icons prefix">account_circle</i>
              <input type="text" placeholder="userId" onChange={e => setUsername(e.target.value)}
                     name="username" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s7 ">
              <i className="material-icons prefix">account_circle</i>
              <input type="password" onChange={e => setPassword(e.target.value)}
                     placeholder="password" className="validate" name="password"/>
              <span className="helper-text"></span>
            </div>
          </div>
          <div className="row">
            <button className="btn waves-effect waves-light offset-s1 col-6"
                    type="submit" name="action">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>

      </>

  )
}