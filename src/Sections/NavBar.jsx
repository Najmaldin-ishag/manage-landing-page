import Button from "../Components/Button";
import { NavLinks } from "../Constant";

const NavBar = () => {
  return (
    <header className="">
      <nav>
        <div>
          <img src="/images/logo.svg" alt="Logo" className="logo" />
        </div>

        <div>
          <ul>
            {NavLinks.map((link) => (
              <li key={link.id}>
                <a href="#">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <Button>Get Started</Button>
      </nav>
    </header>
  );
};

export default NavBar;
