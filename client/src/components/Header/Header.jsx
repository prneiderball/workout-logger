import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="header__logo--container">
        <div className="header__logo">Reps</div>
        <div className="header__subtitle">
          Count every rep, crush every goal
        </div>
      </div>
      <nav className="header__nav">
        <button className="header__btn">Home</button>
        <button className="header__btn">Sign In</button>
      </nav>
    </header>
  );
}

export default Header;
