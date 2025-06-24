export default function Header(){

  return (
      <header className="header">
        <nav className="navbar white">
          <div className="nav-wrapper ">
            <a href="/" className="brand-logo grey-text">Grepp</a>
            <ul id="nav-mobile"
                className="right hide-on-med-and-down grey-text">
              <li><a href="/member/signin" className="grey-text">sign in</a>
              </li>
              <li><a href="/member/signup" className="grey-text">sign up</a>
              </li>
              <li>
                <a href="mobile.html">
                  <i className="mdi mdi-dots-vertical grey-text sidenav-trigger"
                     data-target="slide-out"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  )

}