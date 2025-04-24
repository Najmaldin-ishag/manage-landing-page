import { FooterIcons, footerLinks1, footerLinks2 } from "../Constant";
// const img = "/public/images/logo.svg";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="py-[5rem] px-[2.5rem] bg-primary-dark-blue max-sm:overflow-hidden">
      <div className="grid grid-cols-4 gap-5 items-center justify-center max-sm:grid-cols-1 max-sm:text-center ">
        <div className="max-sm:row-start-4 max-sm:row-end-5 max-sm:mx-auto">
          <a href="/">
            <img src="/images/logo.svg" alt="Logo" className="mb-[2rem]" />
          </a>
          <div className="flex gap-4 mt-10">
            {FooterIcons.map((link) => (
              <img key={link.id} src={link.iconPath} />
            ))}
          </div>
        </div>

        <div className="gap-2 grid text-white">
          {footerLinks1.map((link) => (
            <ul key={link.id}>
              <li className="">
                <a
                  className="cursor-pointer hover:text-primary-bright-red"
                  href="#"
                >
                  {link.name}
                </a>
              </li>
            </ul>
          ))}
        </div>

        <div className=" text-white">
          {footerLinks2.map((link) => (
            <ul key={link.id}>
              <li className="mb-2">
                <a
                  className="cursor-pointer hover:text-primary-bright-red"
                  href="#"
                >
                  {link.name}
                </a>
              </li>
            </ul>
          ))}
        </div>

        <div className="max-sm:row-span-full ">
          <form>
            <input
              className="bg-white py-2 px-8 rounded-full outline-0"
              type="text"
              placeholder="update in your inbox"
              required
            />
            <button
              type="submit"
              className="bg-primary-bright-red py-2 px-3 rounded-3xl ml-4 cursor-pointer text-white shadow-2xl"
            >
              Go
            </button>
          </form>

          <p className="text-white text-sm mt-8 max-sm:hidden">
            Copyright {date} Designed by Front-end Mentor, Developed by
            Najmaldin Ishag
          </p>
        </div>
        <p className="text-white text-sm mt-8 lg:hidden md:hidden">
          Copyright {date} Designed by Front-end Mentor, Developed by Najmaldin
          Ishag
        </p>
      </div>
    </footer>
  );
};

export default Footer;
