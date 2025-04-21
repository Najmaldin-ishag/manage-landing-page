import Button from "../Components/Button";
import { NavLinks } from "../Constant";

const NavBar = () => {
  return (
    <header className="mt-[2.5rem]! section-padding container ">
      <nav className="flex justify-between items-center">
        <div>
          <img src="/images/logo.svg" alt="Logo" className="logo" />
        </div>

        <div>
          <ul className="flex justify-between items-center gap-4">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <a href="#">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <Button className="btn bg-primary-bright-red">Get Started</Button>
      </nav>
    </header>
  );
};

export default NavBar;
