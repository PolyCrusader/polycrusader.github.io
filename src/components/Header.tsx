import RefHeader from "./RefHeader";

const Header = () => {
  return (
    <header>
      <h1>Polycrusaders</h1>
      <RefHeader link="teams">Teams</RefHeader>
      <RefHeader link="about">About</RefHeader>
    </header>
  );
};

export default Header;
