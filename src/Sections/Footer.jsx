import { FooterIcons, footerLinks1, footerLinks2 } from "../Constant";
// const img = "/public/images/logo.svg";

const date = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="py-[5rem] px-[2.5rem] bg-primary-dark-blue">
      <div className="grid grid-cols-4 gap-5 items-center justify-center">
        <div>
          <a href="/">
            <img src="/images/logo.svg" alt="Logo" className="mb-[2rem]" />
          </a>
          <div className="flex gap-4 mt-10">
            {FooterIcons.map((link) => (
              <img src={link.iconPath} />
            ))}
          </div>
        </div>

        <div className="grid gap-2 text-white">
          {footerLinks1.map((link) => (
            <ul key={link.id}>
              <li>
                <a className="cursor-pointer" href="#">
                  {link.name}
                </a>
              </li>
            </ul>
          ))}
        </div>

        <div className="grid gap-2 text-white">
          {footerLinks2.map((link) => (
            <ul key={link.id}>
              <li>
                <a className="cursor-pointer" href="#">
                  {link.name}
                </a>
              </li>
            </ul>
          ))}
        </div>

        <div>
          <form>
            <input
              className="bg-white py-2 px-8 rounded-full outline-0"
              type="text"
              placeholder="update in your inbox"
            />
            <button
              type="submit"
              className="bg-primary-bright-red py-2 px-3 rounded-3xl ml-4 cursor-pointer text-white shadow-2xl"
            >
              Go
            </button>
          </form>

          <p className="text-white text-sm mt-8">
            copyright {date} Designed by Front-end Mentor, Developed by
            Najmaldin Ishag
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
