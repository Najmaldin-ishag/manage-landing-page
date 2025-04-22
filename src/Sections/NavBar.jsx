import Button from "../Components/Button";
import { NavLinks } from "../Constant";

const NavBar = () => {
  return (
    <header className="mt-[2.5rem]! section-padding container ">
      <nav className="flex justify-between items-center">
        <div className="flex max-sm:w-full justify-between ">
          <a href="/">
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="logo cursor-pointer"
            />
          </a>
          <button className="lg:hidden max-sm:block ml-auto ">
            <img
              src="/images/icon-hamburger.svg"
              className="h-6 w-6  "
              alt="hamburger-icon"
            />
          </button>
        </div>

        <div className="max-sm:hidden">
          <ul className="flex justify-between items-center gap-4">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <a className="cursor-pointer" href="#">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Button className="btn max-sm:hidden bg-primary-bright-red">
          Get Started
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;
