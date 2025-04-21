import { FooterIcons, footerLinks1, footerLinks2 } from "../Constant";

const Footer = () => {
  return (
    <footer className="py-[5rem] px-[2.5rem] bg-primary-dark-blue">
      <div className="grid grid-cols-4 gap-5">
        <div>
          <img src="/images/logo.svg " />
          {FooterIcons.map((link) => (
            <div>
              <ul key={link.id}>
                <li>
                  <img src={link.iconPath} />
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div>
          {footerLinks1.map((link) => (
            <ul key={link.id}>
              <li>
                <a href="#">{link.name}</a>
              </li>
            </ul>
          ))}
        </div>

        <div>
          {footerLinks2.map((link) => (
            <ul key={link.id}>
              <li>
                <a href="#">{link.name}</a>
              </li>
            </ul>
          ))}
        </div>

        <div>
          <form>
            <input type="text" placeholder="update in your inbox" />
            <button>Go</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
