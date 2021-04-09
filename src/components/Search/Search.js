import React, { useState } from "react";
import styles from "./Search.css";

import Overlay from "../Overlay/Overlay";

export default function Search() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.searchHolder}>
      <input type="text" placeholder="Поиск" />
      <button
        className={styles.searchIcon}
        onClick={() => setShowModal(true)}
      ></button>
      {showModal && (
        <Overlay
          closeModal={() => setShowModal(false)}
          text={"Надо будет сделать"}
        />
      )}
    </div>
  );
}
