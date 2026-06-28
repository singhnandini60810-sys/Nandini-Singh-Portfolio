import { useEffect, useState } from "react";
import "./Navigation.css";
import logo from "../../assets/logos/ns-logo.png";

const links = [
  { name: "About", id: "About" },
  { name: "Skills", id: "Skills" },
  { name: "Projects", id: "Projects" },
  { name: "Work", id: "Work" },
  { name: "Resume", id: "Resume" },
  { name: "Academics", id: "Academics" },
  { name: "Certificates", id: "Certifications" },
  { name: "Activities", id: "Activities" },
  { name: "Contact", id: "Contact" },
];

function Navigation() {

  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 60);

      links.forEach((link) => {

        const section = document.getElementById(link.id);

        if (!section) return;

        const top = section.offsetTop - 160;
        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {

          setActive(link.id);

        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={`navigation ${scrolled ? "nav-small" : ""}`}>

      <img
        src={logo}
        alt="NS Logo"
        className="nav-logo"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      />

      <div className="nav-links">

        {links.map((link) => (

          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? "active-link" : ""}
          >
            {link.name}
          </a>

        ))}

      </div>

    </nav>

  );

}

export default Navigation;