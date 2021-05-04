import * as React from "react";
import { useEffect, useRef } from "react";
import styles from "./Overlay.module.css";

type Props = {
  closeModal: Function;
  text: string;
};

export default function Overlay(props: Props) {
  const modal = useRef(null);

  // закрываем при клике на внешнюю область
  function handleOutsideClick(e: Event) {
    // function isNil(value) {
    //   return value == null;
    // }
    // console.log(modal);

    // if (!isNil(modal)) {
    if (modal) {
      if (!modal.current.contains(e.target)) {
        props.closeModal();
        document.removeEventListener("click", handleOutsideClick, false);
      }
    }
  }

  // закрываем на esc
  function handleKeyUp(e: KeyboardEvent) {
    let key = e.key || e.keyCode;
    console.log(key);
    if (key == "Escape" || key == 27) {
      e.preventDefault();
      props.closeModal();
      window.removeEventListener("keyup", handleKeyUp, false);
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, false);
    document.addEventListener("click", handleOutsideClick, false);
    return () => {
      window.removeEventListener("keyup", handleKeyUp, false);
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, []);

  return (
    <div className={styles.darken}>
      <div className={styles.card} ref={modal}>
        <div>
          <p>{props.text}</p>
          <button className={styles.closer} onClick={() => props.closeModal()}>
            Закрыть
          </button>
          <p>Также можно закрыть на esc и на клик по внешней области</p>
        </div>
      </div>
    </div>
  );
}
