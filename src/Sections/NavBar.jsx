import { useState } from "react";
import Button from "../Components/Button";
import { NavLinks } from "../Constant";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavigation() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  function handleClick() {
    if (!isOpen) return;
    setIsOpen(false);
  }
  return (
    <header className="mt-[2.5rem]! section-padding container relative ">
      <nav className="flex justify-between items-center max-md:flex max-md:justify-between">
        <div className="flex justify-between max-sm:flex max-sm:justify-between max-sm:min-w-full">
          <a href="/">
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="logo cursor-pointer"
            />
          </a>
          <div className="max-md:hidden max-lg:hidden max-sm:block">
            {isOpen ? (
              <button onClick={toggleNavigation}>
                <img src="/images/icon-close.svg" className="ml-auto" />
              </button>
            ) : (
              <button onClick={toggleNavigation} className="lg:hidden ">
                <img
                  src="/images/icon-hamburger.svg"
                  className="h-6 w-6  "
                  alt="hamburger-icon"
                />
              </button>
            )}
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="max-sm:hidden">
          <ul className="flex justify-between items-center gap-4">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="cursor-pointer max-sm:mb-50 hover:text-primary-bright-red"
                  href="#"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav */}

        {isOpen && (
          <div
            className={`${
              isOpen
                ? "flex flex-col min-w-[80vw] max-h-screen  px[5rem] py-[6rem] justify-center items-center bg-white shadow-xl absolute top-[12rem] left-1/2 -translate-x-1/2 -translate-y-1/2 "
                : "lg:hidden"
            }`}
          >
            <ul className="max-sm:flex max-sm:gap-8 max-sm:flex-col items-center justify-center">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className="cursor-pointer max-sm:mb-50 hover:text-primary-bright-red"
                    href="#"
                    onClick={handleClick}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button className="btn max-sm:hidden bg-primary-bright-red">
          Get Started
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;
