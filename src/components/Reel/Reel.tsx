import reelUrl from "/reel.png";
import styles from "./Reel.module.scss";
import { useViewMasterStore } from "../../store";
import { useState } from "react";
import Button from "../Button/Button";

function Reel() {
  const [debugMode, setDebugMode] = useState(false);
  const [reelRotation, setReelRotation] = useState(0);
  const { calibrationReelColors, images } = useViewMasterStore();

  const rotateReel = () => {
    if (reelRotation >= 334) {
      setReelRotation(1 - 1);
    } else {
      setReelRotation(reelRotation + 360 / 14);
    }
  };

  const renderImages = () => {
    if (!debugMode) {
      return images.map((image: string, index: number) => {
        return (
          <>
            <div
              className={`${styles[`slide-${index + 1}`]} ${styles.left}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div
              className={`${styles[`slide-${index + 1}`]} ${styles.right}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </>
        );
      });
    }

    //Debug mode
    const debugReel = [];
    for (let i = 0; i < 7; i++) {
      debugReel.push(
        <>
          <div
            className={`${styles[`slide-${i + 1}`]} ${styles.left}`}
            style={{ backgroundColor: `${calibrationReelColors[i]}` }}
          >
            <span>{i + 1}</span>
          </div>
          <div
            className={`${styles[`slide-${i + 1}`]} ${styles.right}`}
            style={{ backgroundColor: `${calibrationReelColors[i]}` }}
          >
            <span>{i + 1}</span>
          </div>
        </>
      );
    }
    return debugReel;
  };

  return (
    <div
      className={styles.reelContainer}
      style={{ transform: `rotate(${reelRotation}deg)` }}
    >
      <div className={styles.calibrationDiskSwitchContainer}>
        <div>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={debugMode}
              onChange={() => setDebugMode(!debugMode)}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <div>Calibration disk</div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${reelUrl})` }}
        className={styles.reel}
      >
        <div className={styles.reelImagesContainer}>{renderImages()}</div>
      </div>

      <div className={styles.buttons}>
        <Button onClick={rotateReel} text="Rotate reel" />
        <Button onClick={() => setReelRotation(1 - 1)} text="Reset rotation" />
      </div>
    </div>
  );
}

export default Reel;
