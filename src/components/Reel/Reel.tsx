import React from "react";
import reelUrl from "/reel.png";
import styles from "./Reel.module.scss";
import { useViewMasterStore } from "../../store";

function Reel() {
  const { images } = useViewMasterStore();

  return (
    <div className={styles.reelContainer}>
      <img src={reelUrl} />
    </div>
  );
}

export default Reel;
