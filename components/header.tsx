import Image from "next/image";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <div>
        <a href="http://jadohonda.netlify.app/index.html">
          <Image src={"/logo.jpg"} alt="logo" width={200} height={0} />
        </a>
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-x-10">
          <li className="text-[20px] font-semibold">
            <a href="https://jadohonda.netlify.app/about.html">About</a>
          </li>
          <li className="text-[20px] font-semibold">
            <a href="https://jadohonda.netlify.app/contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
