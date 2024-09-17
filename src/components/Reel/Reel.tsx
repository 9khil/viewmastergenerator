import React from "react";
import reelUrl from "/reel.png";
import styles from "./Reel.module.scss";
import { useViewMasterStore } from "../../store";

function Reel() {
  const { images } = useViewMasterStore();

  const renderImages = () => {
    return images.map((image: string, index: number) => {
      return <img className={`reel-${index + 1}`} src={image} />;
    });
  };

  return (
    <div className={styles.reelContainer}>
      <div
        style={{ backgroundImage: `url(${reelUrl})` }}
        className={styles.reel}
      >
        <div className={styles.reelImagesContainer}>{renderImages()}</div>
      </div>
    </div>
  );
}

export default Reel;
