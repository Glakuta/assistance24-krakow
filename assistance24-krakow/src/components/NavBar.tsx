import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="relative z-20 flex flex-row justify-between p-5 mt-16">
      <div>Logo</div>
      <nav>
        <ul className="flex-row items-center hidden mt-3 lg:flex ">
          <li>
            <Link
              style={{ scrollBehavior: "smooth" }}
              href="#HeroSection"
              scroll={false}
              className="pr-3 text-2xl font-semibold text-white hover:text-primary-yellow active:hover:text-primary-yellow"
            >
              Strona główna
            </Link>
          </li>
          <li>
            <Link
              style={{ scrollBehavior: "smooth" }}
              href="#AboutUs"
              scroll={false}
              className="pr-3 text-2xl font-semibold text-white hover:text-primary-yellow active:hover:text-primary-yellow"
            >
              O nas
            </Link>
          </li>
          <li>
            <a
              href=""
              className="pr-3 text-2xl font-semibold text-white hover:text-primary-yellow active:hover:text-primary-yellow"
            >
              Mobilny mechanik
            </a>
          </li>
          <li>
            <Link
              style={{ scrollBehavior: "smooth" }}
              href="#OurServices"
              scroll={false}
              className="pr-3 text-2xl font-semibold text-white hover:text-primary-yellow active:hover:text-primary-yellow"
            >
              Nasza Oferta
            </Link>
          </li>
          <li>
            <Link
              style={{ scrollBehavior: "smooth" }}
              href="#Contact"
              scroll={false}
              className="pr-3 text-2xl font-semibold text-white hover:text-primary-yellow active:hover:text-primary-yellow"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
