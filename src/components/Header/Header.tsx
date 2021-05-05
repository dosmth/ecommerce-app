import * as React from "react";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.css";

import Search from "../Search/Search";

export default function Header() {
  let history = useHistory();
  const sticky = useRef(null);

  // TODO: сделать debounce из _
  function handleScroll() {
    if (window.pageYOffset > sticky.current.offsetTop + 150) {
      console.log("sticky");
      sticky.current.classList.add(styles.sticky);
    } else {
      console.log("not-sticky");
      sticky.current.classList.remove(styles.sticky);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <header ref={sticky}>
      <div className={styles.container}>
        <a
          className={styles.title}
          onClick={() => {
            history.push("/");
            window.scrollTo(0, 0);
          }}
        >
          eCommerce App
        </a>
        <Search />
      </div>
    </header>
  );
}
