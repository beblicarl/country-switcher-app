import "../header/header.styles.css";

const Header = () => {
  return (
    <div className="header">
      <h2>Where in the world?</h2>
      <div className="mode">
        <i class="far fa-moon"></i>
        <h3>Dark Mode</h3>
      </div>
    </div>
  );
};

export default Header;
