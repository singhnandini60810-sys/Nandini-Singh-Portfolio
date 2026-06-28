import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";

function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShow(window.scrollY > 350);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <button

      className={`back-to-top ${show ? "show" : ""}`}

      onClick={scrollTop}

    >

      <FaArrowUp />

    </button>

  );

}

export default BackToTop;