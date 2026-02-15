import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div>Reps</div>

      <nav className="header__nav">
        <button>Home</button>
        <button>Sign In</button>
      </nav>
    </header>
  );
}

export default Header;
