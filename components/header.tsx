import Image from "next/image";

const Header = () => {
  return (
    <header className="my-5 flex">
      <div>
        <a href="http://jadohonda.netlify.app/index.html">
          <Image src={"/logo.jpg"} alt="logo" width={200} height={0} />
        </a>
      </div>
      <nav>
        <ul className="nav-menu">
          <li className="text-slate-500">
            <a href="https://jadohonda.netlify.app/about.html">About</a>
          </li>
          <li>
            <a href="https://jadohonda.netlify.app/contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
