
const loginHandler = async ev => {
   ev.preventDefault()

}

export default function Login(){
  return (
      <>
        <form className="col s12" method="post" id="signupForm">
          <div className="row">
            <div className="input-field col s7 ">
              <i className="material-icons prefix">account_circle</i>
              <input type="text" placeholder="userId" name="username" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s7 ">
              <i className="material-icons prefix">account_circle</i>
              <input type="password"
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